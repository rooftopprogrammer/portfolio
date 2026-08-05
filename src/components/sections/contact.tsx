"use client";

import { toast } from "sonner";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, resume } from "@/config/site";
import {
    CopyIcon,
    DownloadIcon,
    GitHubIcon,
    LinkedInIcon,
    MailIcon,
} from "@/components/icons";
import {
    trackEmailClick,
    trackEmailCopy,
    trackLinkedInClick,
    trackResumeDownload,
} from "@/lib/analytics";

const cardClass =
    "group flex items-center gap-4 p-5 glass rounded-2xl border border-[#E5E7EB] hover:border-[#FFB399] hover:bg-white transition-colors text-left";

const iconWrapClass =
    "p-3 bg-[#C2410C] rounded-xl text-white flex-shrink-0 transition-transform group-hover:scale-105";

export function ContactSection() {
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            trackEmailCopy();
            toast.success("Email copied to clipboard", { description: EMAIL, duration: 3000 });
        } catch {
            toast.error("Could not copy the email address");
        }
    };

    return (
        <section
            id="contact"
            className="py-24 px-6 bg-gradient-to-br from-[#FFFBF8] to-[#FFF8F5] relative overflow-hidden"
        >
            <div
                className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[#FF6B35]/10 to-transparent rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#FF6B35]/5 to-transparent rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-4xl mx-auto text-center relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-[#1A1A2E]">Let&apos;s Build Reliable Products </span>
                    <span className="text-[#C2410C]">Together</span>
                </h2>
                <p className="text-[#4B5563] mb-12 max-w-2xl mx-auto leading-relaxed">
                    I&apos;m open to Senior Software Engineer and frontend-focused full-stack
                    opportunities in Hyderabad. I bring 8+ years of React experience, four years of
                    hands-on full-stack and AWS delivery, and a strong focus on accessibility,
                    performance and production reliability.
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                    <li className="flex items-stretch gap-2 reveal reveal-delay-1">
                        <a
                            href={`mailto:${EMAIL}`}
                            onClick={() => trackEmailClick("mailto")}
                            className={`${cardClass} flex-1 min-w-0`}
                        >
                            <span className={iconWrapClass}>
                                <MailIcon className="w-5 h-5" />
                            </span>
                            <span className="min-w-0">
                                <span className="block text-sm text-[#6B7280]">Email</span>
                                {/* Never truncate the address — it is the primary contact route. */}
                                <span className="block text-sm text-[#1A1A2E] group-hover:text-[#C2410C] transition-colors font-medium break-words">
                                    {EMAIL}
                                </span>
                            </span>
                        </a>
                        <button
                            type="button"
                            onClick={copyEmail}
                            className="px-3 text-[#4B5563] hover:text-[#C2410C] glass rounded-xl border border-[#E5E7EB] hover:border-[#FFB399] transition-colors flex-shrink-0"
                        >
                            <CopyIcon className="w-4 h-4" />
                            <span className="sr-only">Copy email address to clipboard</span>
                        </button>
                    </li>

                    <li className="reveal reveal-delay-2">
                        <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackLinkedInClick()}
                            className={`${cardClass} w-full`}
                        >
                            <span className={iconWrapClass}>
                                <LinkedInIcon className="w-5 h-5" />
                            </span>
                            <span className="min-w-0">
                                <span className="block text-sm text-[#6B7280]">LinkedIn</span>
                                <span className="block text-[#1A1A2E] group-hover:text-[#C2410C] transition-colors font-medium">
                                    Connect
                                    <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
                                </span>
                            </span>
                        </a>
                    </li>

                    <li className="reveal reveal-delay-3">
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${cardClass} w-full`}
                        >
                            <span className={iconWrapClass}>
                                <GitHubIcon className="w-5 h-5" />
                            </span>
                            <span className="min-w-0">
                                <span className="block text-sm text-[#6B7280]">GitHub</span>
                                <span className="block text-[#1A1A2E] group-hover:text-[#C2410C] transition-colors font-medium">
                                    View profile
                                    <span className="sr-only"> on GitHub (opens in a new tab)</span>
                                </span>
                            </span>
                        </a>
                    </li>

                    <li className="reveal reveal-delay-4">
                        <a
                            href={resume.href}
                            download={resume.fileName}
                            onClick={() => trackResumeDownload()}
                            className={`${cardClass} w-full`}
                        >
                            <span className={iconWrapClass}>
                                <DownloadIcon className="w-5 h-5" />
                            </span>
                            <span className="min-w-0">
                                <span className="block text-sm text-[#6B7280]">Resume</span>
                                <span className="block text-[#1A1A2E] group-hover:text-[#C2410C] transition-colors font-medium">
                                    {resume.label}
                                </span>
                            </span>
                        </a>
                    </li>
                </ul>

            </div>
        </section>
    );
}
