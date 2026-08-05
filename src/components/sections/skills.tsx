import { developmentWorkflow, skillGroups } from "@/config/site";

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <p className="text-[11px] text-[#6B7280] uppercase tracking-widest mb-2 font-semibold">
                        Capabilities
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        Technical Skills
                    </h2>
                </div>

                <ul className="grid sm:grid-cols-2 gap-4">
                    {skillGroups.map((group, i) => (
                        <li
                            key={group.title}
                            className={`p-5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#FFB399] transition-colors flex flex-col reveal reveal-delay-${Math.min(i + 1, 6)}`}
                        >
                            <h3 className="text-sm font-semibold text-[#1A1A2E] mb-3">
                                {group.title}
                            </h3>
                            <ul className="flex flex-wrap gap-1.5 flex-1">
                                {group.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="px-2.5 py-1 text-xs text-[#4B5563] rounded-md bg-[#F9FAFB] border border-[#E5E7EB]"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="mt-4 p-5 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] reveal">
                    <h3 className="text-sm font-semibold text-[#1A1A2E] mb-2">
                        {developmentWorkflow.title}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
                        {developmentWorkflow.note}
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                        {developmentWorkflow.skills.map((skill) => (
                            <li
                                key={skill}
                                className="px-2.5 py-1 text-xs text-[#4B5563] rounded-md bg-white border border-[#E5E7EB]"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
