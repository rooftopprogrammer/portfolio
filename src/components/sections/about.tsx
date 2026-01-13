"use client";

import Image from "next/image";

export function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 bg-zinc-900/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        About Me
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Profile Photo */}
                    <div className="relative">
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 p-1">
                            <div className="w-full h-full rounded-3xl bg-zinc-900 overflow-hidden">
                                <Image
                                    src="/profile-photo.jpg"
                                    alt="Ravi Kumar Nersu - Staff Software Engineer"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover rounded-3xl"
                                    priority
                                />
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
                    </div>

                    {/* Content - Staff-level positioning */}
                    <div className="space-y-6">
                        <p className="text-lg text-zinc-200 leading-relaxed font-medium">
                            I work at the intersection of frontend architecture, performance engineering, and large-scale system design.
                        </p>

                        <p className="text-zinc-400 leading-relaxed">
                            Over the past 8.5 years, I&apos;ve built and evolved enterprise platforms for global clients where frontend performance, maintainability, and architectural clarity directly impact business outcomes. My core strength lies in making high-leverage technical decisions — especially around rendering strategy, state management, API boundaries, and microservice composition.
                        </p>

                        <p className="text-zinc-400 leading-relaxed">
                            I have led frontend-heavy initiatives within microservices ecosystems, reduced real-world load times by 50%, and helped teams move from tightly coupled implementations to scalable, testable systems. I value clarity over cleverness and long-term system health over short-term speed.
                        </p>

                        {/* Quick facts */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-800/50">
                                <p className="text-2xl font-bold text-blue-400">8.5+</p>
                                <p className="text-sm text-zinc-400">Years Experience</p>
                            </div>
                            <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-800/50">
                                <p className="text-2xl font-bold text-cyan-400">5+</p>
                                <p className="text-sm text-zinc-400">Companies</p>
                            </div>
                            <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-800/50">
                                <p className="text-2xl font-bold text-purple-400">10+</p>
                                <p className="text-sm text-zinc-400">Projects Delivered</p>
                            </div>
                            <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-800/50">
                                <p className="text-2xl font-bold text-pink-400">Global</p>
                                <p className="text-sm text-zinc-400">Client Reach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
