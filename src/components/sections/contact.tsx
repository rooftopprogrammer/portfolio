"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";
import {
    trackLinkedInClick,
    trackEmailClick,
    trackPhoneClick,
    trackEmailCopy,
    trackPhoneCopy,
} from "@/lib/analytics";

const EMAIL = "raviknersu96@gmail.com";
const PHONE = "+919885957899";
const PHONE_DISPLAY = "+91 98859 57899";

const socialIcons: Record<string, React.JSX.Element> = {
    linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    mail: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    ),
    phone: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
        </svg>
    ),
    copy: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
        </svg>
    ),
};

// Email modal for choosing mail client
function EmailModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    const handleGmail = () => {
        trackEmailClick('gmail');
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`, '_blank');
        onClose();
    };

    const handleOutlook = () => {
        trackEmailClick('outlook');
        window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}`, '_blank');
        onClose();
    };

    const handleDefault = () => {
        trackEmailClick('default');
        window.location.href = `mailto:${EMAIL}`;
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Open with</h3>
                <div className="space-y-3">
                    <button
                        onClick={handleGmail}
                        className="w-full flex items-center gap-3 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors"
                    >
                        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                            </svg>
                        </div>
                        <span className="text-white font-medium">Gmail</span>
                    </button>

                    <button
                        onClick={handleOutlook}
                        className="w-full flex items-center gap-3 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors"
                    >
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 7.387v10.478c0 .23-.08.424-.238.576-.159.152-.351.229-.576.229h-8.639v-6.09l1.204.99c.11.089.244.133.4.133a.57.57 0 0 0 .399-.133l4.941-4.058a.493.493 0 0 0 .171-.371.478.478 0 0 0-.171-.372l-.381-.309a.525.525 0 0 0-.39-.161.564.564 0 0 0-.4.161l-4.578 3.724V3.33h8.447c.226 0 .417.077.576.229.158.152.238.346.238.576v3.252zm-10.615-.828v11.295l-5.385 1.861V4.698l5.385 1.861zM1.09 8.086l4.895-1.599v10.17L1.09 15.059c-.206-.067-.368-.186-.486-.361a.934.934 0 0 1-.171-.552v-4.508c0-.21.057-.392.171-.544.118-.152.28-.266.486-.342v.334zm12.457 7.6v5.984L0 17.67V21.67l13.547 2.33V15.686z" />
                            </svg>
                        </div>
                        <span className="text-white font-medium">Outlook</span>
                    </button>

                    <button
                        onClick={handleDefault}
                        className="w-full flex items-center gap-3 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors"
                    >
                        <div className="w-10 h-10 rounded-lg bg-zinc-600/30 flex items-center justify-center">
                            {socialIcons.mail}
                        </div>
                        <span className="text-white font-medium">Default Mail App</span>
                    </button>
                </div>

                <button
                    onClick={onClose}
                    className="mt-4 w-full py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

export function ContactSection() {
    const [emailModalOpen, setEmailModalOpen] = useState(false);

    const handleEmailClick = () => {
        setEmailModalOpen(true);
    };

    const handlePhoneClick = () => {
        trackPhoneClick();
        window.location.href = `tel:${PHONE}`;
    };

    const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === 'email') {
                trackEmailCopy();
                toast.success('Email copied to clipboard!', {
                    description: text,
                    duration: 3000,
                });
            } else {
                trackPhoneCopy();
                toast.success('Phone number copied to clipboard!', {
                    description: text,
                    duration: 3000,
                });
            }
        } catch {
            toast.error('Failed to copy to clipboard');
        }
    };

    const handleLinkedInClick = () => {
        trackLinkedInClick();
    };

    const linkedInLink = siteConfig.links.find(link => link.icon === 'linkedin');

    return (
        <>
            <EmailModal isOpen={emailModalOpen} onClose={() => setEmailModalOpen(false)} />

            <section id="contact" className="py-24 px-6 bg-zinc-900/30">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            Let&apos;s Work Together
                        </span>
                    </h2>
                    <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
                        Interested in solving high-impact frontend architecture and performance problems at scale.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {/* Email Card */}
                        <div className="group p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 hover:border-blue-500/30 transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={handleEmailClick}
                                    className="flex items-center gap-4 flex-1 text-left"
                                >
                                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                        {socialIcons.mail}
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-400">Email</p>
                                        <p className="text-zinc-200 group-hover:text-blue-400 transition-colors">
                                            {EMAIL}
                                        </p>
                                    </div>
                                </button>
                                <button
                                    onClick={() => copyToClipboard(EMAIL, 'email')}
                                    className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg transition-all"
                                    aria-label="Copy email to clipboard"
                                >
                                    {socialIcons.copy}
                                </button>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="group p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 hover:border-blue-500/30 transition-all duration-300">
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={handlePhoneClick}
                                    className="flex items-center gap-4 flex-1 text-left"
                                >
                                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                        {socialIcons.phone}
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-400">Phone</p>
                                        <p className="text-zinc-200 group-hover:text-blue-400 transition-colors">
                                            {PHONE_DISPLAY}
                                        </p>
                                    </div>
                                </button>
                                <button
                                    onClick={() => copyToClipboard(PHONE_DISPLAY, 'phone')}
                                    className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg transition-all"
                                    aria-label="Copy phone number to clipboard"
                                >
                                    {socialIcons.copy}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Social Links - Only LinkedIn (GitHub hidden) */}
                    <div className="flex items-center justify-center gap-4">
                        {linkedInLink && (
                            <a
                                href={linkedInLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleLinkedInClick}
                                className="p-4 text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-700/50 rounded-full transition-all hover:scale-110"
                                aria-label={linkedInLink.name}
                            >
                                {socialIcons.linkedin}
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-6 border-t border-zinc-800/50">
            <div className="max-w-6xl mx-auto flex items-center justify-center">
                <p className="text-sm text-zinc-400">
                    © {currentYear} {siteConfig.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
