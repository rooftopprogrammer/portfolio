import type { ImpactMetric } from "@/types";
import { capabilities, impact, stats } from "@/config/site";

function change(metric: ImpactMetric) {
    if (metric.better === "higher") return `+${metric.after - metric.before} pts`;
    return `−${Math.round(((metric.before - metric.after) / metric.before) * 100)}%`;
}

function MetricCard({ metric, index }: { metric: ImpactMetric; index: number }) {
    const max = metric.better === "higher" ? 100 : metric.before;
    const beforeScale = metric.before / max;
    const afterScale = metric.after / max;

    return (
        <li className={`reveal reveal-d${(index % 4) + 1} card spotlight p-4 sm:p-6`}>
            <div className="flex flex-col-reverse items-start sm:flex-row sm:justify-between gap-1.5 sm:gap-3">
                <p className="text-sm font-medium text-ink-2 leading-snug">{metric.label}</p>
                <span className="font-mono text-xs font-semibold text-good-text bg-good-soft rounded-full px-2 py-0.5 whitespace-nowrap">
                    {change(metric)}
                </span>
            </div>

            <p className="mt-3 sm:mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1" aria-hidden="true">
                <span className="font-display text-[1.75rem] sm:text-[2.75rem] font-bold tracking-tight text-ink leading-none whitespace-nowrap">
                    {metric.afterText}
                </span>
                <span className="font-mono text-sm text-ink-3 line-through decoration-signal/60">
                    {metric.beforeText}
                </span>
            </p>
            <p className="sr-only">{metric.accessibleLabel}</p>

            <div className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2" aria-hidden="true">
                <div className="h-2 rounded-full bg-paper-2 overflow-hidden">
                    <div
                        className="bar-fill h-full rounded-full bg-line-strong"
                        style={{ width: `${beforeScale * 100}%` }}
                    />
                </div>
                <div className="h-2 rounded-full bg-paper-2 overflow-hidden">
                    <div
                        className="bar-fill h-full rounded-full bg-good"
                        style={{ width: `${afterScale * 100}%`, transitionDelay: "0.55s" }}
                    />
                </div>
                <div className="hidden sm:flex justify-between font-mono text-xs text-ink-3 pt-0.5">
                    <span>before → after</span>
                    <span>{metric.better === "lower" ? "lower is better" : "higher is better"}</span>
                </div>
            </div>
        </li>
    );
}

export function ImpactSection() {
    return (
        <section id="impact" aria-labelledby="impact-heading" className="py-20 sm:py-28">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14">
                    <div className="reveal lg:sticky lg:top-28 self-start">
                        <p className="eyebrow eyebrow-dot">Impact · {impact.kicker}</p>
                        <h2
                            id="impact-heading"
                            className="mt-4 font-display font-bold tracking-[-0.025em] leading-[1.05] text-[clamp(2rem,4.4vw,3.1rem)] text-ink"
                        >
                            {impact.title}
                        </h2>
                        <p className="mt-5 text-ink-2 leading-relaxed max-w-md">
                            I owned the frontend architecture of the React, Next.js and microfrontend
                            platform behind booking, vehicle search and reservations. The gains came from
                            four changes:
                        </p>
                        <ul className="mt-6 flex flex-wrap gap-2" aria-label="How">
                            {impact.how.map((step, i) => (
                                <li key={step} className="chip">
                                    <span className="font-mono text-[11px] text-signal-text mr-1.5">
                                        0{i + 1}
                                    </span>
                                    {step}
                                </li>
                            ))}
                        </ul>

                        <dl className="mt-8 sm:mt-10 grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-line bg-line">
                            {stats.map((stat) => (
                                <div key={stat.label} className="bg-card p-4 sm:p-5">
                                    <dt className="sr-only">{stat.label}</dt>
                                    <dd>
                                        <span className="block font-display text-3xl font-bold tracking-tight text-ink">
                                            {stat.value}
                                        </span>
                                        <span className="block mt-1 text-sm text-ink-3 leading-snug">
                                            {stat.label}
                                        </span>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <ul className="grid grid-cols-2 gap-3 sm:gap-4 self-start">
                        {impact.metrics.map((metric, i) => (
                            <MetricCard key={metric.label} metric={metric} index={i} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export function CapabilitiesSection() {
    return (
        <section aria-labelledby="capabilities-heading" className="pb-20 sm:pb-28">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="reveal flex items-end justify-between gap-4 mb-8">
                    <div>
                        <p className="eyebrow eyebrow-dot">What I do</p>
                        <h2
                            id="capabilities-heading"
                            className="mt-3 font-display font-bold tracking-[-0.025em] text-[clamp(1.75rem,3.5vw,2.5rem)] text-ink"
                        >
                            Full stack, from pixel to prompt.
                        </h2>
                    </div>
                    <p aria-hidden="true" className="md:hidden shrink-0 font-mono text-xs text-ink-3 pb-2">swipe →</p>
                </div>

                <ul
                    className="-mx-5 px-5 md:mx-0 md:px-0 flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-5 pb-2 md:pb-0 [scrollbar-width:none]"
                    aria-label="Capabilities — swipe for more on small screens"
                >
                    {capabilities.map((cap, i) => (
                        <li
                            key={cap.title}
                            className={`reveal reveal-d${i + 1} card spotlight p-6 flex flex-col snap-start shrink-0 w-[84%] sm:w-[60%] md:w-auto`}
                        >
                            <p className="font-mono text-xs text-signal-text">{cap.kicker}</p>
                            <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink">
                                {cap.title}
                            </h3>
                            <p className="mt-2.5 text-[15px] text-ink-2 leading-relaxed">{cap.description}</p>
                            <ul className="mt-4 space-y-2 flex-1">
                                {cap.points.map((point) => (
                                    <li key={point} className="flex gap-2.5 text-sm text-ink-2">
                                        <span aria-hidden="true" className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full bg-signal" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <ul className="mt-5 pt-4 border-t border-line flex flex-wrap gap-1.5" aria-label="Main tools">
                                {cap.tools.map((tool) => (
                                    <li key={tool} className="chip !text-xs !py-0.5">
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
