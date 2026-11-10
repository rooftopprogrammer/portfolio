"use client";

import { useState } from "react";
import { toast } from "sonner";
import { EMAIL, LINKEDIN_URL, resume, siteConfig } from "@/config/site";
import {
    ArrowUpRightIcon,
    CheckIcon,
    CopyIcon,
    DownloadIcon,
    LinkedInIcon,
    MailIcon,
} from "@/components/icons";
import {
    trackEmailClick,
    trackEmailCopy,
    trackLinkedInClick,
    trackResumeDownload,
} from "@/lib/analytics";

const tileClass =
    "group flex items-center gap-4 rounded-2xl border border-night-line bg-white/[0.03] p-4 sm:p-5 transition-all duration-300 hover:border-signal/60 hover:bg-white/[0.06] hover:-translate-y-0.5";

const iconClass =
    "grid place-items-center w-11 h-11 shrink-0 rounded-xl bg-signal text-night transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105";

export function ContactSection() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            trackEmailCopy();
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2200);
            toast.success("Email copied", { description: EMAIL, duration: 2500 });
        } catch {
            toast.error("Could not copy the email address");
        }
    };

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="on-night relative overflow-hidden bg-night text-night-ink"
        >
            <div aria-hidden="true" className="night-grid absolute inset-0" />
            <div
                aria-hidden="true"
                className="absolute -bottom-64 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(255,91,54,0.22),transparent)]"
            />

            <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-20 sm:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-end">
                <div className="reveal">
                    <p className="eyebrow !text-night-ink-2 eyebrow-dot">Contact</p>
                    <h2
                        id="contact-heading"
                        className="mt-4 font-display font-extrabold tracking-[-0.035em] leading-[0.98] text-[clamp(2.5rem,7vw,5rem)]"
                    >
                        Let’s build something fast
                        <span className="text-signal"> &amp; </span>
                        reliable.
                    </h2>
                    <p className="mt-6 max-w-lg text-night-ink-2 leading-relaxed">
                        Open to Senior Full-Stack and GenAI engineering roles. Based in{" "}
                        {siteConfig.location}, {siteConfig.availability.toLowerCase()}.
                    </p>
                </div>

                <ul className="reveal reveal-d2 grid gap-3">
                    <li className="flex gap-2">
                        <a
                            href={`mailto:${EMAIL}`}
                            onClick={() => trackEmailClick("mailto")}
                            className={`${tileClass} flex-1 min-w-0`}
                        >
                            <span className={iconClass}>
                                <MailIcon className="w-5 h-5" />
                            </span>
                            <span className="min-w-0">
                                <span className="block text-xs font-mono uppercase tracking-wider text-night-ink-2">Email</span>
                                <span className="block font-medium break-all">{EMAIL}</span>
                            </span>
                        </a>
                        <button
                            type="button"
                            onClick={copyEmail}
                            className="grid place-items-center w-14 shrink-0 rounded-2xl border border-night-line bg-white/[0.03] text-night-ink-2 transition-colors hover:text-night-ink hover:border-signal/60"
                        >
                            {copied ? <CheckIcon className="w-5 h-5 text-good" /> : <CopyIcon className="w-5 h-5" />}
                            <span className="sr-only">{copied ? "Email copied" : "Copy email address"}</span>
                        </button>
                    </li>
                    <li>
                        <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackLinkedInClick()}
                            className={tileClass}
                        >
                            <span className={iconClass}>
                                <LinkedInIcon className="w-5 h-5" />
                            </span>
                            <span className="flex-1">
                                <span className="block text-xs font-mono uppercase tracking-wider text-night-ink-2">LinkedIn</span>
                                <span className="block font-medium">
                                    Connect with me
                                    <span className="sr-only"> (opens in a new tab)</span>
                                </span>
                            </span>
                            <ArrowUpRightIcon className="w-5 h-5 text-night-ink-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </li>
                    <li>
                        <a
                            href={resume.href}
                            download={resume.fileName}
                            onClick={() => trackResumeDownload()}
                            className={tileClass}
                        >
                            <span className={iconClass}>
                                <DownloadIcon className="w-5 h-5" />
                            </span>
                            <span className="flex-1">
                                <span className="block text-xs font-mono uppercase tracking-wider text-night-ink-2">Resume</span>
                                <span className="block font-medium">{resume.label}</span>
                                <span className="block text-xs text-night-ink-2 mt-0.5">{resume.meta}</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
