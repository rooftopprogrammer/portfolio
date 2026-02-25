"use client";

import { useEffect, useState, useRef } from "react";
import { experiences } from "@/config/site";

export function ExperienceSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="experience" className="py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className={`mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
                    <p className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-2">Career</p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        Professional Experience
                    </h2>
                </div>

                <div className="space-y-0">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.company}
                            className={`relative scroll-reveal stagger-${Math.min(index + 1, 4)} ${isVisible ? 'visible' : ''}`}
                        >
                            <div className={`py-8 ${index < experiences.length - 1 ? 'border-b border-[#E5E7EB]' : ''}`}>
                                {/* Header row */}
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                    <h3 className={`font-semibold ${index === 0 ? 'text-lg text-[#1A1A2E]' : 'text-base text-[#374151]'}`}>
                                        {exp.role}
                                    </h3>
                                    <span className="text-xs text-[#9CA3AF] whitespace-nowrap font-medium">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className={`text-sm font-medium ${index === 0 ? 'text-[#FF6B35]' : 'text-[#6B7280]'}`}>
                                    {exp.company}
                                </p>

                                {exp.client && (
                                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                                        {exp.client}
                                    </p>
                                )}

                                {/* Bullet points */}
                                <ul className="mt-3 space-y-1.5">
                                    {exp.highlights.map((bullet, bi) => (
                                        <li
                                            key={bi}
                                            className={`flex gap-2 text-sm ${index === 0 ? 'text-[#4B5563]' : 'text-[#6B7280]'} leading-relaxed`}
                                        >
                                            <span className="text-[#D1D5DB] mt-1 flex-shrink-0 text-[10px]">●</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-2 py-0.5 text-[11px] rounded border ${index === 0
                                                ? 'bg-[#FFF8F5] text-[#E65A2E] border-[#FFE8E0]'
                                                : 'bg-[#F3F4F6] text-[#4B5563] border-[#E5E7EB]'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Case study — Avis only */}
                                {exp.caseStudy && (
                                    <div className="mt-5 p-4 rounded-lg bg-[#FAFAFA] border border-[#F3F4F6]">
                                        <p className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-2">Architectural Impact</p>
                                        <div className="space-y-1.5 text-sm">
                                            <p><span className="font-medium text-[#1A1A2E]">Problem:</span> <span className="text-[#6B7280]">{exp.caseStudy.problem}</span></p>
                                            <p><span className="font-medium text-[#1A1A2E]">Decision:</span> <span className="text-[#6B7280]">{exp.caseStudy.decision}</span></p>
                                            <p><span className="font-medium text-[#1A1A2E]">Result:</span> <span className="text-[#6B7280]">{exp.caseStudy.result}</span></p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Education — responsive single line
export function EducationSection() {
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
        <section ref={sectionRef} className="py-12 bg-white border-y border-[#F3F4F6]">
            <div className="max-w-4xl mx-auto px-6">
                <p className={`text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-3 scroll-reveal ${isVisible ? 'visible' : ''}`}>Education</p>
                <div className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 scroll-reveal stagger-1 ${isVisible ? 'visible' : ''}`}>
                    <div className="min-w-0">
                        <p className="text-sm font-medium text-[#1A1A2E]">Bachelor of Technology (B.Tech)</p>
                        <p className="text-sm text-[#6B7280] truncate sm:truncate-none">Computer Science & Engineering — KL University</p>
                    </div>
                    <span className="text-xs text-[#9CA3AF] whitespace-nowrap flex-shrink-0">Jun 2013 - May 2017</span>
                </div>
            </div>
        </section>
    );
}
