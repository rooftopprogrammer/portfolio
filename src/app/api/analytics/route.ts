import { NextRequest, NextResponse } from 'next/server';

// Server-side only - these are never exposed to the browser
const ANALYTICS_BACKEND_URL = process.env.ANALYTICS_BACKEND_URL || 'https://notesapp-one-tau.vercel.app/api/portfolio-analytics/';
const ANALYTICS_SECRET = process.env.ANALYTICS_SECRET || '';

// Allowed analytics event types
const ALLOWED_EVENT_TYPES = ['page_view', 'scroll_depth', 'time_spent', 'resume_download'];

// Rate limiting: Track requests per session
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 100; // Max requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute window

function isRateLimited(sessionId: string): boolean {
    const now = Date.now();
    const record = requestCounts.get(sessionId);

    if (!record || now > record.resetTime) {
        requestCounts.set(sessionId, { count: 1, resetTime: now + RATE_WINDOW });
        return false;
    }

    if (record.count >= RATE_LIMIT) {
        return true;
    }

    record.count++;
    return false;
}

// Validate event data
function validateEvent(data: Record<string, unknown>): { valid: boolean; error?: string } {
    if (!data.type || !ALLOWED_EVENT_TYPES.includes(data.type as string)) {
        return { valid: false, error: 'Invalid event type' };
    }

    if (!data.sessionId || typeof data.sessionId !== 'string') {
        return { valid: false, error: 'Invalid session ID' };
    }

    if (!data.date || typeof data.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
        return { valid: false, error: 'Invalid date format' };
    }

    // Validate numeric fields if present
    if (data.scrollPercentage !== undefined && (typeof data.scrollPercentage !== 'number' || data.scrollPercentage < 0 || data.scrollPercentage > 100)) {
        return { valid: false, error: 'Invalid scroll percentage' };
    }

    if (data.timeSpentSeconds !== undefined && (typeof data.timeSpentSeconds !== 'number' || data.timeSpentSeconds < 0)) {
        return { valid: false, error: 'Invalid time spent' };
    }

    return { valid: true };
}

export async function POST(request: NextRequest) {
    try {
        // Parse the event data
        const eventData = await request.json();

        // Validate the event data
        const validation = validateEvent(eventData);
        if (!validation.valid) {
            return NextResponse.json({ error: validation.error }, { status: 400 });
        }

        // Rate limiting check
        if (isRateLimited(eventData.sessionId)) {
            return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
        }

        // Forward to the backend with secret authentication
        const response = await fetch(ANALYTICS_BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Analytics-Secret': ANALYTICS_SECRET,
                'X-Forwarded-For': request.headers.get('x-forwarded-for') || 'unknown',
            },
            body: JSON.stringify(eventData),
        });

        if (!response.ok) {
            console.error('Analytics backend error:', response.status);
            // Don't expose backend errors to client
            return NextResponse.json({ success: true }); // Fail silently
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Analytics proxy error:', error);
        // Don't expose errors to client
        return NextResponse.json({ success: true }); // Fail silently
    }
}

// Reject other methods
export async function GET() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
