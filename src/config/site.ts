import type { SiteConfig, Experience, Education, Skill } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Ravi Kumar Nersu",
  title: "Senior Frontend / Full-Stack Engineer",
  headline: "React.js • Next.js • TypeScript • Node.js / NestJS • AI-Assisted Engineering",
  description:
    "Senior Frontend / Full-Stack Engineer with 8.6 years of experience building production-grade web platforms across 15+ country markets with React, Next.js, TypeScript, and Node.js / NestJS.",
  url: "https://www.ravikumarnersu.com",
  ogImage: "/og-image.png",
  location: "Hyderabad, Telangana, India",
  locations: ["Hyderabad, Telangana, India"],
  links: [
    {
      name: "GitHub",
      url: "https://github.com/ravikumarnersu",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ravi-kumar-nersu-8a00b3163",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:raviknersu96@gmail.com",
      icon: "mail",
    },
    {
      name: "Phone",
      url: "tel:+919885957899",
      icon: "phone",
    },
  ],
};

export const experiences: Experience[] = [
  {
    company: "LTIMindtree",
    role: "Specialist Software Engineer - Frontend / Full-Stack Engineering",
    period: "Jan 2024 - Apr 2026",
    client: "Avis Budget Group",
    location: "Hyderabad, India",
    highlights: [
      "Owned frontend architecture for Avis digital platform surfaces across 15+ country markets, defining rendering strategy, route structure, API boundaries, reusable UI patterns, and caching approach with React, Next.js App Router, and Node.js / NestJS BFF services",
      "Implemented SSR, SSG, and route-level rendering decisions for customer-facing pages to improve SEO, load performance, and Core Web Vitals",
      "Implemented JWT/OAuth2 authentication and RBAC across the Next.js frontend and NestJS BFF, including protected routes, session handling, and role-gated UI",
      "Designed REST and GraphQL integrations through BFF services with validation, loading and error states, secure data handling, and graceful failure behavior",
      "Improved Lighthouse score from ~45 to ~80, page load from ~6s to ~3s, LCP from ~4.5s to ~2.2s, CLS from ~0.25 to ~0.05, and TBT from ~600ms to ~250ms",
      "Reduced initial JavaScript payload from ~1.2 MB to ~800 KB through route-level code splitting, image optimization, rendering improvements, and bundle analysis",
      "Built accessible React/TypeScript modules and AEM Headless CMS experiences, with Jest, React Testing Library, and integration tests for critical flows",
      "Containerized services with Docker, delivered through GitHub Actions CI/CD, mentored 2 developers, and reviewed PRs for 3 developers",
    ],
    technologies: [
      "React",
      "Next.js (App Router)",
      "NestJS",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Redis",
      "MongoDB",
      "Docker",
      "AWS",
      "CI/CD",
      "GraphQL",
      "JWT/OAuth2",
      "RBAC",
      "AEM Headless CMS",
    ],
    logo: "/logos/ltimindtree.png",
    caseStudy: {
      problem: "Multi-market customer journeys required consistent rendering, secure API access, and faster frontend delivery across complex platform integrations.",
      constraints: "Customer-facing experiences spanned 15+ country markets with market-specific content, API contracts, and release dependencies.",
      decision: "Used Next.js SSR/SSG, a clean NestJS BFF layer, JWT/OAuth2 with RBAC, and Redis-backed data flows while optimizing route and JavaScript delivery.",
      tradeoffs: "Added explicit service and rendering boundaries to improve maintainability, security, and performance across markets.",
      result: "Improved Lighthouse from ~45 to ~80, page load from ~6s to ~3s, LCP from ~4.5s to ~2.2s, and initial JavaScript from ~1.2 MB to ~800 KB.",
    },
  },
  {
    company: "MSR COSMOS IT LLP",
    role: "Senior Software Engineer",
    period: "Aug 2020 - Jan 2024",
    client: "TMILL / Tata NYK Logistics",
    location: "Hyderabad, India",
    highlights: [
      "Owned end-to-end delivery of logistics automation modules across Railways, SCM, and MLS business units — from React frontends to Node.js backend services and PostgreSQL/MySQL database design",
      "Built data-intensive dashboards for live tracking, geospatial visualization, and operational reporting using React, Next.js, Node.js, PostgreSQL, and Google Maps API",
      "Designed and integrated backend services, REST APIs, and PostgreSQL-backed workflows, including schema design, complex queries, indexing, transactions, and query optimization",
      "Improved workflow performance and maintainability through frontend optimization, reusable components, query tuning, accessibility improvements, and production debugging",
      "Worked directly with business stakeholders to clarify requirements, estimate delivery scope, and convert domain workflows into scalable technical solutions",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Google Maps API",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
    ],
    logo: "/logos/msr-cosmos.png",
  },
  {
    company: "Allmvr Projects Pvt. Ltd",
    role: "Front-End Developer",
    period: "Jun 2019 - Aug 2020",
    location: "Vijayawada, India",
    highlights: [
      "Built customer-facing and admin web applications for a multi-vendor retail delivery platform, including onboarding, ordering, payments, dashboards, and real-time location tracking flows",
      "Converted Figma designs into responsive React interfaces and integrated REST APIs for customer and admin workflows",
    ],
    technologies: ["React", "JavaScript", "REST APIs", "Responsive Design", "Figma"],
    logo: "/logos/allmvr.png",
  },
  {
    company: "Xelpro Software Solutions & Whatsscore Pvt. Ltd",
    role: "Software Developer",
    period: "Jun 2017 - Jun 2019",
    location: "Hyderabad, India",
    highlights: [
      "Developed web and mobile application modules for sports tournament and event management platforms, including authentication, registration, dashboards, and reusable UI modules",
      "Supported debugging, maintenance, and feature enhancements across multiple client-facing applications",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Responsive Design"],
    logo: "/logos/whatsscore.png",
  },
];

export const education: Education[] = [
  {
    institution: "KL University",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    period: "Jun 2013 - May 2017",
    logo: "/logos/kl-university.png",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: "expert", category: "Frontend" },
  { name: "Next.js (App Router, SSR/SSG/ISR)", level: "expert", category: "Frontend" },
  { name: "TypeScript", level: "expert", category: "Languages" },
  { name: "JavaScript (ES6+)", level: "advanced", category: "Languages" },
  { name: "Redux", level: "advanced", category: "Frontend" },
  { name: "Zustand", level: "advanced", category: "Frontend" },
  { name: "Tailwind CSS", level: "advanced", category: "Frontend" },
  { name: "Responsive Design", level: "expert", category: "Frontend" },
  { name: "Accessibility (WCAG)", level: "advanced", category: "Frontend" },
  { name: "Core Web Vitals", level: "advanced", category: "Frontend" },

  // Backend & APIs
  { name: "Node.js", level: "advanced", category: "Backend" },
  { name: "NestJS", level: "advanced", category: "Backend" },
  { name: "Express.js", level: "advanced", category: "Backend" },
  { name: "REST APIs", level: "expert", category: "Backend" },
  { name: "GraphQL", level: "intermediate", category: "Backend" },
  { name: "Microservices", level: "advanced", category: "Backend" },
  { name: "BFF Pattern", level: "advanced", category: "Backend" },
  { name: "System Design", level: "advanced", category: "Backend" },
  { name: "JWT/OAuth2", level: "advanced", category: "Backend" },
  { name: "RBAC", level: "advanced", category: "Backend" },

  // Data & Infrastructure
  { name: "PostgreSQL", level: "advanced", category: "Database" },
  { name: "MySQL", level: "advanced", category: "Database" },
  { name: "MongoDB", level: "intermediate", category: "Database" },
  { name: "Redis", level: "advanced", category: "Database" },
  { name: "Prisma", level: "advanced", category: "Database" },
  { name: "Typesense", level: "intermediate", category: "Database" },

  // Quality & Practices
  { name: "Jest", level: "advanced", category: "Testing" },
  { name: "Playwright", level: "intermediate", category: "Testing" },
  { name: "React Testing Library", level: "advanced", category: "Testing" },
  { name: "Vitest", level: "intermediate", category: "Testing" },

  // DevOps & Tools
  { name: "Docker", level: "advanced", category: "DevOps" },
  { name: "AWS (EC2, S3, CloudFront)", level: "advanced", category: "Cloud" },
  { name: "CI/CD (GitHub Actions, Jenkins)", level: "advanced", category: "DevOps" },
  { name: "Nginx", level: "intermediate", category: "DevOps" },
  { name: "Git", level: "expert", category: "Tools" },
];

export const highlights = [
  {
    metric: "15+",
    label: "Global Markets",
  },
  {
    metric: "~45 → ~80",
    label: "Lighthouse",
  },
  {
    metric: "~6s → ~3s",
    label: "Page Load",
  },
  {
    metric: "~4.5s → ~2.2s",
    label: "LCP",
  },
  {
    metric: "~0.25 → ~0.05",
    label: "CLS",
  },
  {
    metric: "~600 → ~250ms",
    label: "TBT",
  },
  {
    metric: "~1.2 → ~0.8 MB",
    label: "Initial JavaScript",
  },
];
