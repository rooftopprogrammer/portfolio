"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { navItems, resume } from "@/config/site";
import { DownloadIcon } from "@/components/icons";
import { trackResumeDownload } from "@/lib/analytics";

const sectionIds = navItems.map((item) => item.href.slice(1));

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    // Shadow + reading-progress bar. Written straight to a CSS variable so the
    // bar never re-renders React.
    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
            progressRef.current?.style.setProperty("--progress", progress.toFixed(4));
            setIsScrolled(window.scrollY > 24);
        };
        const onScroll = () => {
            if (!frame) frame = window.requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    // Active nav item: the last section whose top has passed the header.
    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => Boolean(el));

        const pick = () => {
            const atBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            if (atBottom && sections.length) {
                setActiveSection(sections[sections.length - 1].id);
                return;
            }
            let current = "";
            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 140 && rect.bottom > 140) current = section.id;
            }
            setActiveSection(current);
        };

        const observer = new IntersectionObserver(pick, {
            rootMargin: "-140px 0px -40% 0px",
            threshold: [0, 1],
        });
        sections.forEach((section) => observer.observe(section));
        // The observer misses the last, short section at the very bottom.
        window.addEventListener("scroll", pick, { passive: true });
        pick();
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", pick);
        };
    }, []);

    useEffect(() => {
        if (!mobileMenuOpen) return;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key !== "Escape") return;
            setMobileMenuOpen(false);
            menuButtonRef.current?.focus();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [mobileMenuOpen]);

    const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

    return (
        <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5 pt-3">
            <div
                className={cn(
                    "relative max-w-6xl mx-auto rounded-full transition-all duration-500",
                    isScrolled || mobileMenuOpen
                        ? "bg-card/85 backdrop-blur-xl border border-line shadow-[0_10px_30px_-18px_rgba(21,23,28,0.45)]"
                        : "bg-transparent border border-transparent"
                )}
            >
                <nav aria-label="Primary" className="flex items-center justify-between gap-3 pl-3 pr-2 py-2">
                    <a href="#top" className="group flex items-center gap-2.5 rounded-full">
                        <span
                            aria-hidden="true"
                            className="grid place-items-center w-9 h-9 rounded-full bg-ink text-white font-display font-bold text-[13px] tracking-tight transition-transform duration-500 group-hover:rotate-[-8deg]"
                        >
                            RN
                        </span>
                        <span className="hidden sm:block font-display font-semibold text-[15px] text-ink">
                            Ravi Kumar Nersu
                        </span>
                        <span className="sr-only sm:hidden">Ravi Kumar Nersu — back to top</span>
                    </a>

                    <ul className="hidden md:flex items-center gap-0.5">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.slice(1);
                            return (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        aria-current={isActive ? "true" : undefined}
                                        className={cn(
                                            "relative block px-3.5 py-2 text-sm rounded-full transition-colors",
                                            isActive
                                                ? "text-ink font-semibold bg-paper-2"
                                                : "text-ink-2 hover:text-ink"
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex items-center gap-1">
                        <a
                            href={resume.href}
                            download={resume.fileName}
                            onClick={() => trackResumeDownload()}
                            className="btn btn-primary !min-h-10 !px-4 !text-sm"
                        >
                            <DownloadIcon className="w-4 h-4" />
                            <span className="hidden sm:inline">Resume</span>
                            <span className="sr-only sm:hidden">Download resume</span>
                        </a>

                        <button
                            ref={menuButtonRef}
                            type="button"
                            className="md:hidden grid place-items-center w-10 h-10 rounded-full text-ink hover:bg-paper-2"
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-navigation"
                            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
                            onClick={() => setMobileMenuOpen((open) => !open)}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </nav>

                <div
                    id="mobile-navigation"
                    hidden={!mobileMenuOpen}
                    className="md:hidden absolute top-[calc(100%+8px)] inset-x-0 rounded-3xl bg-card border border-line shadow-xl p-2"
                >
                    <ul className="flex flex-col">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={closeMenu}
                                    aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
                                    className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-medium text-ink hover:bg-paper-2"
                                >
                                    {item.name}
                                    <span aria-hidden="true" className="text-ink-3">→</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    ref={progressRef}
                    aria-hidden="true"
                    className={cn(
                        "progress absolute left-6 right-6 -bottom-px h-[2px] rounded-full bg-signal transition-opacity",
                        isScrolled ? "opacity-100" : "opacity-0"
                    )}
                />
            </div>
        </header>
    );
}
