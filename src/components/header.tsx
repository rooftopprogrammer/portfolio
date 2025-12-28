"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section
            const sections = ["about", "experience", "skills", "contact"];
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition-all"
                >
                    RKN
                </Link>

                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                                    activeSection === item.href.slice(1)
                                        ? "text-blue-400"
                                        : "text-zinc-400 hover:text-zinc-100"
                                )}
                            >
                                {item.name}
                                {activeSection === item.href.slice(1) && (
                                    <span className="absolute inset-0 bg-blue-500/10 rounded-full" />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href="/Ravi_Kumar_Nersu_Specialist_Software_Engineer.pdf"
                    target="_blank"
                    className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-100 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/25"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    Resume
                </Link>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 text-zinc-400 hover:text-zinc-100"
                    aria-label="Menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </nav>
        </header>
    );
}
