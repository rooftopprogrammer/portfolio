"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const socialIcons: Record<string, React.JSX.Element> = {
    github: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    ),
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
};

export function ContactSection() {
    return (
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
                    <a
                        href="mailto:raviknersu96@gmail.com"
                        className="group p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 hover:border-blue-500/30 transition-all duration-300 flex items-center gap-4"
                    >
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                            {socialIcons.mail}
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-zinc-500">Email</p>
                            <p className="text-zinc-200 group-hover:text-blue-400 transition-colors">
                                raviknersu96@gmail.com
                            </p>
                        </div>
                    </a>

                    <a
                        href="tel:+919885957899"
                        className="group p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 hover:border-blue-500/30 transition-all duration-300 flex items-center gap-4"
                    >
                        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                            {socialIcons.phone}
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-zinc-500">Phone</p>
                            <p className="text-zinc-200 group-hover:text-blue-400 transition-colors">
                                +91 98859 57899
                            </p>
                        </div>
                    </a>
                </div>

                <div className="flex items-center justify-center gap-4">
                    {siteConfig.links
                        .filter((link) => ["github", "linkedin"].includes(link.icon))
                        .map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-700/50 rounded-full transition-all hover:scale-110"
                                aria-label={link.name}
                            >
                                {socialIcons[link.icon]}
                            </a>
                        ))}
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-6 border-t border-zinc-800/50">
            <div className="max-w-6xl mx-auto flex items-center justify-center">
                <p className="text-sm text-zinc-500">
                    © {currentYear} {siteConfig.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
