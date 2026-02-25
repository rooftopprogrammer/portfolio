"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const principles = [
    {
        title: "Performance-First",
        description: "Every decision starts with measurable impact — Core Web Vitals, load times, UX metrics.",
    },
    {
        title: "System Design Thinking",
        description: "Designing for scale, failure isolation, and observability before writing code.",
    },
    {
        title: "Deployment Independence",
        description: "Microservices and modular frontends deployed, tested, and scaled independently.",
    },
    {
        title: "Reduced Coupling via BFF",
        description: "BFF services decouple frontend delivery from backend complexity.",
    },
    {
        title: "Business-Aligned Engineering",
        description: "Every technical decision maps to faster time-to-market or lower cost.",
    },
];

export function EngineeringMindsetSection() {
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
        <section ref={sectionRef} className="py-16 lg:py-24 bg-white border-y border-[#F3F4F6]">
            <div className="max-w-6xl mx-auto px-6">
                <div className={`max-w-3xl mb-10 scroll-reveal ${isVisible ? 'visible' : ''}`}>
                    <p className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-2">Approach</p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        Engineering Philosophy
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {principles.map((item, i) => (
                        <div
                            key={item.title}
                            className={`p-5 rounded-xl border border-[#F3F4F6] hover:border-[#FFE8E0] transition-colors flex flex-col scroll-reveal stagger-${Math.min(i + 1, 5)} ${isVisible ? 'visible' : ''}`}
                        >
                            <h3 className="text-sm font-semibold text-[#1A1A2E] mb-1">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[#6B7280] leading-relaxed flex-1">
                                {item.description}
                            </p>
                        </div>
                    ))}

                    {/* Download CV card */}
                    <div className={`p-5 rounded-xl border border-[#F3F4F6] flex flex-col items-center justify-center scroll-reveal stagger-6 ${isVisible ? 'visible' : ''}`}>
                        <Link
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6B35] text-white font-semibold rounded-full hover:bg-[#E65A2E] transition-colors text-sm"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download CV
                        </Link>
                        <p className="text-[11px] text-[#9CA3AF] mt-2">PDF • Updated Feb 2026</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
