"use client";

import { useEffect, useState, useRef } from "react";

const skillCategories = [
    {
        title: "Frontend Architecture",
        skills: ["React.js", "Next.js (App Router, SSR/SSG)", "TypeScript", "JavaScript ES6+", "Redux", "Zustand", "React Query", "Tailwind CSS", "Shadcn UI", "HTML5", "CSS3", "Responsive Design", "Accessibility", "Core Web Vitals"],
    },
    {
        title: "Backend, APIs & Security",
        skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "Microservices Integration", "BFF Pattern", "Clean Architecture", "JWT/OAuth2", "RBAC", "Secure Data Flows"],
    },
    {
        title: "Data, Search & Infrastructure",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Typesense", "Indexing", "Query Optimization", "Transactions", "Docker", "AWS (EC2, S3, CloudFront)"],
    },
    {
        title: "DevOps & Quality",
        skills: ["Git", "GitHub Actions", "CI/CD", "Jest", "React Testing Library", "Integration Testing", "Vitest", "Playwright", "Webpack", "Vite", "Jira", "Artifactory"],
    },
    {
        title: "AI-Assisted Engineering",
        skills: ["Claude Code", "Claude for VS Code", "GitHub Copilot", "GenAI Certification", "Implementation Planning", "Debugging", "Refactoring", "Test Ideation", "Documentation", "AI-Assisted Code Review"],
    },
];

export function SkillsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="py-20 lg:py-28">
            <div className="max-w-6xl mx-auto px-6">
                <div className={`mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
                    <p className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-2">Capabilities</p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E]">
                        Technical Skills
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {skillCategories.map((category, i) => (
                        <div
                            key={category.title}
                            className={`p-5 rounded-xl bg-white border border-[#F3F4F6] hover:border-[#FFE8E0] hover:shadow-sm transition-all duration-200 flex flex-col scroll-reveal stagger-${Math.min(i + 1, 5)} ${isVisible ? 'visible' : ''}`}
                        >
                            <h3 className="text-sm font-semibold text-[#1A1A2E] mb-3">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-1.5 flex-1">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 text-xs text-[#4B5563] rounded-md bg-[#F9FAFB] border border-[#F3F4F6]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
