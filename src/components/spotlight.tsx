"use client";

import { useEffect } from "react";

/**
 * One delegated pointer listener that tells each `.spotlight` card where the
 * pointer is, for the glow in globals.css. Mouse only; touch devices skip it.
 */
export function Spotlight() {
    useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

        const onMove = (event: PointerEvent) => {
            const card = (event.target as Element | null)?.closest?.<HTMLElement>(".spotlight");
            if (!card) return;
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
            card.style.setProperty("--my", `${event.clientY - rect.top}px`);
        };

        document.addEventListener("pointermove", onMove, { passive: true });
        return () => document.removeEventListener("pointermove", onMove);
    }, []);

    return null;
}
