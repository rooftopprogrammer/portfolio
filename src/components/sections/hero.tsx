import Image from "next/image";
import Link from "next/link";
import {
    employers,
    heroBadges,
    heroStatus,
    metrics,
    resume,
    siteConfig,
    summary,
} from "@/config/site";
import { ArrowRightIcon, LocationIcon, SocialIcon } from "@/components/icons";
import { ResumeDownloadLink } from "@/components/resume-download-link";

/**
 * Server component. Nothing here is hidden behind an entrance animation —
 * the hero paints complete on the first frame.
 */
export function HeroSection() {
    return (
        <section id="hero" className="relative flex items-center pt-28 pb-14 lg:pt-32 lg:pb-16">
            <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
                    <div className="lg:col-span-3 space-y-5">
                        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] text-sm text-[#4B5563] shadow-sm">
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
                            </span>
                            {heroStatus}
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1A1A2E] tracking-tight leading-[1.15]">
                            Ravi Kumar <span className="block text-[#C2410C]">Nersu</span>
                        </h1>

                        <div>
                            <p className="text-lg lg:text-xl font-semibold text-[#1A1A2E]">
                                {siteConfig.title}
                            </p>
                            <p className="text-sm text-[#4B5563] mt-1 tracking-wide">
                                {siteConfig.headline}
                            </p>
                        </div>

                        <p className="text-[#4B5563] text-[15px] leading-relaxed max-w-xl">
                            {summary}
                        </p>

                        <ul className="flex flex-wrap gap-2" aria-label="Highlights">
                            {heroBadges.map((badge) => (
                                <li
                                    key={badge}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-[#FFF2EE] text-[#C2410C] border border-[#FFDDD1]"
                                >
                                    {badge}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap items-center gap-4 pt-1">
                            <ResumeDownloadLink className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C2410C] text-white text-sm font-semibold rounded-full hover:bg-[#9A3412] transition-colors shadow-sm" />

                            <Link
                                href="#experience"
                                className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#D1D5DB] text-[#1A1A2E] text-sm font-semibold rounded-full hover:border-[#C2410C] hover:text-[#C2410C] transition-colors"
                            >
                                View Experience
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>

                            <ul className="flex items-center gap-3">
                                {siteConfig.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            {...(link.external
                                                ? { target: "_blank", rel: "noopener noreferrer" }
                                                : {})}
                                            className="w-9 h-9 flex items-center justify-center rounded-full border border-[#D1D5DB] text-[#4B5563] hover:text-[#C2410C] hover:border-[#C2410C] transition-colors"
                                        >
                                            <SocialIcon icon={link.icon} className="w-4 h-4" />
                                            <span className="sr-only">
                                                {link.name}
                                                {link.external ? " (opens in a new tab)" : ""}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="flex items-center gap-2 text-sm text-[#4B5563]">
                            <LocationIcon className="w-4 h-4 flex-shrink-0" />
                            {siteConfig.location} · {siteConfig.availability}
                        </p>

                        <p className="text-xs text-[#6B7280]">{resume.meta}</p>
                    </div>

                    <div className="lg:col-span-2 flex justify-center lg:justify-end">
                        <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-lg">
                            <Image
                                src="/profile-photo.jpg"
                                alt="Ravi Kumar Nersu, Senior Software Engineer"
                                width={320}
                                height={320}
                                sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-14 pt-6 border-t border-[#E5E7EB]">
                    <h2 className="text-[11px] text-[#6B7280] uppercase tracking-widest mb-3 font-semibold">
                        Professional experience includes
                    </h2>
                    <ul className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2">
                        {employers.map((employer) => (
                            <li
                                key={employer}
                                className="text-xs sm:text-sm font-bold text-[#6B7280] tracking-wider uppercase"
                            >
                                {employer}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

/** Verified delivery metrics. */
export function StatsSection() {
    return (
        <section
            aria-labelledby="impact-heading"
            className="py-16 bg-white border-y border-[#E5E7EB]"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2
                    id="impact-heading"
                    className="text-[11px] text-[#6B7280] uppercase tracking-widest mb-6 font-semibold"
                >
                    Enterprise Impact
                </h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
                    {metrics.map((item, i) => (
                        <li
                            key={item.label}
                            className={`reveal reveal-delay-${Math.min(i + 1, 6)}`}
                        >
                            <p
                                className="text-xl sm:text-2xl font-bold text-[#C2410C] leading-none"
                                aria-hidden="true"
                            >
                                {item.metric}
                            </p>
                            <p className="text-[11px] text-[#4B5563] mt-1 leading-tight" aria-hidden="true">
                                {item.label}
                            </p>
                            <span className="sr-only">{item.accessibleLabel}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
