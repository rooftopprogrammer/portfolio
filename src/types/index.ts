export interface SocialLink {
    name: string;
    url: string;
    icon: "linkedin" | "mail";
    external: boolean;
}

/** A client engagement inside one employer, e.g. LTIMindtree → Avis Budget Group. */
export interface Engagement {
    client: string;
    role: string;
    period: string;
    /** One line that says what the engagement was, shown above the bullets. */
    summary: string;
    highlights: string[];
    technologies: string[];
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    /** Single-client roles name the client here. */
    client?: string;
    summary?: string;
    highlights?: string[];
    technologies?: string[];
    /** Employers that placed the work with several clients list them here. */
    engagements?: Engagement[];
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
}

export interface SkillGroup {
    title: string;
    skills: string[];
}

/** One before/after measurement from the Avis Budget Group performance work. */
export interface ImpactMetric {
    label: string;
    before: number;
    after: number;
    /** How the numbers are written, e.g. "~6s". */
    beforeText: string;
    afterText: string;
    /** "lower" when a smaller number is the improvement (load time, bytes). */
    better: "lower" | "higher";
    /** Spelled-out sentence for assistive technology. */
    accessibleLabel: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface Capability {
    title: string;
    kicker: string;
    description: string;
    points: string[];
    tools: string[];
}

export interface AiProject {
    name: string;
    tagline: string;
    year: string;
    note: string;
    highlights: string[];
    stack: string[];
}

export interface ResumeAsset {
    href: string;
    fileName: string;
    label: string;
    meta: string;
}

export interface SiteConfig {
    name: string;
    title: string;
    headline: string;
    description: string;
    seoTitle: string;
    /** Canonical homepage URL, including the trailing slash. */
    url: string;
    ogImage: string;
    location: string;
    availability: string;
    email: string;
    links: SocialLink[];
}
