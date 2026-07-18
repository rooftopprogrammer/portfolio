"use client";

import { useEffect, useRef, useState } from "react";

const capabilities = [
    "Demand intake forms",
    "Governance dashboards",
    "AI use-case catalogue",
    "Role-based access screens",
    "Approval workflow patterns",
];

const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "Shadcn UI",
    "Typesense",
    "GitHub Actions",
    "Claude Code",
    "Claude for VS Code",
    "GitHub Copilot",
];

export function AIHubProjectSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="project" className="py-20 lg:py-28 bg-white border-y border-[#F3F4F6]">
            <div className="max-w-6xl mx-auto px-6">
                <div className={`max-w-3xl mb-10 scroll-reveal ${isVisible ? "visible" : ""}`}>
                    <p className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-2">Selected Hands-On POC</p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        AI Hub Platform
                    </h2>
                    <p className="text-sm font-medium text-[#FF6B35] mt-2">
                        Demand Intake, Governance and Discovery
                    </p>
                    <p className="text-sm text-[#6B7280] leading-relaxed mt-3">
                        A full-stack React and Node.js enterprise workflow POC for structured AI demand intake, governance, discovery, and approval experiences.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.35fr] gap-5">
                    <div className={`p-5 rounded-xl bg-[#FFFBF8] border border-[#FFE8E0] scroll-reveal stagger-1 ${isVisible ? "visible" : ""}`}>
                        <h3 className="text-sm font-semibold text-[#1A1A2E] mb-3">What it covers</h3>
                        <ul className="space-y-2">
                            {capabilities.map((capability) => (
                                <li key={capability} className="flex gap-2 text-sm text-[#6B7280]">
                                    <span className="text-[#FF6B35]" aria-hidden="true">●</span>
                                    <span>{capability}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`p-5 rounded-xl bg-white border border-[#F3F4F6] scroll-reveal stagger-2 ${isVisible ? "visible" : ""}`}>
                        <h3 className="text-sm font-semibold text-[#1A1A2E] mb-3">Technology & AI-assisted workflow</h3>
                        <div className="flex flex-wrap gap-1.5">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="px-2.5 py-1 text-xs text-[#4B5563] rounded-md bg-[#F9FAFB] border border-[#F3F4F6]"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-[#6B7280] leading-relaxed mt-4">
                            Claude Code, Claude for VS Code, and GitHub Copilot supported code exploration, refactoring, documentation, and test-case ideation, with manual review of generated suggestions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
