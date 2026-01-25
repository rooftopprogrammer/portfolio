"use client";

import Image from "next/image";

export function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    <span className="text-[#1A1A2E]">About </span>
                    <span className="text-[#FF6B35]">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Profile Photo */}
                    <div className="relative">
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#FF6B35]/20 via-[#FF8F6B]/20 to-purple-500/20 p-1">
                            <div className="w-full h-full rounded-3xl bg-white overflow-hidden shadow-lg">
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
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF6B35]/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                    </div>

                    {/* Content - Staff-level positioning */}
                    <div className="space-y-6">
                        <p className="text-lg text-[#1A1A2E] leading-relaxed font-medium">
                            I work at the intersection of frontend architecture, performance engineering, and large-scale system design.
                        </p>

                        <p className="text-[#6B7280] leading-relaxed">
                            Over the past 8.5 years, I&apos;ve built and evolved enterprise platforms for global clients where frontend performance, maintainability, and architectural clarity directly impact business outcomes. My core strength lies in making high-leverage technical decisions — especially around rendering strategy, state management, API boundaries, and microservice composition.
                        </p>

                        <p className="text-[#6B7280] leading-relaxed">
                            I have led frontend-heavy initiatives within microservices ecosystems, reduced real-world load times by 50%, and helped teams move from tightly coupled implementations to scalable, testable systems. I value clarity over cleverness and long-term system health over short-term speed.
                        </p>

                        {/* Quick facts */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-[#FFF8F5] rounded-xl border border-[#FFE8E0] hover:border-[#FF6B35]/30 transition-colors">
                                <p className="text-2xl font-bold text-[#FF6B35]">8.5+</p>
                                <p className="text-sm text-[#6B7280]">Years Experience</p>
                            </div>
                            <div className="p-4 bg-[#FFF8F5] rounded-xl border border-[#FFE8E0] hover:border-[#FF6B35]/30 transition-colors">
                                <p className="text-2xl font-bold text-[#FF8F6B]">5+</p>
                                <p className="text-sm text-[#6B7280]">Companies</p>
                            </div>
                            <div className="p-4 bg-[#FFF8F5] rounded-xl border border-[#FFE8E0] hover:border-[#FF6B35]/30 transition-colors">
                                <p className="text-2xl font-bold text-[#8B5CF6]">10+</p>
                                <p className="text-sm text-[#6B7280]">Projects Delivered</p>
                            </div>
                            <div className="p-4 bg-[#FFF8F5] rounded-xl border border-[#FFE8E0] hover:border-[#FF6B35]/30 transition-colors">
                                <p className="text-2xl font-bold text-[#E879F9]">Global</p>
                                <p className="text-sm text-[#6B7280]">Client Reach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
