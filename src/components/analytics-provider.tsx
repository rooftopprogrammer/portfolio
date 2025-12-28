"use client";

import { useEffect } from "react";
import { analyticsTracker } from "@/lib/analytics";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        analyticsTracker.start();

        return () => {
            analyticsTracker.stop();
        };
    }, []);

    return <>{children}</>;
}
