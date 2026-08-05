export interface CaseStudy {
    problem: string;
    constraints: string;
    decision: string;
    tradeoffs: string;
    result: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    client?: string;
    location?: string;
    highlights: string[];
    technologies: string[];
    caseStudy?: CaseStudy;
}

export interface Education {
    institution: string;
    degree: string;
    field: string;
    period: string;
}

export interface SkillGroup {
    title: string;
    skills: string[];
}

export interface SocialLink {
    name: string;
    url: string;
    icon: "github" | "linkedin" | "mail";
    external: boolean;
}

/** A metric shown in the Enterprise Impact strip. */
export interface Metric {
    /** Compact visual label, e.g. "~45 → ~80". */
    metric: string;
    label: string;
    /** Spelled-out equivalent announced to assistive technology. */
    accessibleLabel: string;
}

export interface ArchitecturePillar {
    title: string;
    description: string;
    skills: string[];
}

export interface Project {
    title: string;
    /** Employer or client the work was delivered for. */
    context?: string;
    description: string;
    technologies: string[];
}

export interface Principle {
    title: string;
    description: string;
}

export interface ResumeAsset {
    /** Public path served by Next.js. */
    href: string;
    /** Value for the anchor's download attribute. */
    fileName: string;
    label: string;
    meta: string;
}

export interface SiteConfig {
    name: string;
    title: string;
    headline: string;
    description: string;
    url: string;
    ogImage: string;
    location: string;
    availability: string;
    availabilityShort: string;
    email: string;
    links: SocialLink[];
}
