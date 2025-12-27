"use client";

const engineeringPrinciples = [
    {
        title: "Performance",
        description: "I treat performance as a system property, not a last-minute optimization. I focus on rendering strategy, data boundaries, and cache behavior early — before performance becomes expensive to fix.",
    },
    {
        title: "Architecture",
        description: "I design frontend systems to scale independently of backend complexity, using clear API contracts, predictable state models, and modular service boundaries.",
    },
    {
        title: "Trade-offs",
        description: "Every technical decision has a cost. I explicitly choose what to optimize for — and what not to — based on user impact, team velocity, and system lifespan.",
    },
    {
        title: "Quality",
        description: "I use automated testing and tooling not as process overhead, but as leverage to move faster with confidence.",
    },
];

export function EngineeringMindsetSection() {
    return (
        <section id="engineering" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        How I Think as an Engineer
                    </span>
                </h2>

                <div className="space-y-10">
                    {engineeringPrinciples.map((principle) => (
                        <div key={principle.title} className="group">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-cyan-400 transition-colors" />
                                {principle.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed pl-5 border-l border-zinc-800 group-hover:border-blue-500/30 transition-colors">
                                {principle.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
