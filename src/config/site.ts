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
    meta: "One-page ATS-friendly PDF • Updated Nov 2026",
};

export const siteConfig: SiteConfig = {
    name: "Ravi Kumar Nersu",
    title: "Senior Software Engineer | Frontend-Focused Full Stack",
    headline: "React.js • Next.js • TypeScript • Node.js • BFF • AWS • Web Performance",
    description:
        "Senior Software Engineer in Hyderabad with 8+ years in React, Next.js, TypeScript, Node.js, AWS, BFF architecture and web performance.",
    /**
     * Document / Open Graph / Twitter title. Kept short so it is not truncated
     * in search results or social cards. This is not the visible hero heading —
     * that stays `title` above.
     */
    seoTitle: "Ravi Kumar Nersu | Senior Software Engineer | React & Node.js",
    /**
     * Canonical homepage URL, with the trailing slash.
     *
     * Next strips trailing slashes when it resolves `alternates.canonical`
     * under `trailingSlash: false`, so layout.tsx emits the canonical <link>
     * by hand to keep this exact string. The sitemap, og:url and JSON-LD all
     * reuse it, so every surface agrees byte for byte.
     */
    url: "https://www.ravikumarnersu.com/",
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

/**
 * Six architecture themes. Descriptions are held to ~25-35 words and each card
 * carries only 4-6 representative chips — the full technology inventory lives
 * in `skillGroups` below, so repeating it here adds length without adding
 * information.
 */
export const architecturePillars: ArchitecturePillar[] = [
    {
        title: "Microfrontends and Monorepo",
        description:
            "Built reusable React.js and Next.js experiences within a microfrontend architecture and monorepo, supporting shared engineering standards and consistent customer journeys across multiple markets.",
        skills: ["React.js", "Next.js", "TypeScript", "Microfrontends", "Monorepo"],
    },
    {
        title: "Rendering and Web Performance",
        description:
            "Applied SSR, SSG, code splitting, image optimization and bundle analysis to improve SEO, accessibility, Core Web Vitals and frontend delivery performance.",
        skills: ["SSR", "SSG", "Core Web Vitals", "Accessibility", "Webpack", "Vite"],
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
            "Integrated relational and NoSQL data through ORM-based models, with OAuth 2.0, OpenID Connect, JWT and role-based access control protecting application workflows.",
        skills: ["PostgreSQL", "MongoDB", "DynamoDB", "OAuth 2.0", "JWT", "RBAC"],
    },
    {
        title: "AWS and Reliability",
        description:
            "Delivered AWS-backed applications using compute, serverless, API, storage, database, CDN and monitoring services, including observability, production debugging and incident resolution.",
        skills: ["AWS", "Serverless", "CloudWatch", "Observability", "Incident Resolution"],
    },
    {
        title: "Quality and Delivery",
        description:
            "Used automated testing, CI/CD, containers and Agile/Scrum delivery practices to maintain quality across multi-developer production releases.",
        skills: ["Jest", "Playwright", "Cypress", "CI/CD", "Docker", "Kubernetes"],
    },
];

export const experiences: Experience[] = [
    {
        company: "LTIMindtree",
        role: "Senior Frontend Engineer (Specialist Software Engineer) — Client: Avis Budget Group",
        period: "Jan 2024 – Apr 2026",
        location: "Hyderabad, Telangana, India",
        highlights: [
            "Owned frontend architecture and full-stack delivery for booking, search, forms, dashboards and CMS-driven rental experiences across 15+ country markets, built with React.js, Next.js and TypeScript in a microfrontend monorepo.",
            "Raised Lighthouse performance from ~45 to ~80 and cut page load from ~6s to ~3s, LCP from ~4.5s to ~2.2s and initial JavaScript from ~1.2 MB to ~800 KB through rendering changes, route-level code splitting, image optimisation and bundle analysis.",
            "Built reusable, accessible React components and design-system patterns from Figma; maintained Webpack, Vite and Babel builds.",
            "Developed Node.js and NestJS Backend-for-Frontend services and REST/GraphQL APIs secured with OAuth 2.0/OpenID Connect, JWT and RBAC, backed by PostgreSQL, MongoDB and DynamoDB.",
            "Deployed and supported serverless and cross-account AWS workloads (Lambda, API Gateway, S3, CloudFront, CloudWatch) and handled production debugging, monitoring and incident resolution.",
            "Added unit, integration and E2E coverage with Jest, React Testing Library, Playwright and Cypress in GitHub Actions CI/CD; mentored two junior engineers and reviewed code.",
        ],
        technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Microfrontends",
            "Monorepo",
            "Node.js",
            "NestJS",
            "GraphQL",
            "PostgreSQL",
            "MongoDB",
            "DynamoDB",
            "AWS",
            "Playwright",
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
            "Delivered a business-critical Railways application for TMILL, including a responsive 10-step Material UI workflow to create, edit, review and approve logistics jobs.",
            "Built accessible React.js and TypeScript interfaces with reusable components and Redux/Redux Thunk state flows from Figma designs.",
            "Developed Node.js and Express.js REST APIs with OAuth 2.0/OpenID Connect and JWT/RBAC, using ORM-based data access over PostgreSQL and MySQL.",
            "Deployed services on AWS (EC2, Elastic Beanstalk, RDS, S3) with Docker, Kubernetes and CI/CD; wrote automated tests with Jest, Playwright and Cypress.",
        ],
        technologies: [
            "React.js",
            "TypeScript",
            "Material UI",
            "Redux",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MySQL",
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
            "Built customer-facing and admin React.js applications for a local-commerce platform connecting customers with nearby stores and restaurants.",
            "Developed responsive React and TypeScript components with React Router, Redux Toolkit and Material UI, including multi-level registration and authentication flows.",
            "Delivered store administration, catalogue CRUD and order history over REST APIs backed by MySQL.",
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
            "Built sports-tournament web and mobile features with React.js, JavaScript, Redux, React Router and SASS.",
            "Developed reusable components and Redux state for tournament setup, registration, scorer assignment, matches, draws and player dashboards.",
        ],
        technologies: ["React.js", "JavaScript", "Redux", "React Router", "SASS"],
    },
];

/**
 * Case studies of client work. Experience above already lists every job, so
 * these tell the story of the two biggest deliveries instead of repeating it.
 */
export const projects: Project[] = [
    {
        title: "Halving page load on a 15-market rental platform",
        context: "LTIMindtree · Client: Avis Budget Group",
        challenge:
            "The customer-facing rental platform, shared across 15+ country markets, scored around 45 on Lighthouse, took about 6 seconds to load and shipped roughly 1.2 MB of initial JavaScript.",
        approach:
            "Reworked rendering, added route-level code splitting, optimised images and used bundle analysis to cut what each route loaded, inside a React.js and Next.js microfrontend monorepo.",
        outcome:
            "Lighthouse ~45 → ~80, page load ~6s → ~3s, LCP ~4.5s → ~2.2s and initial JavaScript ~1.2 MB → ~800 KB.",
        technologies: ["React.js", "Next.js", "TypeScript", "Microfrontends", "Core Web Vitals", "Webpack", "Vite"],
    },
    {
        title: "A guided approval workflow for railway logistics",
        context: "MSRCosmos LLC · Client: TM International Logistics Limited",
        challenge:
            "TMILL's business-critical Railways application needed one place to create, edit, review and approve logistics jobs.",
        approach:
            "Built a responsive 10-step Material UI workflow in React.js and TypeScript with Redux state, backed by Node.js and Express.js REST APIs secured with OAuth 2.0/OpenID Connect and role-based access.",
        outcome:
            "Every logistics job moves through one guided flow from creation to approval, with each step open only to the roles allowed to act on it.",
        technologies: ["React.js", "TypeScript", "Material UI", "Redux", "Node.js", "Express.js", "PostgreSQL"],
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
