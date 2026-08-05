import { NextRequest, NextResponse } from "next/server";

// Server-side only — never exposed to the browser.
const ANALYTICS_BACKEND_URL = process.env.ANALYTICS_BACKEND_URL ?? "";
const ANALYTICS_SECRET = process.env.ANALYTICS_SECRET ?? "";

const ALLOWED_EVENT_TYPES = [
    "page_view",
    "scroll_depth",
    "time_spent",
    "resume_download",
    "linkedin_click",
    "email_click",
    "email_copy",
];

// Best-effort per-instance rate limiting.
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 100;
const RATE_WINDOW = 60 * 1000;
const MAX_TRACKED_SESSIONS = 5_000;

function isRateLimited(sessionId: string): boolean {
    const now = Date.now();

    // Drop expired entries so the map cannot grow without bound.
    if (requestCounts.size > MAX_TRACKED_SESSIONS) {
        for (const [key, value] of requestCounts) {
            if (now > value.resetTime) requestCounts.delete(key);
        }
        // Still oversized: the oldest entries go first.
        if (requestCounts.size > MAX_TRACKED_SESSIONS) {
            const excess = requestCounts.size - MAX_TRACKED_SESSIONS;
            let removed = 0;
            for (const key of requestCounts.keys()) {
                if (removed++ >= excess) break;
                requestCounts.delete(key);
            }
        }
    }

    const record = requestCounts.get(sessionId);

    if (!record || now > record.resetTime) {
        requestCounts.set(sessionId, { count: 1, resetTime: now + RATE_WINDOW });
        return false;
    }

    if (record.count >= RATE_LIMIT) return true;

    record.count++;
    return false;
}

function validateEvent(data: Record<string, unknown>): { valid: boolean; error?: string } {
    if (!data.type || !ALLOWED_EVENT_TYPES.includes(data.type as string)) {
        return { valid: false, error: "Invalid event type" };
    }

    if (!data.sessionId || typeof data.sessionId !== "string" || data.sessionId.length > 128) {
        return { valid: false, error: "Invalid session ID" };
    }

    if (
        !data.date ||
        typeof data.date !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(data.date)
    ) {
        return { valid: false, error: "Invalid date format" };
    }

    if (
        data.scrollPercentage !== undefined &&
        (typeof data.scrollPercentage !== "number" ||
            data.scrollPercentage < 0 ||
            data.scrollPercentage > 100)
    ) {
        return { valid: false, error: "Invalid scroll percentage" };
    }

    if (
        data.timeSpentSeconds !== undefined &&
        (typeof data.timeSpentSeconds !== "number" || data.timeSpentSeconds < 0)
    ) {
        return { valid: false, error: "Invalid time spent" };
    }

    return { valid: true };
}

export async function POST(request: NextRequest) {
    // Without a configured backend there is nothing to forward to. Accept and
    // drop, rather than failing open against an unauthenticated endpoint.
    if (!ANALYTICS_BACKEND_URL || !ANALYTICS_SECRET) {
        return NextResponse.json({ success: true });
    }

    try {
        const eventData = await request.json();

        const validation = validateEvent(eventData);
        if (!validation.valid) {
            return NextResponse.json({ error: validation.error }, { status: 400 });
        }

        if (isRateLimited(eventData.sessionId)) {
            return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
        }

        const response = await fetch(ANALYTICS_BACKEND_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Analytics-Secret": ANALYTICS_SECRET,
                "X-Forwarded-For": request.headers.get("x-forwarded-for") ?? "unknown",
            },
            body: JSON.stringify(eventData),
        });

        if (!response.ok) {
            console.error("Analytics backend error:", response.status);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Analytics proxy error:", error);
        // Never surface internals to the client.
        return NextResponse.json({ success: true });
    }
}

export async function GET() {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
