"use client";

import React from "react";
import { skills } from "@/config/site";
import { cn } from "@/lib/utils";

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

const levelWidths = {
    beginner: "w-1/4",
    intermediate: "w-2/4",
    advanced: "w-3/4",
    expert: "w-full",
};

export function SkillsSection() {
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
        <section id="skills" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    <span className="text-[#1A1A2E]">Technical </span>
                    <span className="text-[#FF6B35]">Skills</span>
                </h2>
                <p className="text-[#6B7280] text-center mb-4 max-w-2xl mx-auto italic">
                    Tools matter — but judgment matters more.
                </p>
                <p className="text-[#6B7280] text-center mb-16 max-w-2xl mx-auto">
                    These are the tools I&apos;ve used to deliver real systems in production.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="group p-6 bg-[#FFFBF8] rounded-2xl border border-[#FFE8E0] hover:border-[#FF6B35]/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-gradient-to-br from-[#FF6B35] to-[#FF8F6B] rounded-lg text-white shadow-lg">
                                    {categoryIcons[category] || categoryIcons.Tools}
                                </div>
                                <h3 className="text-lg font-semibold text-[#1A1A2E]">{category}</h3>
                            </div>

                            <div className="space-y-4">
                                {groupedSkills[category].map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-sm text-[#4B5563]">{skill.name}</span>
                                            <span className="text-xs text-[#6B7280] capitalize bg-[#FFF2EE] px-2 py-0.5 rounded-full">
                                                {skill.level}
                                            </span>
                                        </div>
                                        <div className="h-2 bg-[#FFE8E0] rounded-full overflow-hidden">
                                            <div
                                                className={cn(
                                                    "h-full rounded-full bg-gradient-to-r transition-all duration-500",
                                                    levelColors[skill.level],
                                                    levelWidths[skill.level]
                                                )}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
