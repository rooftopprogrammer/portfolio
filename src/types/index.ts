export interface Project {
    slug: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    date: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    readingTime?: string;
    featured?: boolean;
}

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
    description: string;
    technologies: string[];
    logo?: string;
    caseStudy?: CaseStudy;
}

export interface Education {
    institution: string;
    degree: string;
    field: string;
    period: string;
    grade?: string;
    logo?: string;
}

export interface Skill {
    name: string;
    level: "beginner" | "intermediate" | "advanced" | "expert";
    category: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface SiteConfig {
    name: string;
    title: string;
    headline?: string;
    description: string;
    url: string;
    ogImage: string;
    links: SocialLink[];
}
