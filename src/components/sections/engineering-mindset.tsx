"use client";

const engineeringPrinciples = [
    {
        title: "Performance",
        description: "I treat performance as a system property, not a last-minute optimization. I focus on rendering strategy, data boundaries, and cache behavior early — before performance becomes expensive to fix.",
        icon: "🚀",
        gradient: "from-[#FF6B35] to-[#FF8F6B]",
    },
    {
        title: "Architecture",
        description: "I design frontend systems to scale independently of backend complexity, using clear API contracts, predictable state models, and modular service boundaries.",
        icon: "🏗️",
        gradient: "from-[#FF8F6B] to-[#FFB399]",
    },
    {
        title: "Trade-offs",
        description: "Every technical decision has a cost. I explicitly choose what to optimize for — and what not to — based on user impact, team velocity, and system lifespan.",
        icon: "⚖️",
        gradient: "from-[#8B5CF6] to-[#A78BFA]",
    },
    {
        title: "Quality",
        description: "I use automated testing and tooling not as process overhead, but as leverage to move faster with confidence.",
        icon: "✨",
        gradient: "from-[#E879F9] to-[#F0ABFC]",
    },
];

export function EngineeringMindsetSection() {
    return (
        <section id="engineering" className="py-24 px-6 bg-gradient-to-br from-[#FFFBF8] to-[#FFF8F5]">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side - Stacked Service Cards */}
                    <div className="space-y-4">
                        {engineeringPrinciples.map((principle, index) => (
                            <div
                                key={principle.title}
                                className="group relative bg-white rounded-2xl p-5 shadow-sm border border-[#FFE8E0] hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Gradient left border */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${principle.gradient}`} />

                                <div className="flex items-start gap-4 pl-3">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                        <span className="text-xl">{principle.icon}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 group-hover:text-[#FF6B35] transition-colors">
                                            {principle.title}
                                        </h3>
                                        <p className="text-sm text-[#6B7280] leading-relaxed">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Heading & Description */}
                    <div className="lg:sticky lg:top-32">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-[#1A1A2E]">How I Think</span>
                            <br />
                            <span className="text-[#FF6B35]">As an Engineer</span>
                        </h2>

                        <p className="text-[#6B7280] mb-6 leading-relaxed">
                            My engineering approach is grounded in first principles thinking and a deep understanding of system behavior at scale. I believe in making the right architectural decisions early to avoid costly refactors later.
                        </p>

                        <p className="text-[#6B7280] mb-8 leading-relaxed">
                            These four principles guide every technical decision I make — from choosing rendering strategies in Next.js to designing API boundaries between microservices. They represent lessons learned from building and scaling enterprise systems used by millions.
                        </p>

                        {/* Download CV Button */}
                        <a
                            href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8F6B] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:-translate-y-1"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
