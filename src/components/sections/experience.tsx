import type { Engagement, Experience } from "@/types";
import { education, experiences } from "@/config/site";
import { ExpandableList } from "@/components/expandable-list";

function Chips({ items }: { items: string[] }) {
    return (
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
            {items.map((item) => (
                <li key={item} className="chip !text-xs !py-0.5">
                    {item}
                </li>
            ))}
        </ul>
    );
}

function EngagementBlock({ engagement }: { engagement: Engagement }) {
    return (
        <div className="rounded-2xl border border-line bg-paper/60 p-4 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="font-display text-lg font-bold tracking-tight text-ink">
                    <span className="text-ink-3 font-medium">Client · </span>
                    {engagement.client}
                </h4>
                <p className="font-mono text-xs text-ink-3">{engagement.period}</p>
            </div>
            <p className="mt-0.5 text-sm font-medium text-signal-text">{engagement.role}</p>
            <p className="mt-3 text-[15px] text-ink font-medium leading-relaxed">{engagement.summary}</p>
            <div className="mt-3">
                <ExpandableList items={engagement.highlights} visible={1} />
            </div>
            <Chips items={engagement.technologies} />
        </div>
    );
}

function Role({ job, index, last }: { job: Experience; index: number; last: boolean }) {
    const isCurrentEra = index === 0;
    return (
        <li className="reveal relative grid md:grid-cols-[190px_1fr] gap-3 md:gap-8">
            {/* Timeline rail */}
            <div aria-hidden="true" className="hidden md:block absolute left-[190px] top-0 bottom-0 translate-x-4">
                <span
                    className={`absolute -left-[6px] top-2 w-3 h-3 rounded-full border-2 ${
                        isCurrentEra ? "bg-signal border-signal" : "bg-paper border-line-strong"
                    }`}
                />
                {!last && <span className="absolute left-0 top-6 -bottom-8 w-px bg-line" />}
            </div>

            <div className="md:text-right md:pt-1">
                <p className="font-mono text-sm text-ink">{job.period}</p>
                <p className="text-sm text-ink-3">{job.location}</p>
            </div>

            <div className="md:pl-8 pb-2">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink">{job.company}</h3>
                <p className="text-ink-2">
                    {job.role}
                    {job.client && (
                        <>
                            <span className="text-ink-3"> · Client: </span>
                            {job.client}
                        </>
                    )}
                </p>

                {job.engagements ? (
                    <div className="mt-5 space-y-4">
                        {job.engagements.map((engagement) => (
                            <EngagementBlock key={engagement.client} engagement={engagement} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-3">
                        {job.summary && (
                            <p className="text-[15px] text-ink font-medium leading-relaxed mb-3">{job.summary}</p>
                        )}
                        {job.highlights && <ExpandableList items={job.highlights} visible={1} />}
                        {job.technologies && <Chips items={job.technologies} />}
                    </div>
                )}
            </div>
        </li>
    );
}

export function ExperienceSection() {
    return (
        <section id="experience" aria-labelledby="experience-heading" className="py-20 sm:py-28 bg-card border-y border-line">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="reveal max-w-2xl mb-12 sm:mb-16">
                    <p className="eyebrow eyebrow-dot">Experience · 2017 – 2026</p>
                    <h2
                        id="experience-heading"
                        className="mt-3 font-display font-bold tracking-[-0.025em] text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink leading-tight"
                    >
                        8+ years shipping production software, most recently for global enterprise clients.
                    </h2>
                </div>

                <ol className="space-y-10 sm:space-y-12">
                    {experiences.map((job, i) => (
                        <Role key={job.company} job={job} index={i} last={i === experiences.length - 1} />
                    ))}
                </ol>

                <div className="reveal mt-14 grid md:grid-cols-[190px_1fr] gap-3 md:gap-8">
                    <p className="eyebrow md:text-right md:pt-1">Education</p>
                    <div className="md:pl-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <p className="text-ink">
                            <span className="font-semibold">{education.degree}</span>
                            <span className="text-ink-3"> · {education.institution}</span>
                        </p>
                        <p className="font-mono text-sm text-ink-3">{education.period}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
