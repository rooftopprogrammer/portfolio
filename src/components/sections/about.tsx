"use client";

import { siteConfig } from "@/config/site";

export function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 bg-zinc-900/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        About Me
                    </span>
                </h2>
                <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
                    Passionate about building exceptional digital experiences
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Avatar/Image placeholder */}
                    <div className="relative">
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 p-1">
                            <div className="w-full h-full rounded-3xl bg-zinc-900 flex items-center justify-center overflow-hidden">
                                <div className="text-8xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    RK
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <p className="text-zinc-300 leading-relaxed">
                            I&apos;m a <span className="text-blue-400 font-medium">Software Engineering Specialist</span> with
                            over 8.5 years of experience in building scalable enterprise applications. Currently working
                            at <span className="text-blue-400 font-medium">LTIMindtree</span>, where I architect and
                            develop modern web platforms for global clients.
                        </p>

                        <p className="text-zinc-400 leading-relaxed">
                            My expertise lies in the React ecosystem, particularly with Next.js and TypeScript.
                            I specialize in performance optimization - having achieved 50% improvements in load times
                            through strategic code splitting, caching layers, and lazy-loading strategies.
                        </p>

                        <p className="text-zinc-400 leading-relaxed">
                            Beyond coding, I&apos;m a strong collaborator with excellent communication and analytical skills.
                            I enjoy mentoring developers and working within cross-functional teams following Agile/Scrum
                            methodologies.
                        </p>

                        {/* Quick facts */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-800/50">
                                <p className="text-2xl font-bold text-blue-400">8.5</p>
                                <p className="text-sm text-zinc-500">Years Experience</p>
                            </div>
                            <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-800/50">
                                <p className="text-2xl font-bold text-cyan-400">5+</p>
                                <p className="text-sm text-zinc-500">Companies</p>
                            </div>
                            <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-800/50">
                                <p className="text-2xl font-bold text-purple-400">10+</p>
                                <p className="text-sm text-zinc-500">Projects Delivered</p>
                            </div>
                            <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-800/50">
                                <p className="text-2xl font-bold text-pink-400">Global</p>
                                <p className="text-sm text-zinc-500">Client Reach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
