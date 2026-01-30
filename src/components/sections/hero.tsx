"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig, highlights } from "@/config/site";
import { trackLinkedInClick } from "@/lib/analytics";
import { useScrollReveal, useAnimatedCounter } from "@/hooks/use-animations";

const socialIcons: Record<string, React.JSX.Element> = {
    linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    mail: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    ),
    phone: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
        </svg>
    ),
};

// Client/Company logos the person has worked with
const clientLogos = [
    { name: "LTIMindtree", abbr: "LTI" },
    { name: "Avis Budget Group", abbr: "ABG" },
    { name: "Tata Group", abbr: "TATA" },
    { name: "Ingram Micro", abbr: "IM" },
];

// Magnetic Button Component
function MagneticButton({ children, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }) {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        const button = buttonRef.current;
        if (!button) return;
        button.style.transform = 'translate(0, 0)';
    }, []);

    return (
        <a
            ref={buttonRef}
            className={`magnetic-btn ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </a>
    );
}

export function HeroSection() {
    // Filter out GitHub, only show LinkedIn
    const visibleLinks = siteConfig.links.filter(link => link.icon !== 'github');
    const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleLinkClick = (linkIcon: string) => {
        if (linkIcon === 'linkedin') {
            trackLinkedInClick();
        }
    };

    return (
        <section
            ref={sectionRef}
            className={`min-h-screen flex items-center px-6 pt-24 pb-12 relative overflow-hidden ${mounted ? 'page-enter' : 'opacity-0'}`}
        >
            {/* Decorative elements with parallax */}
            <div className="absolute top-32 left-[45%] w-3 h-3 rounded-full bg-[#FF6B35] opacity-60 float-parallax" />
            <div className="absolute top-48 right-[15%] w-4 h-4 rounded-full border-2 border-[#8B5CF6] opacity-40 float-parallax-reverse" />
            <div className="absolute bottom-40 left-[10%] w-5 h-5 text-[#06B6D4] float-parallax">✦</div>

            {/* Blur background effect */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/20 to-purple-500/10 rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/15 to-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />

            {/* Purple gradient on right side */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-500/10 via-purple-500/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        {/* Status badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-[#FF6B35] glass-orange rounded-full scroll-reveal ${isVisible ? 'visible' : ''}`}>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available for new opportunities
                        </div>

                        {/* Name and Title */}
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 scroll-reveal stagger-1 ${isVisible ? 'visible' : ''}`}>
                            <span className="text-[#1A1A2E]">Hi! I Am</span>
                            <br />
                            <span className="text-gradient-animated">{siteConfig.name.split(' ')[0]} {siteConfig.name.split(' ')[1]}</span>
                        </h1>

                        <h2 className={`text-xl md:text-2xl font-semibold text-[#4B5563] mb-6 scroll-reveal stagger-2 ${isVisible ? 'visible' : ''}`}>
                            {siteConfig.title}
                        </h2>

                        {/* Headline & Description */}
                        {siteConfig.headline && (
                            <p className={`text-lg md:text-xl text-[#1A1A2E] max-w-xl mb-4 leading-relaxed font-medium scroll-reveal stagger-3 ${isVisible ? 'visible' : ''}`}>
                                {siteConfig.headline}
                            </p>
                        )}

                        <p className={`text-base text-[#6B7280] max-w-xl mb-6 leading-relaxed scroll-reveal stagger-3 ${isVisible ? 'visible' : ''}`}>
                            {siteConfig.description}
                        </p>

                        {/* Location */}
                        <p className={`flex items-center gap-2 text-[#6B7280] mb-8 scroll-reveal stagger-4 ${isVisible ? 'visible' : ''}`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            Hyderabad, India
                        </p>

                        {/* CTA Button & Social Links */}
                        <div className={`flex flex-wrap items-center gap-4 mb-12 scroll-reveal stagger-5 ${isVisible ? 'visible' : ''}`}>
                            <MagneticButton
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8F6B] text-white font-semibold rounded-full shadow-premium hover:shadow-premium-lg transition-all animate-glow"
                            >
                                Hire Me
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </MagneticButton>

                            <div className="flex items-center gap-3">
                                {visibleLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => handleLinkClick(link.icon)}
                                        className="p-3 text-[#6B7280] hover:text-[#FF6B35] glass hover:bg-[#FFF2EE] rounded-full transition-all hover:scale-110 hover:shadow-premium"
                                        aria-label={link.name}
                                    >
                                        {socialIcons[link.icon]}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Clients/Brands Section */}
                        <div className={`scroll-reveal stagger-6 ${isVisible ? 'visible' : ''}`}>
                            <p className="text-sm font-semibold text-[#1A1A2E] mb-4">
                                Worked With These Brands & Clients
                            </p>
                            <div className="flex flex-wrap items-center gap-6">
                                {clientLogos.map((client, index) => (
                                    <div
                                        key={client.name}
                                        className="flex items-center justify-center w-12 h-12 rounded-lg glass hover:bg-[#FFF2EE] hover:scale-110 transition-all cursor-default card-3d"
                                        title={client.name}
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                    >
                                        <span className="text-xs font-bold text-[#6B7280]">{client.abbr}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Photo & Floating Cards */}
                    <div className="order-1 lg:order-2 relative perspective-container">
                        {/* Main Photo Container */}
                        <div className={`relative mx-auto w-[280px] md:w-[350px] lg:w-[400px] scroll-reveal-scale ${isVisible ? 'visible' : ''}`}>
                            {/* Background gradient blob */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FFE8E0] via-[#FFF2EE] to-purple-100 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] transform scale-110 animate-pulse" style={{ animationDuration: '4s' }} />

                            {/* Profile Image */}
                            <div className="relative z-10">
                                <Image
                                    src="/profile-photo.jpg"
                                    alt={`${siteConfig.name} - ${siteConfig.title}`}
                                    width={400}
                                    height={500}
                                    className="w-full h-auto object-cover rounded-2xl shadow-premium-lg"
                                    priority
                                />
                            </div>

                            {/* Floating Badge - Top Right: Years Experience */}
                            <div className="absolute -top-2 -right-4 md:right-0 lg:-right-8 glass-strong rounded-xl shadow-premium p-3 float-parallax z-20 card-3d">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center shadow-glow">
                                        <span className="text-white text-sm">🏆</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#1A1A2E]">8.5+ Years</p>
                                        <p className="text-[10px] text-[#6B7280]">Experience</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge - Bottom Left: Frontend Expert */}
                            <div className="absolute -bottom-4 -left-4 md:left-0 lg:-left-12 glass-strong rounded-xl shadow-premium p-3 float-parallax-reverse z-20 card-3d">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#FF8F6B] rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xs">⚛️</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#1A1A2E]">Frontend</p>
                                        <p className="text-[10px] text-[#6B7280]">Architecture Expert</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge - Right Side: Performance */}
                            <div className="absolute top-1/2 -right-4 md:right-0 lg:-right-16 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-xl shadow-glow-purple p-3 float-parallax z-20 card-3d">
                                <div className="flex items-center gap-2">
                                    <span className="text-white text-lg">🚀</span>
                                    <div>
                                        <p className="text-xs font-bold text-white">50%</p>
                                        <p className="text-[10px] text-purple-100">Faster Load</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative emoji */}
                            <div className="absolute -top-8 left-1/4 text-3xl float-parallax-reverse">
                                🎯
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Animated Counter Component
function AnimatedStat({ metric, label, description, index }: { metric: string; label: string; description: string; index: number }) {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

    // Extract number from metric (e.g., "8.5+" -> 8.5, "50%" -> 50)
    const numericValue = parseFloat(metric.replace(/[^0-9.]/g, '')) || 0;
    const suffix = metric.replace(/[0-9.]/g, '');
    const animatedValue = useAnimatedCounter(numericValue, isVisible, { duration: 2000, delay: index * 100 });

    // Format the number properly
    const displayValue = numericValue % 1 !== 0 ? animatedValue.toFixed(1) : animatedValue.toString();

    return (
        <div
            ref={ref}
            className={`group relative p-6 glass rounded-2xl hover:bg-white transition-all duration-500 hover:shadow-premium-lg hover:-translate-y-2 card-3d card-glare scroll-reveal stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
            <div className="relative">
                <div className="text-3xl md:text-4xl font-bold text-gradient-orange mb-2">
                    {displayValue}{suffix}
                </div>
                <div className="text-sm font-semibold text-[#1A1A2E] mb-1">
                    {label}
                </div>
                <div className="text-xs text-[#6B7280]">{description}</div>
            </div>
        </div>
    );
}

export function StatsSection() {
    const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

    return (
        <section ref={sectionRef} className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {highlights.map((stat, index) => (
                        <AnimatedStat
                            key={stat.label}
                            metric={stat.metric}
                            label={stat.label}
                            description={stat.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
