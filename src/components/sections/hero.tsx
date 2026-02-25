"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, highlights } from "@/config/site";

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-24 pb-12"
        >
            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-5 gap-16 items-center">

                    {/* Content — 3 columns */}
                    <div className="lg:col-span-3 space-y-5">

                        {/* Status badge */}
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-sm text-[#4B5563] shadow-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Open to Senior Roles — Dubai, UAE
                        </div>

                        {/* Name */}
                        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1A1A2E] tracking-tight leading-[1.15]">
                                Ravi Kumar
                                <span className="block text-[#FF6B35]">Nersu</span>
                            </h1>
                        </div>

                        {/* Title + Specialties */}
                        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h2 className="text-lg lg:text-xl font-semibold text-[#1A1A2E]">
                                {siteConfig.title}
                            </h2>
                            <p className="text-sm text-[#9CA3AF] mt-1 tracking-wide">
                                {siteConfig.headline}
                            </p>
                        </div>

                        {/* Description */}
                        <p className={`text-[#4B5563] text-[15px] leading-relaxed max-w-lg transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            {siteConfig.description}
                        </p>

                        {/* Metric pills */}
                        <div className={`flex flex-wrap gap-2 transition-all duration-700 delay-[350ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            {[
                                "8.5+ Years",
                                "15+ Markets",
                                "~50% Faster",
                                "~40% Dev Velocity",
                                "99.9% SLA",
                            ].map((pill) => (
                                <span
                                    key={pill}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-[#FFF2EE] text-[#E65A2E] border border-[#FFDDD1]"
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>

                        {/* CTA + Social */}
                        <div className={`flex items-center gap-5 pt-1 transition-all duration-700 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF6B35] text-white text-sm font-semibold rounded-full hover:bg-[#E65A2E] transition-colors shadow-sm"
                            >
                                Get in Touch
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>

                            <div className="flex items-center gap-3">
                                {siteConfig.links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E5E7EB] text-[#6B7280] hover:text-[#FF6B35] hover:border-[#FFE8E0] transition-all"
                                        aria-label={link.name}
                                    >
                                        {link.name === "GitHub" && (
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        )}
                                        {link.name === "LinkedIn" && (
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        )}
                                        {link.name === "Email" && (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                        {link.name === "Phone" && (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Location */}
                        <p className={`flex items-center gap-2 text-sm text-[#9CA3AF] transition-all duration-700 delay-[450ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Relocating to Dubai, UAE — May 2026 (Job Seeker Visa)
                        </p>
                    </div>

                    {/* Photo — 2 columns */}
                    <div className={`lg:col-span-2 flex justify-center lg:justify-end transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-lg">
                            <Image
                                src="/profile-photo.jpg"
                                alt="Ravi Kumar Nersu — Senior Full-Stack Engineer"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Client logos */}
                <div className={`mt-14 pt-6 border-t border-[#F3F4F6] transition-all duration-700 delay-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-3">Trusted by</p>
                    <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-1">
                        {[
                            "LTIMindtree",
                            "Avis Budget Group",
                            "Tata Martrade",
                            "Allmvr Projects",
                            "Whatsscore",
                        ].map((client) => (
                            <span
                                key={client}
                                className="text-xs sm:text-sm font-bold text-[#9CA3AF] hover:text-[#6B7280] transition-colors cursor-default tracking-wider uppercase"
                            >
                                {client}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Enterprise Impact Stats
export function StatsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-white border-y border-[#F3F4F6]"
        >
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-6">Enterprise Impact</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-6 gap-x-4">
                    {highlights.map((item, i) => (
                        <div
                            key={item.label}
                            className={`scroll-reveal stagger-${Math.min(i + 1, 6)} ${isVisible ? 'visible' : ''}`}
                        >
                            <p className="text-xl sm:text-2xl font-bold text-[#FF6B35] leading-none">
                                {item.metric}
                            </p>
                            <p className="text-[11px] text-[#6B7280] mt-1 leading-tight">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
