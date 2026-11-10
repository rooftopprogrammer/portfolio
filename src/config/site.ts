import type {
    AiProject,
    Capability,
    Education,
    Experience,
    ImpactMetric,
    ResumeAsset,
    SiteConfig,
    SkillGroup,
    Stat,
} from "@/types";

/**
 * Single source of truth for every user-facing claim on the site.
 *
 * Every fact here comes from the résumé in public/ (the Nov 2026 full-stack
 * edition). Sections, SEO metadata and the Person JSON-LD all read from this
 * file, so change content here and nowhere else.
 */

export const EMAIL = "raviknersu96@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ravi-kumar-nersu-8a00b3163";

export const resume: ResumeAsset = {
    href: "/Ravi-Kumar-Nersu-Senior-Full-Stack-Engineer-Resume.pdf",
    fileName: "Ravi-Kumar-Nersu-Senior-Full-Stack-Engineer-Resume.pdf",
    label: "Download Resume",
    meta: "2-page PDF · Updated Nov 2026",
};

export const siteConfig: SiteConfig = {
    name: "Ravi Kumar Nersu",
    title: "Senior Full-Stack Software Engineer",
    headline: "React · Next.js · TypeScript · Node.js · Python · GenAI",
    description:
        "Senior Full-Stack Software Engineer in Hyderabad with 8+ years in React, Next.js and TypeScript, 5+ years full stack with Node.js/NestJS and Python, and 2+ years shipping production GenAI features.",
    seoTitle: "Ravi Kumar Nersu | Senior Full-Stack Engineer | React, Node.js & GenAI",
    url: "https://www.ravikumarnersu.com/",
    ogImage: "/og-image.png",
    location: "Hyderabad, India",
    availability: "Available to join within 15 days",
    email: EMAIL,
    links: [
        { name: "LinkedIn", url: LINKEDIN_URL, icon: "linkedin", external: true },
        { name: "Email", url: `mailto:${EMAIL}`, icon: "mail", external: false },
    ],
};

export const heroStatus = "Open to Senior Full-Stack & GenAI engineering roles";

/** The one-sentence pitch under the name. Words in `highlight` get the accent. */
export const heroPitch = {
    before: "I build fast",
    highlight1: "React & Next.js products",
    middle: ", the Node.js and Python services behind them, and",
    highlight2: "GenAI features that cite their sources.",
};

export const summary =
    "Senior Software Engineer with 8+ years building React, Next.js and TypeScript applications, including 5+ years of full-stack work with Node.js/NestJS and Python and 2+ years shipping production GenAI features (RAG, tool-calling agents). Strongest in frontend performance, Backend-for-Frontend APIs, microfrontends and production ownership.";

export const heroFacts = [
    "8+ yrs React · Next.js · TypeScript",
    "5+ yrs full stack · Node.js · Python",
    "2+ yrs production GenAI",
];

/** Employers and clients, in the wording used on the résumé. */
export const employers = [
    "LTIMindtree",
    "Avis Budget Group",
    "Ingram Micro",
    "MSRCosmos",
    "TM International Logistics",
    "Allmvr",
    "WhatsScore",
];

export const impact = {
    kicker: "Avis Budget Group",
    title: "Halved page load on a car-rental platform used in 15+ countries.",
    how: ["Code splitting", "Lazy loading", "Asset optimisation", "Rendering improvements"],
    metrics: [
        {
            label: "Page load",
            before: 6,
            after: 3,
            beforeText: "~6s",
            afterText: "~3s",
            better: "lower",
            accessibleLabel: "Page load time cut from about 6 seconds to about 3 seconds",
        },
        {
            label: "Largest Contentful Paint",
            before: 4.5,
            after: 2.2,
            beforeText: "~4.5s",
            afterText: "2.2s",
            better: "lower",
            accessibleLabel: "Largest Contentful Paint cut from about 4.5 seconds to 2.2 seconds",
        },
        {
            label: "Lighthouse performance",
            before: 45,
            after: 80,
            beforeText: "~45",
            afterText: "~80",
            better: "higher",
            accessibleLabel: "Lighthouse performance score raised from about 45 to about 80",
        },
        {
            label: "Initial JavaScript",
            before: 1200,
            after: 800,
            beforeText: "~1.2 MB",
            afterText: "~800 KB",
            better: "lower",
            accessibleLabel: "Initial JavaScript cut from about 1.2 megabytes to about 800 kilobytes",
        },
    ] satisfies ImpactMetric[],
};

export const stats: Stat[] = [
    { value: "8+", label: "years building with React" },
    { value: "15+", label: "country markets served" },
    { value: "2+", label: "years of GenAI in production" },
    { value: "2", label: "junior engineers mentored" },
];

export const capabilities: Capability[] = [
    {
        kicker: "01 · Frontend",
        title: "Frontend architecture & performance",
        description:
            "Owned the frontend architecture of a 15-market platform, from microfrontends and design systems to Core Web Vitals.",
        points: [
            "Microfrontends and design systems",
            "SSR, code splitting, lazy loading",
            "Accessibility and Core Web Vitals",
        ],
        tools: ["React", "Next.js", "TypeScript", "AEM Headless", "Storybook"],
    },
    {
        kicker: "02 · Backend",
        title: "APIs & Backend-for-Frontend",
        description:
            "Node.js/NestJS and Python services that aggregate REST and GraphQL APIs behind one clean, secure contract.",
        points: [
            "DTO validation, OAuth 2.0, JWT, RBAC",
            "Timeouts, retries and fallbacks",
            "Caching and SQL indexing",
        ],
        tools: ["Node.js", "NestJS", "Python", "FastAPI", "PostgreSQL"],
    },
    {
        kicker: "03 · GenAI",
        title: "GenAI features & agents",
        description:
            "RAG answers linked to their sources, and tool-calling agents with limits, fallbacks and a human in the loop.",
        points: [
            "Hybrid and vector search",
            "LangGraph, MCP and tool calling",
            "Evaluation, tracing and injection safeguards",
        ],
        tools: ["Azure OpenAI", "Azure AI Search", "LangGraph", "MCP", "Embeddings"],
    },
];

export const experiences: Experience[] = [
    {
        company: "LTIMindtree",
        role: "Specialist Software Engineer",
        period: "Jan 2024 – Apr 2026",
        location: "Hyderabad, India",
        engagements: [
            {
                client: "Avis Budget Group",
                role: "Senior Full-Stack Engineer",
                period: "Mar 2025 – Apr 2026",
                summary:
                    "Owned frontend architecture for an AEM Headless car-rental platform across 15+ international markets.",
                highlights: [
                    "Developed scalable booking, vehicle search, reservation and CMS-driven experiences using React, Next.js, TypeScript and microfrontends.",
                    "Cut page load from ~6s to ~3s and LCP from ~4.5s to 2.2s, raised Lighthouse performance from ~45 to ~80 and trimmed initial JavaScript from ~1.2 MB to ~800 KB through code splitting, lazy loading, asset optimisation and rendering improvements.",
                    "Designed Node.js/NestJS Backend-for-Frontend services that aggregate downstream REST and GraphQL APIs, with DTO validation, OAuth 2.0/JWT authorization and consistent response handling.",
                    "Improved reliability of booking services with request timeouts, retry strategies and fallbacks, and supported production monitoring, debugging and incident resolution on AWS.",
                    "Added caching for frequently accessed reference data, maintained automated tests and CI/CD, reviewed code and mentored 2 junior engineers.",
                ],
                technologies: ["React", "Next.js", "TypeScript", "Microfrontends", "AEM Headless", "NestJS", "GraphQL", "AWS"],
            },
            {
                client: "Ingram Micro",
                role: "Full-Stack Developer",
                period: "Jan 2024 – Feb 2025",
                summary:
                    "Built full-stack and GenAI features for the Xvantage B2B digital-commerce platform used by resellers.",
                highlights: [
                    "Developed reseller product-discovery and business-workflow features with React, Next.js, TypeScript, Node.js, NestJS, Python and PostgreSQL.",
                    "Built Retrieval-Augmented Generation for product-document help, using Python services, embeddings and vector search to give source-grounded answers.",
                    "Developed LLM agent workflows with tool calling into internal APIs for availability, pricing and orders, with execution limits, error handling and human-support fallbacks.",
                    "Designed the contract between Python AI services and NestJS backends: REST, streamed responses, timeouts, retries and standard errors for the React apps.",
                    "Kept answers grounded: live pricing and inventory come from PostgreSQL rather than the model, document answers link to their sources, and responses are checked against test cases.",
                ],
                technologies: ["React", "Next.js", "NestJS", "Python", "RAG", "Embeddings", "Tool calling", "PostgreSQL"],
            },
        ],
    },
    {
        company: "MSRCosmos LLC",
        role: "Senior Software Engineer",
        period: "Aug 2020 – Jan 2024",
        location: "Hyderabad, India",
        client: "TM International Logistics Limited (TMILL)",
        summary:
            "Delivered a business-critical railways logistics application, end to end.",
        highlights: [
            "Built a responsive 10-step Material UI workflow to create, edit, review and approve logistics jobs.",
            "Built Node.js/Express.js and Python REST APIs secured with OAuth 2.0/OpenID Connect and JWT-based RBAC, with ORM data access over PostgreSQL and MySQL.",
            "Developed accessible React/TypeScript interfaces and deployed services on AWS (EC2, Elastic Beanstalk, RDS, S3) with Docker, Kubernetes and CI/CD.",
        ],
        technologies: ["React", "TypeScript", "Material UI", "Node.js", "Python", "PostgreSQL", "AWS", "Kubernetes"],
    },
    {
        company: "Allmvr",
        role: "Frontend Web Developer",
        period: "Aug 2019 – Aug 2020",
        location: "Vijayawada, India",
        summary:
            "Customer and admin React apps for a local-commerce platform connecting people with nearby stores and restaurants.",
        highlights: [
            "Built responsive React/TypeScript components, multilevel authentication, store administration, catalogue CRUD and order history over REST APIs backed by MySQL.",
        ],
        technologies: ["React", "TypeScript", "REST APIs", "MySQL"],
    },
    {
        company: "WhatsScore Pvt Ltd",
        role: "Software Engineer",
        period: "Jun 2017 – Jul 2019",
        location: "Hyderabad, India",
        summary:
            "Sports-tournament product: setup, registration, scorer assignment, matches, draws and player dashboards.",
        highlights: [
            "Built reusable React, Redux, React Router and SASS features across the tournament flow.",
        ],
        technologies: ["React", "Redux", "React Router", "SASS"],
    },
];

/** Independent builds from the résumé, kept clearly apart from client work. */
export const aiProjects: AiProject[] = [
    {
        name: "FinDocs",
        tagline: "Financial-document Q&A with page-level citations",
        year: "2026",
        note: "Independent project",
        highlights: [
            "Streaming chat over SEC 10-K filings and fund documents. Every answer links to its source page and paragraph, and it says “not found” when the evidence isn’t there.",
            "FastAPI backend with an event-driven ingestion pipeline and hybrid keyword, semantic and vector retrieval; the model can be switched between Azure OpenAI and Claude.",
            "Evaluation harness of ~50 known-answer questions tracking correctness, citation support, latency and cost per query.",
        ],
        stack: ["Next.js", "TypeScript", "Python", "FastAPI", "Azure OpenAI", "Azure AI Search", "Azure Functions", "Container Apps", "Entra ID"],
    },
    {
        name: "ClaimPilot",
        tagline: "Human-approved healthcare claims agent",
        year: "2026",
        note: "Independent project · synthetic data",
        highlights: [
            "LangGraph agent that extracts claim fields, retrieves coverage policy through FinDocs, checks a synthetic member database and recommends approve, deny or needs-more-information with reasons and a draft letter.",
            "Tools exposed through a Python MCP server with step limits, retries, decision logs and personal-data redaction; background work runs on Azure Service Bus.",
            "A person must approve or edit every recommendation before anything happens. Measured on ~30 synthetic cases for decision accuracy and tool choice.",
        ],
        stack: ["React", "TypeScript", "Python", "LangGraph", "MCP", "Azure Service Bus", "PostgreSQL", "Cosmos DB"],
    },
];

export const skillGroups: SkillGroup[] = [
    {
        title: "Frontend",
        skills: [
            "React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "TanStack Query",
            "Material UI", "Storybook", "HTML5", "CSS3", "Microfrontends", "Design Systems",
            "Accessibility", "Core Web Vitals", "AEM Headless",
        ],
    },
    {
        title: "Backend & Data",
        skills: [
            "Node.js", "NestJS", "Express.js", "Python", "asyncio", "FastAPI", "Pydantic", "REST", "GraphQL",
            "Backend-for-Frontend", "Microservices", "Caching", "OAuth 2.0", "OpenID Connect", "JWT", "RBAC",
            "PostgreSQL", "MySQL", "SQL Indexing",
        ],
    },
    {
        title: "GenAI & Agents",
        skills: [
            "LLMs", "RAG", "Embeddings", "Hybrid & Vector Search", "Prompt Engineering", "LangGraph", "MCP",
            "Tool Calling", "Human-in-the-Loop", "RAG Evaluation", "LLM Evaluation", "LLM Tracing",
            "Prompt-Injection Safeguards",
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: [
            "AWS EC2", "Elastic Beanstalk", "RDS", "S3", "Azure OpenAI", "Azure AI Search", "Azure Functions",
            "Container Apps", "Service Bus", "Entra ID", "Application Insights", "Docker", "Kubernetes",
            "GitHub Actions", "Azure DevOps", "CI/CD",
        ],
    },
    {
        title: "Testing & Tooling",
        skills: ["Jest", "React Testing Library", "pytest", "Webpack", "Vite", "Git", "Jira", "Agile/Scrum"],
    },
];

export const education: Education = {
    institution: "KL University",
    degree: "B.Tech, Computer Science and Engineering",
    period: "2013 – 2017",
};

export const navItems = [
    { name: "Impact", href: "#impact" },
    { name: "Experience", href: "#experience" },
    { name: "AI Projects", href: "#ai-projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];
