"use client";

import React from "react";
import { skills } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-animations";

const categoryIcons: Record<string, React.JSX.Element> = {
    Languages: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
        </svg>
    ),
    Frontend: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    ),
    Backend: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
        </svg>
    ),
    Database: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
        </svg>
    ),
    Testing: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    ),
    Tools: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    ),
    DevOps: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
        </svg>
    ),
    Cloud: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
        </svg>
    ),
};

const levelColors = {
    beginner: "from-[#9CA3AF] to-[#D1D5DB]",
    intermediate: "from-[#FBBF24] to-[#F59E0B]",
    advanced: "from-[#FF8F6B] to-[#FF6B35]",
    expert: "from-[#8B5CF6] to-[#A78BFA]",
};

const levelPercentages = {
    beginner: 25,
    intermediate: 50,
    advanced: 75,
    expert: 100,
};

// Animated progress bar component
function AnimatedProgressBar({ level, isVisible, delay }: { level: keyof typeof levelColors; isVisible: boolean; delay: number }) {
    const percentage = levelPercentages[level];

    return (
        <div className="h-2.5 bg-[#FFE8E0] rounded-full overflow-hidden relative">
            {/* Shimmer background */}
            <div className="absolute inset-0 shimmer opacity-30" />

            {/* Progress bar with glow */}
            <div
                className={cn(
                    "h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out relative",
                    levelColors[level]
                )}
                style={{
                    width: isVisible ? `${percentage}%` : '0%',
                    transitionDelay: `${delay}ms`,
                    boxShadow: isVisible ? `0 0 10px ${level === 'expert' ? 'rgba(139, 92, 246, 0.4)' : 'rgba(255, 107, 53, 0.4)'}` : 'none'
                }}
            >
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
            </div>
        </div>
    );
}

// Skill card component with 3D effects
function SkillCard({ category, categorySkills, index }: { category: string; categorySkills: typeof skills; index: number }) {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

    return (
        <div
            ref={ref}
            className={`group p-6 glass rounded-2xl hover:bg-white transition-all duration-500 hover:shadow-premium-lg hover:-translate-y-2 card-3d card-glare scroll-reveal stagger-${(index % 6) + 1} ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-[#FF6B35] to-[#FF8F6B] rounded-lg text-white shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    {categoryIcons[category] || categoryIcons.Tools}
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A2E] group-hover:text-[#FF6B35] transition-colors">{category}</h3>
            </div>

            <div className="space-y-4">
                {categorySkills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm text-[#4B5563] font-medium">{skill.name}</span>
                            <span className={cn(
                                "text-xs capitalize glass px-2 py-0.5 rounded-full transition-all duration-300",
                                skill.level === 'expert' && "text-[#8B5CF6]",
                                skill.level === 'advanced' && "text-[#FF6B35]",
                                skill.level === 'intermediate' && "text-[#F59E0B]",
                                skill.level === 'beginner' && "text-[#6B7280]"
                            )}>
                                {skill.level}
                            </span>
                        </div>
                        <AnimatedProgressBar
                            level={skill.level}
                            isVisible={isVisible}
                            delay={skillIndex * 100 + 200}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export function SkillsSection() {
    const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.05 });

    // Group skills by category
    const groupedSkills = skills.reduce(
        (acc, skill) => {
            if (!acc[skill.category]) {
                acc[skill.category] = [];
            }
            acc[skill.category].push(skill);
            return acc;
        },
        {} as Record<string, typeof skills>
    );

    const categories = Object.keys(groupedSkills);

    return (
        <section id="skills" ref={sectionRef} className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#FF6B35]/10 to-transparent rounded-full filter blur-3xl pointer-events-none float-parallax" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full filter blur-3xl pointer-events-none float-parallax-reverse" />

            <div className="max-w-6xl mx-auto relative">
                <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 scroll-reveal ${isVisible ? 'visible' : ''}`}>
                    <span className="text-[#1A1A2E]">Technical </span>
                    <span className="text-gradient-animated">Skills</span>
                </h2>
                <p className={`text-[#6B7280] text-center mb-4 max-w-2xl mx-auto italic scroll-reveal stagger-1 ${isVisible ? 'visible' : ''}`}>
                    Tools matter — but judgment matters more.
                </p>
                <p className={`text-[#6B7280] text-center mb-16 max-w-2xl mx-auto scroll-reveal stagger-2 ${isVisible ? 'visible' : ''}`}>
                    These are the tools I&apos;ve used to deliver real systems in production.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-container">
                    {categories.map((category, index) => (
                        <SkillCard
                            key={category}
                            category={category}
                            categorySkills={groupedSkills[category]}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
