import type { Project } from "@/types";
import { independentProject, projects } from "@/config/site";

/**
 * Evidence links for a project. Renders nothing at all when the project has no
 * links — no disabled buttons, no placeholders.
 */
function ProjectLinks({ project }: { project: Project }) {
    const links = [
        { href: project.liveUrl, label: "Live site" },
        { href: project.repositoryUrl, label: "Repository" },
        { href: project.caseStudyUrl, label: "Case study" },
    ].filter((link): link is { href: string; label: string } => Boolean(link.href));

    if (links.length === 0) return null;

    return (
        <ul className="flex flex-wrap gap-3 mt-4">
            {links.map((link) => (
                <li key={link.label}>
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#C2410C] hover:text-[#9A3412] underline underline-offset-2"
                    >
                        {link.label}
                        <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 lg:py-28 bg-white border-y border-[#E5E7EB]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <p className="text-[11px] text-[#6B7280] uppercase tracking-widest mb-2 font-semibold">
                        Delivery
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        Case Studies
                    </h2>
                </div>

                <ul className="grid md:grid-cols-2 gap-4">
                    {projects.map((project, i) => (
                        <li
                            key={project.title}
                            className={`p-5 rounded-xl bg-[#FFFBF8] border border-[#E5E7EB] hover:border-[#FFB399] transition-colors flex flex-col reveal reveal-delay-${Math.min(i + 1, 4)}`}
                        >
                            <h3 className="text-base font-semibold text-[#1A1A2E]">
                                {project.title}
                            </h3>
                            {project.context && (
                                <p className="text-xs text-[#6B7280] mt-1">{project.context}</p>
                            )}
                            <dl className="mt-4 space-y-3 flex-1">
                                {[
                                    { term: "Challenge", detail: project.challenge },
                                    { term: "Approach", detail: project.approach },
                                    { term: "Outcome", detail: project.outcome },
                                ].map(({ term, detail }) => (
                                    <div key={term}>
                                        <dt className="text-[11px] font-semibold uppercase tracking-widest text-[#C2410C]">
                                            {term}
                                        </dt>
                                        <dd className="text-sm text-[#4B5563] leading-relaxed mt-1">
                                            {detail}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                            <ul className="flex flex-wrap gap-1.5 mt-4">
                                {project.technologies.map((tech) => (
                                    <li
                                        key={tech}
                                        className="px-2 py-0.5 text-[11px] text-[#4B5563] rounded border border-[#E5E7EB] bg-white"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                            <ProjectLinks project={project} />
                        </li>
                    ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-[#E5E7EB] reveal">
                    <h3 className="text-[11px] text-[#6B7280] uppercase tracking-widest mb-4 font-semibold">
                        Independent Project
                    </h3>

                    <div className="p-5 rounded-xl border border-[#E5E7EB] bg-[#FAFAFA]">
                        <h4 className="text-base font-semibold text-[#1A1A2E]">
                            {independentProject.title}
                        </h4>
                        <p className="mt-1.5 inline-block px-2 py-0.5 text-[11px] font-medium rounded border border-[#E5E7EB] bg-white text-[#4B5563]">
                            {independentProject.disclaimer}
                        </p>
                        <p className="text-sm text-[#4B5563] leading-relaxed mt-3">
                            {independentProject.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-5 mt-4">
                            <div>
                                <p className="text-xs font-semibold text-[#1A1A2E] mb-2">
                                    What it covers
                                </p>
                                <ul className="space-y-1.5">
                                    {independentProject.capabilities.map((capability) => (
                                        <li
                                            key={capability}
                                            className="flex gap-2 text-sm text-[#4B5563]"
                                        >
                                            <span className="text-[#C2410C]" aria-hidden="true">
                                                ●
                                            </span>
                                            <span>{capability}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-[#1A1A2E] mb-2">
                                    Built with
                                </p>
                                <ul className="flex flex-wrap gap-1.5">
                                    {independentProject.technologies.map((tech) => (
                                        <li
                                            key={tech}
                                            className="px-2 py-0.5 text-[11px] text-[#4B5563] rounded border border-[#E5E7EB] bg-white"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
