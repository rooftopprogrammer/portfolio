"use client";

import { useEffect, useState, useRef } from "react";

const architectureItems = [
    {
        title: "Rendering Strategy",
        description: "Applied Next.js App Router with SSR, SSG, and route-level rendering decisions for SEO, load performance, and Core Web Vitals.",
    },
    {
        title: "Clean NestJS BFF",
        description: "Structured BFF services with Controller → Service → Repository boundaries and production REST / GraphQL integrations.",
    },
    {
        title: "Secure Platform Access",
        description: "Implemented JWT/OAuth2 authentication, token and session handling, protected routes, and role-based access control.",
    },
    {
        title: "Data Flow & Caching",
        description: "Used Redis for caching and sessions, MongoDB for production workflows, and relational data integrations across API-backed journeys.",
    },
    {
        title: "Measured Performance",
        description: "Improved Lighthouse ~45 → ~80, page load ~6s → ~3s, LCP ~4.5s → ~2.2s, and initial JS ~1.2 MB → ~800 KB.",
    },
    {
        title: "Quality & Delivery",
        description: "Used Jest, React Testing Library, integration testing, Docker, and GitHub Actions for production delivery.",
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
                    <p className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-2">Featured Platform</p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        Platform Architecture at Scale
                    </h2>
                    <p className="text-sm text-[#6B7280] mt-2">
                        Avis Budget Group — Global Digital Platform
                    </p>
                    <p className="text-xs text-[#9CA3AF] mt-1">
                        Customer-facing digital experiences across 15+ country markets
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
                            { label: "React / Next.js", sub: "SSR • SSG • App Router", accent: true },
                            { label: "NestJS BFF", sub: "Controller • Service • Repository", accent: false },
                            { label: "Auth & Data", sub: "JWT/OAuth2 • RBAC • Redis", accent: false },
                            { label: "Delivery", sub: "Docker • GitHub Actions", accent: false },
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
