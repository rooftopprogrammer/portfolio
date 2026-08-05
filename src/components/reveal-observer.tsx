"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement for `.reveal` elements.
 *
 * Every `.reveal` element is already opaque and readable from first paint —
 * see globals.css. This observer only removes a small transform offset as
 * elements scroll into view. If this component never runs (JS disabled, script
 * error, print), the page stays fully legible.
 */
export function RevealObserver() {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
        if (elements.length === 0) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
            elements.forEach((element) => element.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
        );

        elements.forEach((element) => {
            // Anything already on screen reveals immediately, without waiting
            // for a scroll event.
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add("is-visible");
                return;
            }
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
