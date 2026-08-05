import { architecturePillars } from "@/config/site";

export function PlatformArchitectureSection() {
    return (
        <section id="architecture" className="py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mb-12">
                    <p className="text-[11px] text-[#6B7280] uppercase tracking-widest mb-2 font-semibold">
                        Featured Platform
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        Frontend-Focused Full-Stack Architecture at Scale
                    </h2>
                    <p className="text-sm text-[#4B5563] mt-3 leading-relaxed">
                        Avis Budget Group multi-market digital platform supporting customer
                        experiences across 15+ country markets.
                    </p>
                </div>

                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {architecturePillars.map((item, i) => (
                        <li
                            key={item.title}
                            className={`p-5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#FFB399] transition-colors flex flex-col reveal reveal-delay-${Math.min(i + 1, 6)}`}
                        >
                            <h3 className="text-sm font-semibold text-[#1A1A2E] mb-1.5">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[#4B5563] leading-relaxed flex-1">
                                {item.description}
                            </p>
                            <ul className="flex flex-wrap gap-1.5 mt-3">
                                {item.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="px-2 py-0.5 text-[11px] text-[#4B5563] rounded border border-[#E5E7EB] bg-[#F9FAFB]"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="mt-8 p-6 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] reveal">
                    <h3 className="text-[11px] text-[#6B7280] uppercase tracking-widest mb-5 text-center font-semibold">
                        System Overview
                    </h3>
                    <ol className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
                        {[
                            { label: "React / Next.js", sub: "SSR • SSG • Microfrontends", accent: true },
                            { label: "BFF Services", sub: "Node.js • NestJS • Express.js", accent: false },
                            { label: "Data & Security", sub: "OAuth 2.0 • OIDC • JWT • RBAC", accent: false },
                            { label: "AWS & Delivery", sub: "Serverless • CI/CD • CloudWatch", accent: false },
                        ].map((node, i, nodes) => (
                            <li key={node.label} className="flex items-center gap-2">
                                <div className="flex flex-col items-center gap-1">
                                    <span
                                        className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                                            node.accent
                                                ? "bg-white border-[#FFB399] text-[#C2410C]"
                                                : "bg-white border-[#E5E7EB] text-[#374151]"
                                        }`}
                                    >
                                        {node.label}
                                    </span>
                                    <span className="text-[10px] text-[#6B7280] text-center">
                                        {node.sub}
                                    </span>
                                </div>
                                {i < nodes.length - 1 && (
                                    <>
                                        <svg
                                            className="w-5 h-3 text-[#9CA3AF] hidden sm:block flex-shrink-0"
                                            viewBox="0 0 20 12"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M0 6h16M13 3l3 3-3 3"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                fill="none"
                                            />
                                        </svg>
                                        <svg
                                            className="w-3 h-5 text-[#9CA3AF] sm:hidden flex-shrink-0"
                                            viewBox="0 0 12 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M6 0v16M3 13l3 3 3-3"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                fill="none"
                                            />
                                        </svg>
                                    </>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
