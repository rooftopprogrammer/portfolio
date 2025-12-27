"use client";

import { experiences, education } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        Professional Experience
                    </span>
                </h2>
                <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
                    8.5+ years building scalable enterprise systems with modern technologies
                </p>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent transform md:-translate-x-px" />

                    {experiences.map((exp, index) => (
                        <div
                            key={`${exp.company}-${exp.period}-${index}`}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-2 ring-4 ring-zinc-950 z-10" />

                            {/* Content */}
                            <div
                                className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                                    }`}
                            >
                                <div className="group p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <p className="text-blue-400 font-medium">{exp.company}</p>
                                            {exp.client && (
                                                <p className="text-zinc-500 text-sm">Client: {exp.client}</p>
                                            )}
                                        </div>
                                        <span className="text-sm text-zinc-500 whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border-zinc-700"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Case Study Block */}
                                    {exp.caseStudy && (
                                        <div className="mt-6 pt-6 border-t border-zinc-800/50">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-lg">🧩</span>
                                                <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                                                    Architectural Impact
                                                </h4>
                                            </div>
                                            <div className="space-y-3 text-sm">
                                                <div>
                                                    <span className="text-zinc-500 font-medium">Problem: </span>
                                                    <span className="text-zinc-400">{exp.caseStudy.problem}</span>
                                                </div>
                                                <div>
                                                    <span className="text-zinc-500 font-medium">Constraints: </span>
                                                    <span className="text-zinc-400">{exp.caseStudy.constraints}</span>
                                                </div>
                                                <div>
                                                    <span className="text-zinc-500 font-medium">Decision: </span>
                                                    <span className="text-zinc-400">{exp.caseStudy.decision}</span>
                                                </div>
                                                <div>
                                                    <span className="text-zinc-500 font-medium">Trade-offs: </span>
                                                    <span className="text-zinc-400">{exp.caseStudy.tradeoffs}</span>
                                                </div>
                                                <div className="pt-2 border-t border-zinc-800/30">
                                                    <span className="text-green-500 font-medium">Result: </span>
                                                    <span className="text-zinc-300">{exp.caseStudy.result}</span>
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
        <section id="education" className="py-24 px-6 bg-zinc-900/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        Education
                    </span>
                </h2>

                <div className="grid gap-6">
                    {education.map((edu) => (
                        <div
                            key={edu.institution}
                            className="group p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
                                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-blue-400">{edu.field}</p>
                                    <p className="text-zinc-400 text-sm">{edu.institution}</p>
                                    <p className="text-zinc-500 text-sm mt-1">{edu.period}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
