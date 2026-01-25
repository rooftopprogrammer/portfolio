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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

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
                mounted && isScrolled
                    ? "bg-white/90 backdrop-blur-lg shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold text-[#1A1A2E] hover:text-[#FF6B35] transition-colors"
                >
                    RKN
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                                    mounted && activeSection === item.href.slice(1)
                                        ? "text-[#FF6B35]"
                                        : "text-[#4B5563] hover:text-[#1A1A2E]"
                                )}
                            >
                                {item.name}
                                {mounted && activeSection === item.href.slice(1) && (
                                    <span className="absolute inset-0 bg-[#FF6B35]/10 rounded-full" />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Contact Us Button */}
                <Link
                    href="#contact"
                    className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8F6B] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:-translate-y-0.5"
                >
                    Contact Me
                </Link>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 text-[#4B5563] hover:text-[#1A1A2E]"
                    aria-label="Menu"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                            d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-[#FFE8E0] shadow-lg">
                    <ul className="flex flex-col p-4 gap-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "block px-4 py-3 text-sm font-medium transition-colors rounded-xl",
                                        activeSection === item.href.slice(1)
                                            ? "text-[#FF6B35] bg-[#FF6B35]/10"
                                            : "text-[#4B5563] hover:text-[#1A1A2E] hover:bg-[#FFF2EE]"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8F6B] text-white font-semibold rounded-full"
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
