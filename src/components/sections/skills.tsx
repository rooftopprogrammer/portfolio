import { skillGroups } from "@/config/site";

export function SkillsSection() {
    return (
        <section id="skills" aria-labelledby="skills-heading" className="py-20 sm:py-28">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="reveal max-w-2xl mb-10 sm:mb-12">
                    <p className="eyebrow eyebrow-dot">Toolbox</p>
                    <h2
                        id="skills-heading"
                        className="mt-3 font-display font-bold tracking-[-0.025em] text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink"
                    >
                        Technical skills
                    </h2>
                </div>

                <dl className="card divide-y divide-line overflow-hidden">
                    {skillGroups.map((group, i) => (
                        <div
                            key={group.title}
                            className={`reveal reveal-d${(i % 4) + 1} grid md:grid-cols-[220px_1fr] gap-3 md:gap-8 p-4 sm:p-6 transition-colors hover:bg-paper/70`}
                        >
                            <dt className="flex items-center gap-3 md:items-start md:pt-1">
                                <span className="font-mono text-xs text-signal-text">0{i + 1}</span>
                                <span className="font-display text-lg font-bold tracking-tight text-ink">
                                    {group.title}
                                </span>
                            </dt>
                            <dd>
                                <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {group.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="chip !text-xs sm:!text-[0.8125rem] transition-colors hover:border-ink hover:text-ink"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
