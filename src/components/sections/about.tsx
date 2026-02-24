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
        { value: "8.5+", label: "Years Experience", color: "text-[#FF6B35]" },
        { value: "5+", label: "Companies", color: "text-[#FF8F6B]" },
        { value: "10+", label: "Projects Delivered", color: "text-[#8B5CF6]" },
        { value: "UAE", label: "Target Market", color: "text-[#E879F9]" },
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
                                    alt="Ravi Kumar Nersu - Senior Full-Stack Developer | MERN Stack Expert"
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
                            I build full-stack web products that are fast, maintainable, and built to last — from the API layer to the user interface.
                        </p>

                        <p className={`text-[#6B7280] leading-relaxed scroll-reveal stagger-2 ${isVisible ? 'visible' : ''}`}>
                            Over 8.5 years, I&apos;ve worked across the full MERN stack — React.js, Next.js, Node.js, Express, and NestJS — delivering enterprise platforms for global clients in car rental, logistics, and distribution. I&apos;ve built real-time cargo tracking dashboards, secure authentication flows, multi-vendor platform portals, and microservice-driven architectures serving millions of users.
                        </p>

                        <p className={`text-[#6B7280] leading-relaxed scroll-reveal stagger-3 ${isVisible ? 'visible' : ''}`}>
                            I&apos;ve led feature development end-to-end — from technical design to production — reducing load times by 50%, cutting tech debt, and enabling teams to ship faster without regression risk. I focus on delivering outcomes that matter: faster products, cleaner systems, and measurable business value.
                        </p>

                        <p className={`text-[#FF6B35] font-medium leading-relaxed scroll-reveal stagger-3 ${isVisible ? 'visible' : ''}`}>
                            Currently seeking senior full-stack roles and freelance/consulting engagements in Dubai, UAE. Available to start immediately — open to on-site, hybrid, or remote.
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
