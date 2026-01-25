"use client";

import { useScrollReveal } from "@/hooks/use-animations";
import { useRef, useCallback } from "react";

const engineeringPrinciples = [
    {
        title: "Performance",
        description: "I treat performance as a system property, not a last-minute optimization. I focus on rendering strategy, data boundaries, and cache behavior early — before performance becomes expensive to fix.",
        icon: "🚀",
        gradient: "from-[#FF6B35] to-[#FF8F6B]",
    },
    {
        title: "Architecture",
        description: "I design frontend systems to scale independently of backend complexity, using clear API contracts, predictable state models, and modular service boundaries.",
        icon: "🏗️",
        gradient: "from-[#FF8F6B] to-[#FFB399]",
    },
    {
        title: "Trade-offs",
        description: "Every technical decision has a cost. I explicitly choose what to optimize for — and what not to — based on user impact, team velocity, and system lifespan.",
        icon: "⚖️",
        gradient: "from-[#8B5CF6] to-[#A78BFA]",
    },
    {
        title: "Quality",
        description: "I use automated testing and tooling not as process overhead, but as leverage to move faster with confidence.",
        icon: "✨",
        gradient: "from-[#E879F9] to-[#F0ABFC]",
    },
];

// 3D Card Component with mouse tracking
function Card3D({ children, className, index }: { children: React.ReactNode; className?: string; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateY(-4px)`;

        // Glare effect
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        card.style.setProperty('--glare-x', `${glareX}%`);
        card.style.setProperty('--glare-y', `${glareY}%`);
    }, []);

    const handleMouseLeave = useCallback(() => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1) translateY(0)';
    }, []);

    return (
        <div
            ref={ref}
            className={`scroll-reveal stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div
                ref={cardRef}
                className={`${className} card-glare`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out' }}
            >
                {children}
            </div>
        </div>
    );
}

// Magnetic button component
function MagneticButton({ children, className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }) {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        const button = buttonRef.current;
        if (!button) return;
        button.style.transform = 'translate(0, 0) scale(1)';
    }, []);

    return (
        <a
            ref={buttonRef}
            className={`magnetic-btn ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.2s ease-out' }}
            {...props}
        >
            {children}
        </a>
    );
}

export function EngineeringMindsetSection() {
    const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });
    const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

    return (
        <section id="engineering" ref={sectionRef} className="py-24 px-6 bg-gradient-to-br from-[#FFFBF8] to-[#FFF8F5] relative overflow-hidden">
            {/* Decorative blur blobs */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#FF6B35]/15 to-transparent rounded-full filter blur-3xl pointer-events-none float-parallax" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full filter blur-3xl pointer-events-none float-parallax-reverse" />

            <div className="max-w-6xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side - Stacked Service Cards with 3D effect */}
                    <div className="space-y-4 perspective-container">
                        {engineeringPrinciples.map((principle, index) => (
                            <Card3D
                                key={principle.title}
                                className="group relative bg-white rounded-2xl p-5 shadow-premium border border-[#FFE8E0] hover:shadow-premium-lg overflow-hidden cursor-pointer"
                                index={index}
                            >
                                {/* Gradient left border */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${principle.gradient}`} />

                                <div className="flex items-start gap-4 pl-3 relative z-10">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-xl">{principle.icon}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 group-hover:text-[#FF6B35] transition-colors">
                                            {principle.title}
                                        </h3>
                                        <p className="text-sm text-[#6B7280] leading-relaxed">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Shimmer effect on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 shimmer" />
                                </div>
                            </Card3D>
                        ))}
                    </div>

                    {/* Right Side - Heading & Description */}
                    <div
                        ref={headingRef}
                        className={`lg:sticky lg:top-32 scroll-reveal-right ${headingVisible ? 'visible' : ''}`}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-[#1A1A2E]">How I Think</span>
                            <br />
                            <span className="text-gradient-animated">As an Engineer</span>
                        </h2>

                        <p className="text-[#6B7280] mb-6 leading-relaxed">
                            My engineering approach is grounded in first principles thinking and a deep understanding of system behavior at scale. I believe in making the right architectural decisions early to avoid costly refactors later.
                        </p>

                        <p className="text-[#6B7280] mb-8 leading-relaxed">
                            These four principles guide every technical decision I make — from choosing rendering strategies in Next.js to designing API boundaries between microservices. They represent lessons learned from building and scaling enterprise systems used by millions.
                        </p>

                        {/* Download CV Button with magnetic effect - commented out
                        <MagneticButton
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8F6B] text-white font-semibold rounded-full shadow-premium hover:shadow-premium-lg animate-glow"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download CV
                        </MagneticButton>
                        */}
                    </div>
                </div>
            </div>
        </section>
    );
}
