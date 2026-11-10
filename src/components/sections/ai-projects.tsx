import { aiProjects } from "@/config/site";
import { ClaimPilotDemo, FinDocsDemo } from "@/components/ai-demos";
import { ExpandableList } from "@/components/expandable-list";

const demos = [FinDocsDemo, ClaimPilotDemo];

export function AiProjectsSection() {
    return (
        <section
            id="ai-projects"
            aria-labelledby="ai-heading"
            className="on-night relative overflow-hidden bg-night text-night-ink py-20 sm:py-28"
        >
            <div aria-hidden="true" className="night-grid absolute inset-0" />
            <div
                aria-hidden="true"
                className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(255,91,54,0.18),transparent)]"
            />

            <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
                <div className="reveal max-w-2xl">
                    <p className="eyebrow !text-night-ink-2 eyebrow-dot">Independent AI projects · 2026</p>
                    <h2
                        id="ai-heading"
                        className="mt-3 font-display font-bold tracking-[-0.025em] text-[clamp(1.75rem,3.8vw,2.75rem)] leading-tight"
                    >
                        GenAI that shows its sources, and agents that wait for a person.
                    </h2>
                    <p className="mt-4 text-night-ink-2 leading-relaxed">
                        Two end-to-end builds on Azure that go past the demo: retrieval with citations,
                        evaluation harnesses, guarded tool use and human approval. Built independently,
                        separate from client work.
                    </p>
                </div>

                <ul className="mt-12 grid lg:grid-cols-2 gap-5">
                    {aiProjects.map((project, i) => {
                        const Demo = demos[i];
                        return (
                            <li
                                key={project.name}
                                className={`reveal reveal-d${i + 1} group rounded-3xl border border-night-line bg-night-2/80 backdrop-blur p-5 sm:p-6 flex flex-col transition-colors hover:border-[#3a3f4b]`}
                            >
                                <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-3 sm:gap-4">
                                    <div>
                                        <h3 className="font-display text-2xl sm:text-[1.75rem] font-bold tracking-tight">
                                            {project.name}
                                        </h3>
                                        <p className="mt-1 text-night-ink-2">{project.tagline}</p>
                                    </div>
                                    <span className="shrink-0 rounded-full border border-night-line px-2.5 py-1 font-mono text-[11px] text-night-ink-2">
                                        {project.note}
                                    </span>
                                </div>

                                <div className="mt-5">{Demo && <Demo />}</div>

                                <div className="mt-6 flex-1">
                                    <ExpandableList items={project.highlights} visible={1} tone="night" />
                                </div>

                                <ul className="mt-6 pt-5 border-t border-night-line flex flex-wrap gap-1.5" aria-label="Stack">
                                    {project.stack.map((tech) => (
                                        <li key={tech} className="chip chip-night !text-xs !py-0.5">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
