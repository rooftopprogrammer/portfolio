"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            for (const id of [...sectionIds].reverse()) {
                const element = document.getElementById(id);
                if (element && element.getBoundingClientRect().top <= 150) {
                    setActiveSection(id);
                    return;
                }
            }
            setActiveSection("");
        };

        const frame = window.requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Escape closes the mobile menu and returns focus to its trigger.
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
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300",
                isScrolled ? "bg-white/95 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <nav
                aria-label="Primary"
                className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4"
            >
                <Link
                    href="/"
                    className="text-xl font-bold text-[#1A1A2E] hover:text-[#C2410C] transition-colors"
                >
                    <span aria-hidden="true">RKN</span>
                    <span className="sr-only">Ravi Kumar Nersu — home</span>
                </Link>

                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.slice(1);
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    aria-current={isActive ? "true" : undefined}
                                    className={cn(
                                        "relative block px-4 py-2 text-sm font-medium transition-colors rounded-full",
                                        isActive
                                            ? "text-[#C2410C] bg-[#FFF2EE]"
                                            : "text-[#4B5563] hover:text-[#1A1A2E]"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <a
                    href={resume.href}
                    download={resume.fileName}
                    onClick={() => trackResumeDownload()}
                    className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#C2410C] text-white text-sm font-semibold rounded-full hover:bg-[#9A3412] transition-colors"
                >
                    <DownloadIcon className="w-4 h-4" />
                    {resume.label}
                </a>

                <button
                    ref={menuButtonRef}
                    type="button"
                    className="md:hidden p-2 -mr-2 text-[#4B5563] hover:text-[#1A1A2E] rounded-lg"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
                    onClick={() => setMobileMenuOpen((open) => !open)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </nav>

            <div
                id="mobile-navigation"
                hidden={!mobileMenuOpen}
                className="md:hidden absolute top-full left-0 right-0 bg-white/97 backdrop-blur-lg border-t border-[#FFE8E0] shadow-lg"
            >
                <ul className="flex flex-col p-4 gap-1">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.slice(1);
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={closeMenu}
                                    aria-current={isActive ? "true" : undefined}
                                    className={cn(
                                        "block px-4 py-3 text-sm font-medium transition-colors rounded-xl",
                                        isActive
                                            ? "text-[#C2410C] bg-[#FFF2EE]"
                                            : "text-[#4B5563] hover:text-[#1A1A2E] hover:bg-[#FFF2EE]"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                    <li className="pt-2">
                        <a
                            href={resume.href}
                            download={resume.fileName}
                            onClick={() => {
                                trackResumeDownload();
                                closeMenu();
                            }}
                            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#C2410C] text-white font-semibold rounded-full hover:bg-[#9A3412] transition-colors"
                        >
                            <DownloadIcon className="w-4 h-4" />
                            {resume.label}
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
