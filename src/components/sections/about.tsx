"use client";

import Image from "next/image";
import { useScrollReveal, useAnimatedCounter } from "@/hooks/use-animations";

// Animated stat component for About section
function AnimatedAboutStat({ value, label, color, index }: { value: string; label: string; color: string; index: number }) {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.5 });

    // Extract numeric value if exists
    const numericMatch = value.match(/^(\d+\.?\d*)/);
    const numericValue = numericMatch ? parseFloat(numericMatch[1]) : 0;
    const suffix = numericMatch ? value.replace(numericMatch[1], '') : value;
    const isNumeric = !!numericMatch;

    const animatedValue = useAnimatedCounter(numericValue, isVisible, { duration: 1500, delay: index * 150 });

    const displayValue = isNumeric
        ? (numericValue % 1 !== 0 ? animatedValue.toFixed(1) : animatedValue.toString()) + suffix
        : value;

    return (
        <div
            ref={ref}
            className={`p-4 glass rounded-xl hover:bg-white transition-all duration-300 hover:shadow-premium hover:-translate-y-1 card-3d scroll-reveal stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
        >
            <p className={`text-2xl font-bold ${color}`}>{displayValue}</p>
            <p className="text-sm text-[#6B7280]">{label}</p>
        </div>
    );
}

export function AboutSection() {
    const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });
    const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

    const stats = [
        { value: "8.6", label: "Years Experience", color: "text-[#FF6B35]" },
        { value: "15+", label: "Country Markets", color: "text-[#FF8F6B]" },
        { value: "4", label: "Career Chapters", color: "text-[#8B5CF6]" },
        { value: "Now", label: "Available", color: "text-[#E879F9]" },
    ];

    return (
        <section id="about" ref={sectionRef} className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Decorative blur blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto relative">
                <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}>
                    <span className="text-[#1A1A2E]">About </span>
                    <span className="text-gradient-animated">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Profile Photo */}
                    <div
                        ref={imageRef}
                        className={`relative scroll-reveal-left ${imageVisible ? 'visible' : ''}`}
                    >
                        <div className="aspect-square rounded-3xl border-gradient p-1 shadow-premium-lg">
                            <div className="w-full h-full rounded-3xl bg-white overflow-hidden">
                                <Image
                                    src="/profile-photo.jpg"
                                    alt="Ravi Kumar Nersu - Senior Frontend and Full-Stack Engineer"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF6B35]/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                    </div>

                    {/* Content - Staff-level positioning */}
                    <div className="space-y-6">
                        <p className={`text-lg text-[#1A1A2E] leading-relaxed font-medium scroll-reveal stagger-1 ${isVisible ? 'visible' : ''}`}>
                            Senior Frontend / Full-Stack Engineer with 8.6 years building production-grade web platforms across 15+ country markets.
                        </p>

                        <p className={`text-[#6B7280] leading-relaxed scroll-reveal stagger-2 ${isVisible ? 'visible' : ''}`}>
                            I&apos;ve worked across React.js, Next.js, TypeScript, Node.js, Express, and NestJS, improving Lighthouse from ~45 to ~80, page load from ~6s to ~3s, and LCP from ~4.5s to ~2.2s through rendering decisions, route-level code splitting, image optimization, and payload reduction.
                        </p>

                        <p className={`text-[#6B7280] leading-relaxed scroll-reveal stagger-3 ${isVisible ? 'visible' : ''}`}>
                            My work spans frontend architecture, clean NestJS BFF services, JWT/OAuth2 and RBAC, API contracts, caching, testing, CI/CD delivery, PR reviews, and mentoring.
                        </p>

                        <p className={`text-[#FF6B35] font-medium leading-relaxed scroll-reveal stagger-3 ${isVisible ? 'visible' : ''}`}>
                            Based in Hyderabad, India and available immediately for Senior Frontend, Senior Full-Stack, and Senior Software Engineer opportunities.
                        </p>

                        {/* Quick facts with animated counters */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {stats.map((stat, index) => (
                                <AnimatedAboutStat
                                    key={stat.label}
                                    value={stat.value}
                                    label={stat.label}
                                    color={stat.color}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
