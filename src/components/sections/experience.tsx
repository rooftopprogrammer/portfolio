import { education, experiences } from "@/config/site";

export function ExperienceSection() {
    return (
        <section id="experience" className="py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12">
                    <p className="text-[11px] text-[#6B7280] uppercase tracking-widest mb-2 font-semibold">
                        Career
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        Professional Experience
                    </h2>
                </div>

                <ol className="space-y-0">
                    {experiences.map((exp, index) => (
                        <li
                            key={exp.company}
                            className={`reveal reveal-delay-${Math.min(index + 1, 4)} py-8 ${
                                index < experiences.length - 1 ? "border-b border-[#E5E7EB]" : ""
                            }`}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                <h3
                                    className={`font-semibold ${
                                        index === 0
                                            ? "text-lg text-[#1A1A2E]"
                                            : "text-base text-[#374151]"
                                    }`}
                                >
                                    {exp.role}
                                </h3>
                                <span className="text-xs text-[#6B7280] whitespace-nowrap font-medium">
                                    {exp.period}
                                </span>
                            </div>

                            <p
                                className={`text-sm font-medium ${
                                    index === 0 ? "text-[#C2410C]" : "text-[#4B5563]"
                                }`}
                            >
                                {exp.company}
                            </p>

                            {(exp.client || exp.location) && (
                                <p className="text-xs text-[#6B7280] mt-0.5">
                                    {[exp.client, exp.location].filter(Boolean).join(" · ")}
                                </p>
                            )}

                            <ul className="mt-3 space-y-1.5">
                                {exp.highlights.map((bullet) => (
                                    <li
                                        key={bullet}
                                        className="flex gap-2 text-sm text-[#4B5563] leading-relaxed"
                                    >
                                        <span
                                            className="text-[#C2410C] mt-1 flex-shrink-0 text-[10px]"
                                            aria-hidden="true"
                                        >
                                            ●
                                        </span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <ul className="flex flex-wrap gap-1.5 mt-3">
                                {exp.technologies.map((tech) => (
                                    <li
                                        key={tech}
                                        className={`px-2 py-0.5 text-[11px] rounded border ${
                                            index === 0
                                                ? "bg-[#FFF8F5] text-[#C2410C] border-[#FFDDD1]"
                                                : "bg-[#F9FAFB] text-[#4B5563] border-[#E5E7EB]"
                                        }`}
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export function EducationSection() {
    return (
        <section
            aria-labelledby="education-heading"
            className="py-12 bg-white border-y border-[#E5E7EB]"
        >
            <div className="max-w-4xl mx-auto px-6">
                <h2
                    id="education-heading"
                    className="text-[11px] text-[#6B7280] uppercase tracking-widest mb-3 font-semibold"
                >
                    Education
                </h2>
                <ul>
                    {education.map((item) => (
                        <li
                            key={item.institution}
                            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 reveal"
                        >
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-[#1A1A2E]">
                                    {item.degree} — {item.field}
                                </p>
                                <p className="text-sm text-[#4B5563]">{item.institution}</p>
                            </div>
                            <span className="text-xs text-[#6B7280] whitespace-nowrap flex-shrink-0">
                                {item.period}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
