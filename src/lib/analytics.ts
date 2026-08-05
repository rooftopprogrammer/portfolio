// Portfolio analytics.
// Events are posted to our own route handler, which forwards them to the
// backend with a server-side secret. The backend URL never reaches the browser.

const ANALYTICS_ENDPOINT = "/api/analytics";

export type AnalyticsEventType =
    | "page_view"
    | "scroll_depth"
    | "time_spent"
    | "resume_download"
    | "linkedin_click"
    | "email_click"
    | "email_copy";

export interface AnalyticsEvent {
    type: AnalyticsEventType;
    timestamp: number;
    /** YYYY-MM-DD, for grouping. */
    date: string;
    sessionId: string;
    scrollPercentage?: number;
    timeSpentSeconds?: number;
    userAgent?: string;
    referrer?: string;
    screenWidth?: number;
    screenHeight?: number;
    action?: string;
}

function getSessionId(): string {
    if (typeof window === "undefined") return "";

    let sessionId = sessionStorage.getItem("portfolio_session_id");
    if (!sessionId) {
        sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
        sessionStorage.setItem("portfolio_session_id", sessionId);
    }
    return sessionId;
}

function getCurrentDate(): string {
    return new Date().toISOString().split("T")[0];
}

function send(
    type: AnalyticsEventType,
    extra: Partial<AnalyticsEvent> = {}
): void {
    if (typeof window === "undefined") return;

    const event: AnalyticsEvent = {
        type,
        timestamp: Date.now(),
        date: getCurrentDate(),
        sessionId: getSessionId(),
        ...extra,
    };

    const body = JSON.stringify(event);

    // sendBeacon survives page unload far more reliably than fetch().
    if (navigator.sendBeacon) {
        const queued = navigator.sendBeacon(
            ANALYTICS_ENDPOINT,
            new Blob([body], { type: "application/json" })
        );
        if (queued) return;
    }

    void fetch(ANALYTICS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
    }).catch(() => {
        // Analytics must never break the page.
    });
}

export function trackPageView(): void {
    send("page_view", {
        userAgent: navigator.userAgent,
        referrer: document.referrer || "direct",
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
    });
}

export function trackScrollDepth(percentage: number): void {
    send("scroll_depth", { scrollPercentage: percentage });
}

export function trackTimeSpent(seconds: number): void {
    send("time_spent", { timeSpentSeconds: seconds });
}

export function trackResumeDownload(): void {
    send("resume_download");
}

export function trackLinkedInClick(): void {
    send("linkedin_click");
}

export function trackEmailClick(action?: string): void {
    send("email_click", { action });
}

export function trackEmailCopy(): void {
    send("email_copy");
}

/** Manages page-lifecycle analytics for a single visit. */
export class AnalyticsTracker {
    private startTime = 0;
    private maxScrollPercentage = 0;
    private lastReportedSeconds = 0;
    private timeUpdateInterval: ReturnType<typeof setInterval> | null = null;

    start(): void {
        if (typeof window === "undefined") return;

        this.startTime = Date.now();
        trackPageView();

        window.addEventListener("scroll", this.handleScroll, { passive: true });

        // One request every 30s, rather than a 1s timer that mostly no-ops.
        this.timeUpdateInterval = setInterval(() => {
            const seconds = Math.floor((Date.now() - this.startTime) / 1000);
            this.lastReportedSeconds = seconds;
            trackTimeSpent(seconds);
        }, 30_000);

        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }

    stop(): void {
        if (typeof window === "undefined") return;

        window.removeEventListener("scroll", this.handleScroll);
        document.removeEventListener("visibilitychange", this.handleVisibilityChange);

        if (this.timeUpdateInterval) {
            clearInterval(this.timeUpdateInterval);
            this.timeUpdateInterval = null;
        }
    }

    private handleScroll = (): void => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;

        const percentage = Math.min(100, Math.round((window.scrollY / docHeight) * 100));
        if (percentage > this.maxScrollPercentage) {
            this.maxScrollPercentage = percentage;
        }
    };

    /**
     * `visibilitychange` is the reliable end-of-visit signal on mobile;
     * `beforeunload` is not fired at all in several mobile browsers.
     */
    private handleVisibilityChange = (): void => {
        if (document.visibilityState !== "hidden") return;

        const seconds = Math.floor((Date.now() - this.startTime) / 1000);
        if (seconds > this.lastReportedSeconds) {
            this.lastReportedSeconds = seconds;
            trackTimeSpent(seconds);
        }
        if (this.maxScrollPercentage > 0) {
            trackScrollDepth(this.maxScrollPercentage);
        }
    };
}

export const analyticsTracker = new AnalyticsTracker();
