// Portfolio Analytics - Tracks visitor interactions
// Data is sent to our own API which securely forwards to the backend
// The backend URL is never exposed to the browser

const ANALYTICS_ENDPOINT = '/api/analytics'; // Local proxy - secure!

export interface AnalyticsEvent {
    type: 'page_view' | 'scroll_depth' | 'time_spent' | 'resume_download';
    timestamp: number;
    date: string; // YYYY-MM-DD format for grouping
    sessionId: string;
    scrollPercentage?: number; // For scroll depth
    timeSpentSeconds?: number; // For time spent
    userAgent?: string;
    referrer?: string;
    screenWidth?: number;
    screenHeight?: number;
}

// Generate a unique session ID
function getSessionId(): string {
    if (typeof window === 'undefined') return '';

    let sessionId = sessionStorage.getItem('portfolio_session_id');
    if (!sessionId) {
        sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('portfolio_session_id', sessionId);
    }
    return sessionId;
}

// Get current date in YYYY-MM-DD format
function getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
}

// Send analytics event to the backend
async function sendAnalyticsEvent(event: AnalyticsEvent): Promise<void> {
    try {
        await fetch(ANALYTICS_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
            // Use keepalive for events sent during page unload
            keepalive: true,
        });
    } catch (error) {
        // Silently fail - analytics should not break the site
        console.debug('Analytics event failed:', error);
    }
}

// Track page view
export function trackPageView(): void {
    if (typeof window === 'undefined') return;

    const event: AnalyticsEvent = {
        type: 'page_view',
        timestamp: Date.now(),
        date: getCurrentDate(),
        sessionId: getSessionId(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct',
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
    };

    sendAnalyticsEvent(event);
}

// Track scroll depth
export function trackScrollDepth(percentage: number): void {
    if (typeof window === 'undefined') return;

    const event: AnalyticsEvent = {
        type: 'scroll_depth',
        timestamp: Date.now(),
        date: getCurrentDate(),
        sessionId: getSessionId(),
        scrollPercentage: percentage,
    };

    sendAnalyticsEvent(event);
}

// Track time spent on page
export function trackTimeSpent(seconds: number): void {
    if (typeof window === 'undefined') return;

    const event: AnalyticsEvent = {
        type: 'time_spent',
        timestamp: Date.now(),
        date: getCurrentDate(),
        sessionId: getSessionId(),
        timeSpentSeconds: seconds,
    };

    sendAnalyticsEvent(event);
}

// Track resume download
export function trackResumeDownload(): void {
    if (typeof window === 'undefined') return;

    const event: AnalyticsEvent = {
        type: 'resume_download',
        timestamp: Date.now(),
        date: getCurrentDate(),
        sessionId: getSessionId(),
    };

    sendAnalyticsEvent(event);
}

// Analytics Tracker class for managing page lifecycle events
export class AnalyticsTracker {
    private startTime: number = 0;
    private maxScrollPercentage: number = 0;
    private hasTrackedFullView: boolean = false;
    private timeUpdateInterval: NodeJS.Timeout | null = null;

    start(): void {
        if (typeof window === 'undefined') return;

        this.startTime = Date.now();
        trackPageView();

        // Track scroll depth
        window.addEventListener('scroll', this.handleScroll);

        // Track time spent periodically
        this.timeUpdateInterval = setInterval(() => {
            const seconds = Math.floor((Date.now() - this.startTime) / 1000);
            // Only send updates every 30 seconds to avoid too many requests
            if (seconds > 0 && seconds % 30 === 0) {
                trackTimeSpent(seconds);
            }
        }, 1000);

        // Track final stats on page unload
        window.addEventListener('beforeunload', this.handleUnload);
        window.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    stop(): void {
        if (typeof window === 'undefined') return;

        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('beforeunload', this.handleUnload);
        window.removeEventListener('visibilitychange', this.handleVisibilityChange);

        if (this.timeUpdateInterval) {
            clearInterval(this.timeUpdateInterval);
            this.timeUpdateInterval = null;
        }
    }

    private handleScroll = (): void => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = Math.round((scrollTop / docHeight) * 100);

        if (scrollPercentage > this.maxScrollPercentage) {
            this.maxScrollPercentage = scrollPercentage;

            // Track when user has viewed entire portfolio (90%+ scroll)
            if (scrollPercentage >= 90 && !this.hasTrackedFullView) {
                this.hasTrackedFullView = true;
                trackScrollDepth(100); // Mark as full view
            }
        }
    };

    private handleUnload = (): void => {
        const seconds = Math.floor((Date.now() - this.startTime) / 1000);
        if (seconds > 0) {
            trackTimeSpent(seconds);
        }
        if (this.maxScrollPercentage > 0) {
            trackScrollDepth(this.maxScrollPercentage);
        }
    };

    private handleVisibilityChange = (): void => {
        if (document.visibilityState === 'hidden') {
            this.handleUnload();
        }
    };
}

// Create singleton instance
export const analyticsTracker = new AnalyticsTracker();
