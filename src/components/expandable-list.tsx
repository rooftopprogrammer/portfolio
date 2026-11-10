"use client";

import { useId, useState } from "react";
import { PlusIcon } from "@/components/icons";

/**
 * Shows the first `visible` bullets and folds the rest behind a toggle, so the
 * experience section stays scannable. Hidden bullets stay in the DOM (and in
 * print) — the panel only collapses visually.
 */
export function ExpandableList({
    items,
    visible = 2,
    tone = "paper",
}: {
    items: string[];
    visible?: number;
    tone?: "paper" | "night";
}) {
    const [open, setOpen] = useState(false);
    const panelId = useId();
    const shown = items.slice(0, visible);
    const rest = items.slice(visible);

    const bullet = (text: string) => (
        <li
            key={text}
            className={`flex gap-3 text-[15px] leading-relaxed ${tone === "night" ? "text-night-ink-2" : "text-ink-2"}`}
        >
            <span
                aria-hidden="true"
                className="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-signal"
            />
            <span>{text}</span>
        </li>
    );

    return (
        <div>
            <ul className="space-y-2.5">{shown.map(bullet)}</ul>
            {rest.length > 0 && (
                <>
                    <div id={panelId} className="more-panel" data-open={open} inert={!open}>
                        <div>
                            <ul className="space-y-2.5 pt-2.5">{rest.map(bullet)}</ul>
                        </div>
                    </div>
                    <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpen((value) => !value)}
                        className={`no-print mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                            tone === "night"
                                ? "text-night-ink-2 hover:text-night-ink hover:bg-white/5"
                                : "text-ink hover:bg-paper-2"
                        }`}
                    >
                        <PlusIcon
                            className={`w-4 h-4 ${tone === "night" ? "text-signal" : "text-signal-text"} transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                        />
                        {open ? "Show less" : `${rest.length} more ${rest.length === 1 ? "detail" : "details"}`}
                    </button>
                </>
            )}
        </div>
    );
}
