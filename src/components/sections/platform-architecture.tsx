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
            </div>
        </section>
    );
}
