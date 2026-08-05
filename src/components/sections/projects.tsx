import { independentProject, projects } from "@/config/site";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 lg:py-28 bg-white border-y border-[#E5E7EB]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mb-10">
                    <p className="text-[11px] text-[#6B7280] uppercase tracking-widest mb-2 font-semibold">
                        Delivery
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        Selected Projects
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
                            <p className="text-sm text-[#4B5563] leading-relaxed mt-3 flex-1">
                                {project.description}
                            </p>
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
