"use client";

import { experiences, education } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    <span className="text-[#1A1A2E]">Professional </span>
                    <span className="text-[#FF6B35]">Experience</span>
                </h2>
                <p className="text-[#6B7280] text-center mb-16 max-w-2xl mx-auto">
                    8.5+ years building scalable enterprise systems with modern technologies
                </p>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6B35] via-[#FF8F6B] to-[#FFE8E0] transform md:-translate-x-px" />

                    {experiences.map((exp, index) => (
                        <div
                            key={`${exp.company}-${exp.period}-${index}`}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#FF6B35] rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-2 ring-4 ring-[#FFF8F5] z-10 shadow-lg shadow-orange-500/30" />

                            {/* Content */}
                            <div
                                className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                                    }`}
                            >
                                <div className="group p-6 bg-white rounded-2xl border border-[#FFE8E0] hover:border-[#FF6B35]/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#1A1A2E] group-hover:text-[#FF6B35] transition-colors">
                                                {exp.role}
                                            </h3>
                                            <p className="text-[#FF6B35] font-medium">{exp.company}</p>
                                            {exp.client && (
                                                <p className="text-[#6B7280] text-sm">Client: {exp.client}</p>
                                            )}
                                        </div>
                                        <span className="text-sm text-[#6B7280] whitespace-nowrap bg-[#FFF8F5] px-3 py-1 rounded-full">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="bg-[#FFF8F5] text-[#4B5563] hover:bg-[#FFE8E0] border-[#FFE8E0] hover:border-[#FF6B35]/30"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Case Study Block */}
                                    {exp.caseStudy && (
                                        <div className="mt-6 pt-6 border-t border-[#FFE8E0]">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-lg">🧩</span>
                                                <h4 className="text-sm font-semibold text-[#8B5CF6] uppercase tracking-wide">
                                                    Architectural Impact
                                                </h4>
                                            </div>
                                            <div className="space-y-3 text-sm">
                                                <div>
                                                    <span className="text-[#4B5563] font-medium">Problem: </span>
                                                    <span className="text-[#6B7280]">{exp.caseStudy.problem}</span>
                                                </div>
                                                <div>
                                                    <span className="text-[#4B5563] font-medium">Constraints: </span>
                                                    <span className="text-[#6B7280]">{exp.caseStudy.constraints}</span>
                                                </div>
                                                <div>
                                                    <span className="text-[#4B5563] font-medium">Decision: </span>
                                                    <span className="text-[#6B7280]">{exp.caseStudy.decision}</span>
                                                </div>
                                                <div>
                                                    <span className="text-[#4B5563] font-medium">Trade-offs: </span>
                                                    <span className="text-[#6B7280]">{exp.caseStudy.tradeoffs}</span>
                                                </div>
                                                <div className="pt-2 border-t border-[#FFE8E0]">
                                                    <span className="text-green-600 font-medium">Result: </span>
                                                    <span className="text-[#1A1A2E]">{exp.caseStudy.result}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Empty space for alternating layout */}
                            <div className="hidden md:block flex-1" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function EducationSection() {
    return (
        <section id="education" className="py-24 px-6 bg-gradient-to-br from-[#FFFBF8] to-[#FFF8F5]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    <span className="text-[#1A1A2E]">My </span>
                    <span className="text-[#FF6B35]">Education</span>
                </h2>

                <div className="grid gap-6">
                    {education.map((edu) => (
                        <div
                            key={edu.institution}
                            className="group p-6 bg-white rounded-2xl border border-[#FFE8E0] hover:border-[#FF6B35]/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8F6B] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-[#1A1A2E] group-hover:text-[#FF6B35] transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-[#FF6B35]">{edu.field}</p>
                                    <p className="text-[#6B7280] text-sm">{edu.institution}</p>
                                    <p className="text-[#6B7280] text-sm mt-1">{edu.period}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
