import { principles } from "@/config/site";
import { ResumeDownloadLink } from "@/components/resume-download-link";

export function EngineeringMindsetSection() {
    return (
        <section
            aria-labelledby="approach-heading"
            className="py-16 lg:py-24 bg-white border-y border-[#E5E7EB]"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <p className="text-[11px] text-[#6B7280] uppercase tracking-widest mb-2 font-semibold">
                        Approach
                    </p>
                    <h2 id="approach-heading" className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        Engineering Approach
                    </h2>
                </div>

                <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {principles.map((item, i) => (
                        <li
                            key={item.title}
                            className={`p-5 rounded-xl border border-[#E5E7EB] hover:border-[#FFB399] transition-colors flex flex-col reveal reveal-delay-${Math.min(i + 1, 4)}`}
                        >
                            <h3 className="text-sm font-semibold text-[#1A1A2E] mb-1.5">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[#4B5563] leading-relaxed flex-1">
                                {item.description}
                            </p>
                        </li>
                    ))}
                </ul>

                {/* Format/date detail is stated once, in the hero. */}
                <div className="mt-6 flex items-center justify-center reveal">
                    <ResumeDownloadLink className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C2410C] text-white font-semibold rounded-full hover:bg-[#9A3412] transition-colors text-sm" />
                </div>
            </div>
        </section>
    );
}
