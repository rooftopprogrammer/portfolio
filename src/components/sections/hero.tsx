import Image from "next/image";
import {
    employers,
    heroFacts,
    heroPitch,
    heroStatus,
    resume,
    siteConfig,
} from "@/config/site";
import { ArrowRightIcon, LocationIcon } from "@/components/icons";
import { ResumeDownloadLink } from "@/components/resume-download-link";

/** The before/after page-load card that floats over the photo. */
function TraceCard({ className = "" }: { className?: string }) {
    return (
        <div
            className={`card p-4 shadow-[0_24px_60px_-28px_rgba(21,23,28,0.45)] ${className}`}
            role="img"
            aria-label="Avis Budget Group page load cut from about 6 seconds to about 3 seconds"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold text-ink">Page load</p>
                    <p className="eyebrow !text-[10.5px] mt-0.5">Avis Budget Group</p>
                </div>
                <span className="font-mono text-[11px] font-semibold text-good-text bg-good-soft rounded-full px-2 py-0.5">
                    −50%
                </span>
            </div>
            <div className="mt-3 space-y-2.5 font-mono text-xs">
                <div className="flex items-center gap-3">
                    <span className="w-11 text-ink-3">before</span>
                    <span className="relative flex-1 h-2.5 rounded-full bg-paper-2 overflow-hidden">
                        <span className="absolute inset-0 rounded-full bg-line-strong" />
                    </span>
                    <span className="w-10 text-right text-ink-2">~6s</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="w-11 text-ink-3">after</span>
                    <span className="relative flex-1 h-2.5 rounded-full bg-paper-2 overflow-hidden">
                        <span
                            className="trace-after absolute inset-0 rounded-full bg-good"
                            style={{ ["--to" as string]: "0.5", transform: "scaleX(0.5)" }}
                        />
                    </span>
                    <span className="w-10 text-right font-semibold text-good-text">~3s</span>
                </div>
            </div>
        </div>
    );
}

export function HeroSection() {
    return (
        <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
            <div aria-hidden="true" className="grid-paper absolute inset-0 -z-10" />
            <div
                aria-hidden="true"
                className="absolute -z-10 -top-40 right-[-10%] w-[640px] h-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(255,91,54,0.16),transparent)]"
            />
            <div
                aria-hidden="true"
                className="absolute -z-10 top-[45%] -left-40 w-[520px] h-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(24,180,123,0.10),transparent)]"
            />

            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="grid lg:grid-cols-[1.25fr_0.9fr] gap-12 lg:gap-14 items-center">
                    <div>
                        <div className="rise flex items-center gap-3">
                            <Image
                                src="/ravi-kumar-nersu.jpg"
                                alt=""
                                width={48}
                                height={48}
                                className="lg:hidden w-12 h-12 rounded-full object-cover ring-2 ring-card shadow"
                                priority
                            />
                            <p className="inline-flex items-center gap-2.5 pl-3 pr-4 py-1.5 rounded-full bg-card border border-line text-[13px] sm:text-sm text-ink-2 shadow-sm">
                                <span aria-hidden="true" className="pulse-dot w-2 h-2 rounded-full bg-good" />
                                {heroStatus}
                            </p>
                        </div>

                        <h1 className="rise rise-1 mt-6 font-display font-extrabold tracking-[-0.035em] leading-[0.95] text-ink text-[clamp(3rem,9vw,6.25rem)]">
                            Ravi Kumar
                            <br />
                            Nersu<span className="text-signal">.</span>
                        </h1>

                        <p className="rise rise-2 mt-5 eyebrow eyebrow-dot !text-[13px] !text-ink">
                            {siteConfig.title}
                        </p>

                        <p className="rise rise-2 mt-5 max-w-2xl font-display text-[1.375rem] sm:text-[1.6rem] leading-snug tracking-[-0.01em] text-ink-2">
                            {heroPitch.before}{" "}
                            <span className="marker text-ink">{heroPitch.highlight1}</span>
                            {heroPitch.middle}{" "}
                            <span className="marker text-ink">{heroPitch.highlight2}</span>
                        </p>

                        <ul className="rise rise-3 mt-6 flex flex-wrap gap-2" aria-label="Experience at a glance">
                            {heroFacts.map((fact) => (
                                <li key={fact} className="chip !bg-card/70 font-mono !text-xs">
                                    {fact}
                                </li>
                            ))}
                        </ul>

                        <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-3">
                            <ResumeDownloadLink className="btn btn-primary" />
                            <a href="#impact" className="btn btn-ghost">
                                See the work
                                <ArrowRightIcon className="btn-arrow w-4 h-4" />
                            </a>
                        </div>

                        <p className="rise rise-4 mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-3">
                            <LocationIcon className="w-4 h-4" />
                            <span>{siteConfig.location}</span>
                            <span aria-hidden="true">·</span>
                            <span>{siteConfig.availability}</span>
                            <span aria-hidden="true" className="hidden sm:inline">·</span>
                            <span className="hidden sm:inline">{resume.meta}</span>
                        </p>

                        <TraceCard className="hidden sm:block lg:hidden mt-8 max-w-md" />
                    </div>

                    <div className="hidden lg:block relative">
                        <div className="relative mx-auto w-[360px] xl:w-[400px] aspect-[4/5] rotate-[2deg] rounded-[32px] overflow-hidden border border-line bg-paper-2 shadow-[0_40px_80px_-40px_rgba(21,23,28,0.55)] transition-transform duration-700 hover:rotate-0">
                            <Image
                                src="/ravi-kumar-nersu.jpg"
                                alt="Ravi Kumar Nersu"
                                fill
                                sizes="(min-width: 1280px) 400px, 360px"
                                className="object-cover"
                                loading="eager"
                            />
                            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
                        </div>

                        <TraceCard className="float absolute -left-12 bottom-10 w-[300px]" />

                        <div
                            aria-hidden="true"
                            className="float-slow absolute -right-4 top-8 card px-4 py-3 shadow-[0_20px_50px_-26px_rgba(21,23,28,0.5)]"
                        >
                            <p className="font-display text-2xl font-bold leading-none text-ink">15+</p>
                            <p className="mt-1 text-xs text-ink-3">country markets</p>
                        </div>

                        <div
                            aria-hidden="true"
                            className="float absolute right-2 bottom-[-18px] flex items-center gap-2 rounded-full bg-night text-night-ink pl-2 pr-3.5 py-1.5 text-xs font-mono shadow-lg"
                        >
                            <span className="grid place-items-center w-5 h-5 rounded-full bg-signal text-[10px] font-bold text-night">AI</span>
                            RAG · agents · evals
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/** Employers and clients, scrolling. Static and wrapped under reduced motion. */
export function EmployerMarquee() {
    const row = (duplicate: boolean) => (
        <ul
            className={`flex shrink-0 items-center ${duplicate ? "marquee-dup" : ""}`}
            aria-hidden={duplicate || undefined}
        >
            {employers.map((name) => (
                <li key={name} className="flex items-center">
                    <span className="px-6 sm:px-8 font-display text-lg sm:text-xl font-semibold tracking-tight text-ink-2 whitespace-nowrap">
                        {name}
                    </span>
                    <span aria-hidden="true" className="text-signal text-lg">✳</span>
                </li>
            ))}
        </ul>
    );

    return (
        <section aria-labelledby="employers-heading" className="border-y border-line bg-card/60 py-5">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <h2 id="employers-heading" className="eyebrow shrink-0">
                    Employers &amp; clients
                </h2>
                <div className="marquee overflow-hidden flex-1">
                    <div className="marquee-track">
                        {row(false)}
                        {row(true)}
                    </div>
                </div>
            </div>
        </section>
    );
}
