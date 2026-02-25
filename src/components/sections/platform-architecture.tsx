"use client";

import { useEffect, useState, useRef } from "react";

const architectureItems = [
    {
        title: "Microservices Architecture",
        description: "Decomposed monolith into independently deployable services across 15+ regional markets.",
    },
    {
        title: "Backend-for-Frontend (BFF)",
        description: "NestJS services aggregating 8+ APIs into optimized frontend-specific endpoints.",
    },
    {
        title: "Caching & CDN Strategy",
        description: "Redis + AWS CloudFront delivering ~50% page load reduction across global markets.",
    },
    {
        title: "Zero-Downtime Deployments",
        description: "Bi-weekly → multiple daily releases via CI/CD pipelines and blue-green patterns.",
    },
    {
        title: "Quality Engineering",
        description: "85%+ code coverage with Jest, Playwright, and React Testing Library.",
    },
    {
        title: "SSR/ISR Optimization",
        description: "Next.js App Router with server-side rendering and incremental static regeneration.",
    },
];

export function PlatformArchitectureSection() {
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
        <section
            ref={sectionRef}
            id="architecture"
            className="py-20 lg:py-28"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className={`max-w-3xl mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
                    <p className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-2">Featured Project</p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        Platform Architecture at Scale
                    </h2>
                    <p className="text-sm text-[#6B7280] mt-2">
                        Avis Budget Group — Global Digital Platform
                    </p>
                    <p className="text-xs text-[#9CA3AF] mt-1">
                        15+ Countries • Millions of Monthly Users • 99.9% SLA
                    </p>
                </div>

                {/* Architecture cards — equal height grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {architectureItems.map((item, i) => (
                        <div
                            key={item.title}
                            className={`p-5 rounded-xl bg-white border border-[#F3F4F6] hover:border-[#FFE8E0] transition-all duration-300 flex flex-col scroll-reveal stagger-${Math.min(i + 1, 6)} ${isVisible ? 'visible' : ''}`}
                        >
                            <h3 className="text-sm font-semibold text-[#1A1A2E] mb-1.5">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[#6B7280] leading-relaxed flex-1">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Architecture flow diagram */}
                <div className={`mt-8 p-6 rounded-xl bg-[#FAFAFA] border border-[#F3F4F6] scroll-reveal stagger-6 ${isVisible ? 'visible' : ''}`}>
                    <p className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-5 text-center">System Overview</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
                        {[
                            { label: "React / Next.js", sub: "SSR • ISR • App Router", accent: true },
                            { label: "NestJS BFF", sub: "API Aggregation • 8+ Services", accent: false },
                            { label: "Redis + CloudFront", sub: "Caching • CDN • ~50% Faster", accent: false },
                            { label: "Microservices", sub: "Docker • K8s • AWS", accent: false },
                        ].map((node, i) => (
                            <div key={node.label} className="flex items-center gap-2 sm:gap-2">
                                <div className="flex flex-col items-center gap-1">
                                    <div className={`px-4 py-2 rounded-lg border text-sm font-medium ${node.accent
                                        ? 'bg-white border-[#FFE8E0] text-[#FF6B35]'
                                        : 'bg-white border-[#E5E7EB] text-[#374151]'
                                        }`}>
                                        {node.label}
                                    </div>
                                    <span className="text-[10px] text-[#9CA3AF] text-center">{node.sub}</span>
                                </div>
                                {i < 3 && (
                                    <>
                                        <svg className="w-5 h-3 text-[#D1D5DB] hidden sm:block flex-shrink-0" viewBox="0 0 20 12"><path d="M0 6h16M13 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
                                        <svg className="w-3 h-5 text-[#D1D5DB] sm:hidden flex-shrink-0" viewBox="0 0 12 20"><path d="M6 0v16M3 13l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
