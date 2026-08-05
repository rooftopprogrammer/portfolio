import type {
    ArchitecturePillar,
    Education,
    Experience,
    Metric,
    Principle,
    Project,
    ResumeAsset,
    SiteConfig,
    SkillGroup,
} from "@/types";

/**
 * Single source of truth for every user-facing claim on the site.
 *
 * Hero, experience, projects, skills, SEO metadata, JSON-LD and the contact
 * section all read from this file so employer names, dates and metrics cannot
 * drift apart. Nothing here may be changed without a verified source.
 */

export const EMAIL = "raviknersu96@gmail.com";

export const GITHUB_URL = "https://github.com/ravikumarnersu";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ravi-kumar-nersu-8a00b3163";

export const resume: ResumeAsset = {
    href: "/Ravi-Kumar-Nersu-Senior-Software-Engineer-Resume.pdf",
    fileName: "Ravi-Kumar-Nersu-Senior-Software-Engineer-Resume.pdf",
    label: "Download Resume",
    meta: "ATS-friendly PDF • Updated Aug 2026",
};

export const siteConfig: SiteConfig = {
    name: "Ravi Kumar Nersu",
    title: "Senior Software Engineer | Frontend-Focused Full Stack",
    headline: "React.js • Next.js • TypeScript • Node.js • BFF • AWS • Web Performance",
    description:
        "Senior Software Engineer in Hyderabad with 8+ years in React, Next.js, TypeScript, Node.js, AWS, BFF architecture and web performance.",
    /**
     * Canonical origin, without a trailing slash.
     *
     * Next normalises metadata URLs against `trailingSlash: false`, so this is
     * the exact string emitted for <link rel="canonical"> and og:url. The
     * sitemap and JSON-LD reuse it so all four agree byte for byte.
     */
    url: "https://www.ravikumarnersu.com",
    ogImage: "/og-image.png",
    location: "Hyderabad, Telangana, India",
    availability: "Available to join within 15 days",
    availabilityShort: "Available within 15 days",
    email: EMAIL,
    links: [
        { name: "GitHub", url: GITHUB_URL, icon: "github", external: true },
        { name: "LinkedIn", url: LINKEDIN_URL, icon: "linkedin", external: true },
        { name: "Email", url: `mailto:${EMAIL}`, icon: "mail", external: false },
    ],
};

/** Long-form positioning statement used in the hero and the About-style copy. */
export const summary =
    "Senior Software Engineer with 8+ years of experience building accessible, production-grade web platforms with React.js, Next.js, TypeScript and Node.js. Experienced in frontend architecture, Backend-for-Frontend services, AWS, automated testing, web performance and multi-market delivery across 15+ country markets.";

export const heroStatus =
    "Open to Senior Software Engineer and frontend-focused full-stack roles";

export const heroBadges = [
    "8+ Years",
    "15+ Markets",
    "React / Next.js",
    "Node.js / BFF",
    "AWS",
];

/** Employers and clients, in the wording approved for public display. */
export const employers = [
    "LTIMindtree",
    "Avis Budget Group",
    "MSRCosmos LLC",
    "TM International Logistics Limited",
    "Allmvr",
    "WhatsScore Pvt Ltd",
];

/** Verified delivery metrics only. */
export const metrics: Metric[] = [
    {
        metric: "15+",
        label: "Country Markets",
        accessibleLabel: "More than 15 country markets",
    },
    {
        metric: "~45 → ~80",
        label: "Lighthouse",
        accessibleLabel: "Lighthouse performance improved from approximately 45 to approximately 80",
    },
    {
        metric: "~6s → ~3s",
        label: "Page Load",
        accessibleLabel: "Page load improved from approximately 6 seconds to approximately 3 seconds",
    },
    {
        metric: "~4.5s → ~2.2s",
        label: "LCP",
        accessibleLabel:
            "Largest Contentful Paint improved from approximately 4.5 seconds to approximately 2.2 seconds",
    },
    {
        metric: "~1.2 MB → ~800 KB",
        label: "Initial JavaScript",
        accessibleLabel:
            "Initial JavaScript payload reduced from approximately 1.2 megabytes to approximately 800 kilobytes",
    },
    {
        metric: "2",
        label: "Junior Engineers Mentored",
        accessibleLabel: "Mentored 2 junior engineers",
    },
];

export const architecturePillars: ArchitecturePillar[] = [
    {
        title: "Microfrontends and Monorepo",
        description:
            "Built React.js and Next.js experiences within a microfrontend architecture and monorepo, using reusable components and shared engineering standards across multiple market journeys.",
        skills: ["React.js", "Next.js", "TypeScript", "Microfrontends", "Monorepo"],
    },
    {
        title: "Rendering and Web Performance",
        description:
            "Applied SSR, SSG, route-level code splitting, image optimization and bundle analysis to improve SEO, Core Web Vitals and delivery performance.",
        skills: ["SSR", "SSG", "Core Web Vitals", "Accessibility", "Webpack", "Vite", "Babel"],
    },
    {
        title: "Backend-for-Frontend and APIs",
        description:
            "Built Node.js, NestJS and Express.js BFF services with REST and GraphQL integrations, validation, resilient error handling and secure frontend-facing API boundaries.",
        skills: ["Node.js", "NestJS", "Express.js", "BFF", "REST APIs", "GraphQL"],
    },
    {
        title: "Data and Security",
        description:
            "Implemented PostgreSQL, MongoDB and DynamoDB data integrations with ORM-based database modelling, OAuth 2.0, OpenID Connect, JWT and role-based access control.",
        skills: ["PostgreSQL", "MongoDB", "DynamoDB", "ORM", "OAuth 2.0", "OIDC", "JWT", "RBAC"],
    },
    {
        title: "AWS and Reliability",
        description:
            "Worked with AWS EC2, Lambda, API Gateway, IAM, S3, Elastic Beanstalk, RDS, CloudFront and CloudWatch, including serverless workloads, cross-account deployments, monitoring, production debugging and incident resolution.",
        skills: [
            "AWS",
            "Serverless",
            "CloudWatch",
            "Observability",
            "Monitoring",
            "Incident Resolution",
        ],
    },
    {
        title: "Quality and Delivery",
        description:
            "Used Jest, React Testing Library, Playwright and Cypress with CI/CD pipelines, Docker and Kubernetes. Delivered through Agile/Scrum using Jira, Git and Bitbucket.",
        skills: [
            "Jest",
            "React Testing Library",
            "Playwright",
            "Cypress",
            "CI/CD",
            "Docker",
            "Kubernetes",
        ],
    },
];

export const experiences: Experience[] = [
    {
        company: "LTIMindtree",
        role: "Senior Frontend Engineer (Specialist Software Engineer) — Client: Avis Budget Group",
        period: "Jan 2024 – Apr 2026",
        location: "Hyderabad, Telangana, India",
        highlights: [
            "Owned frontend architecture and full-stack delivery for Avis Budget Group booking, search, forms, dashboards and CMS-driven experiences across 15+ country markets using React.js, Next.js, TypeScript and JavaScript within a microfrontend architecture and monorepo.",
            "Improved Lighthouse performance from approximately 45 to 80, page-load time from approximately 6 seconds to 3 seconds, LCP from approximately 4.5 seconds to 2.2 seconds and initial JavaScript payload from approximately 1.2 MB to 800 KB.",
            "Built reusable accessible components, Node.js, NestJS and Express.js BFF services, REST and GraphQL APIs, and PostgreSQL, MongoDB and DynamoDB integrations.",
            "Worked with AWS EC2, Lambda, API Gateway, IAM, S3, Elastic Beanstalk, RDS, CloudFront and CloudWatch, automated testing, CI/CD, production debugging, observability, monitoring and incident resolution.",
            "Mentored two junior engineers and delivered through Agile/Scrum using Jira, Git and Bitbucket.",
        ],
        technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Microfrontends",
            "Monorepo",
            "Node.js",
            "NestJS",
            "Express.js",
            "GraphQL",
            "PostgreSQL",
            "MongoDB",
            "DynamoDB",
            "AWS",
            "CI/CD",
        ],
    },
    {
        company: "MSRCosmos LLC",
        role: "Senior Software Engineer",
        period: "Aug 2020 – Jan 2024",
        client: "TM International Logistics Limited (TMILL)",
        location: "Hyderabad, Telangana, India",
        highlights: [
            "Delivered a business-critical Railways application for TMILL, including a responsive 10-step Material UI workflow to create, edit, review and approve logistics jobs within a monolithic application architecture.",
            "Built accessible React.js and TypeScript interfaces, reusable components, Redux and Redux Thunk state flows, and Node.js and Express.js services with REST APIs.",
            "Implemented OAuth 2.0, OpenID Connect, JWT/RBAC, ORM-based data access and database modelling across PostgreSQL, MongoDB, MySQL and DynamoDB.",
            "Worked with AWS EC2, Lambda, API Gateway, IAM, S3, Elastic Beanstalk, RDS, CloudFront and CloudWatch, plus Docker, Kubernetes and CI/CD.",
            "Used Jest, Playwright and Cypress and supported production debugging, observability, monitoring, incident resolution and Agile/Scrum delivery.",
        ],
        technologies: [
            "React.js",
            "TypeScript",
            "Material UI",
            "Redux",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "DynamoDB",
            "AWS",
            "Docker",
            "Kubernetes",
        ],
    },
    {
        company: "Allmvr",
        role: "Frontend Web Developer",
        period: "Aug 2019 – Aug 2020",
        location: "Vijayawada, India",
        highlights: [
            "Built customer-facing and administrative React.js applications for a local-commerce platform connecting customers with nearby stores and restaurants.",
            "Developed responsive React and TypeScript components using JavaScript, React Router, Redux, Redux Toolkit, Redux Thunk, Material UI, HTML5 and CSS3.",
            "Implemented registration and authentication workflows, store administration, product-catalog CRUD, order-history capabilities and REST API integrations.",
            "Delivered through Agile/Scrum using Jira, Git and Bitbucket with SQL/MySQL-backed application data.",
        ],
        technologies: [
            "React.js",
            "TypeScript",
            "Redux Toolkit",
            "Material UI",
            "REST APIs",
            "MySQL",
        ],
    },
    {
        company: "WhatsScore Pvt Ltd",
        role: "Software Engineer",
        period: "Jun 2017 – Jul 2019",
        location: "Hyderabad, Telangana, India",
        highlights: [
            "Built sports web and mobile features using React.js, JavaScript, React Router, Redux, Redux Toolkit, Redux Thunk, HTML5, CSS3 and SASS.",
            "Developed reusable components and centralized state flows for tournament configuration, participant registration, scorer assignment, matches, rounds, draws, player dashboards and tournament-information management.",
            "Delivered maintainable frontend functionality through Agile/Scrum using Jira, Git and Bitbucket with SQL-backed application data.",
        ],
        technologies: ["React.js", "JavaScript", "Redux Toolkit", "HTML5", "CSS3", "SASS", "SQL"],
    },
];

export const projects: Project[] = [
    {
        title: "Avis Budget Group Multi-Market Digital Platform",
        context: "LTIMindtree · Client: Avis Budget Group",
        description:
            "Delivered booking, search, forms, dashboards and CMS-driven experiences across 15+ country markets using React.js, Next.js, TypeScript, microfrontends and a monorepo. Built BFF/API integrations, AWS workloads, automated tests and measurable web-performance improvements.",
        technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Node.js",
            "NestJS",
            "Express.js",
            "BFF",
            "PostgreSQL",
            "MongoDB",
            "DynamoDB",
            "AWS",
            "Jest",
            "Playwright",
            "Cypress",
        ],
    },
    {
        title: "TMILL Railways and Logistics Workflow",
        context: "MSRCosmos LLC · Client: TM International Logistics Limited",
        description:
            "Delivered a business-critical Railways workflow for TM International Logistics Limited, including a responsive 10-step Material UI process for creating, editing, reviewing and approving logistics jobs within a monolithic application.",
        technologies: [
            "React.js",
            "TypeScript",
            "Material UI",
            "Redux",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "AWS",
            "Docker",
            "Kubernetes",
        ],
    },
    {
        title: "Allmvr Local Commerce Customer and Admin Platform",
        context: "Allmvr",
        description:
            "Built customer and administration applications for a local-commerce platform connecting customers with nearby stores and restaurants, including registration, authentication, catalog management and order-history workflows.",
        technologies: [
            "React.js",
            "TypeScript",
            "Redux Toolkit",
            "Material UI",
            "REST APIs",
            "SQL",
            "MySQL",
        ],
    },
    {
        title: "WhatsScore Sports Tournament Platform",
        context: "WhatsScore Pvt Ltd",
        description:
            "Built React.js web and mobile features for tournament configuration, participant registration, scoring, matches, rounds, draws, player dashboards and tournament-information management.",
        technologies: [
            "React.js",
            "JavaScript",
            "Redux Toolkit",
            "HTML5",
            "CSS3",
            "SASS",
            "SQL",
        ],
    },
];

/** Personal build, kept clearly separated from client production experience. */
export const independentProject = {
    title: "AI Hub Platform",
    disclaimer: "Independent enterprise workflow POC — not client production experience",
    description:
        "A self-directed enterprise workflow proof of concept covering structured demand intake, governance, discovery and approval experiences.",
    capabilities: [
        "Demand intake forms",
        "Governance dashboards",
        "AI use-case catalogue",
        "Role-based access screens",
        "Approval workflow patterns",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
};

export const skillGroups: SkillGroup[] = [
    {
        title: "Frontend Architecture",
        skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Redux Toolkit",
            "Redux Thunk",
            "TanStack Query",
            "Material UI",
            "Storybook",
            "HTML5",
            "CSS3",
            "Responsive Design",
            "Accessibility",
            "Core Web Vitals",
            "Microfrontends",
            "Monorepo",
        ],
    },
    {
        title: "Backend and APIs",
        skills: [
            "Node.js",
            "NestJS",
            "Express.js",
            "Backend-for-Frontend",
            "MERN",
            "REST APIs",
            "GraphQL",
            "Microservices",
            "Monolithic Architecture",
        ],
    },
    {
        title: "Data and Security",
        skills: [
            "PostgreSQL",
            "MongoDB",
            "DynamoDB",
            "MySQL",
            "ORM",
            "Database Modelling",
            "OAuth 2.0",
            "OpenID Connect",
            "JWT",
            "RBAC",
        ],
    },
    {
        title: "AWS and Infrastructure",
        skills: [
            "AWS EC2",
            "Lambda",
            "API Gateway",
            "IAM",
            "S3",
            "Elastic Beanstalk",
            "RDS",
            "CloudFront",
            "CloudWatch",
            "Serverless Architecture",
            "Cross-Account Deployments",
            "Docker",
            "Kubernetes",
        ],
    },
    {
        title: "Testing and Build Tooling",
        skills: [
            "Jest",
            "React Testing Library",
            "Playwright",
            "Cypress",
            "Webpack",
            "Vite",
            "Babel",
            "GitHub Actions",
            "CI/CD",
        ],
    },
    {
        title: "Engineering Delivery",
        skills: [
            "Production Debugging",
            "Observability",
            "Monitoring",
            "Incident Resolution",
            "Web Performance",
            "Agile",
            "Scrum",
            "Jira",
            "Git",
            "Bitbucket",
            "Figma",
            "Mentoring",
        ],
    },
];

/** Secondary tooling. Deliberately kept out of the primary positioning. */
export const developmentWorkflow = {
    title: "Development Workflow",
    note: "AI-assisted tooling supports code exploration, refactoring and documentation, with every suggestion manually reviewed.",
    skills: ["Claude Code", "Claude for VS Code", "GitHub Copilot"],
};

export const principles: Principle[] = [
    {
        title: "Performance and Accessibility",
        description:
            "Rendering strategy, code splitting and image optimization are measured against Core Web Vitals, and components are built to be keyboard and screen-reader accessible.",
    },
    {
        title: "Secure API Boundaries",
        description:
            "BFF services keep frontend-facing contracts narrow, with OAuth 2.0, OpenID Connect, JWT and role-based access control enforced at the boundary.",
    },
    {
        title: "Production Reliability",
        description:
            "Automated tests, CI/CD, observability and monitoring support production debugging and incident resolution after release, not just before it.",
    },
    {
        title: "Mentoring and Delivery",
        description:
            "Mentored two junior engineers and delivered through Agile/Scrum using Jira, Git and Bitbucket across multi-market release cycles.",
    },
];

export const education: Education[] = [
    {
        institution: "KL University",
        degree: "Bachelor of Technology",
        field: "Computer Science and Engineering",
        period: "2013 – 2017",
    },
];

export const navItems = [
    { name: "Architecture", href: "#architecture" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];
