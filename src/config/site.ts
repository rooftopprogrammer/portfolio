import type { SiteConfig, Experience, Education, Skill } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Ravi Kumar Nersu",
  title: "Senior Full-Stack Engineer",
  headline: "I build fast, scalable web products that solve real business problems.",
  description:
    "Full-stack architecture owner with 8.5+ years delivering high-traffic, performance-critical web platforms across 15+ global markets. Drove ~50% page load reduction and ~40% developer velocity improvement through microservices adoption, BFF architecture, and SSR optimization on a platform serving millions of monthly users. Deep expertise in React, Next.js, TypeScript, Node.js/NestJS, AWS, and System Design — now seeking senior tech roles and freelance/consulting engagements in Dubai, UAE.",
  url: "https://ravikumarnersu.vercel.app",
  ogImage: "/og-image.png",
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
    role: "Specialist Software Engineer",
    period: "Jan 2024 - Present",
    client: "Avis Budget Group — Global Digital Platform (15+ Countries, Millions of Monthly Users)",
    description:
      "Architected microservices-based platform spanning React/Next.js (App Router, SSR/ISR) frontends and NestJS backend services — supporting 15+ country markets with 99.9% uptime SLA. Delivered ~50% page load reduction through SSR optimization, Redis caching, and AWS CloudFront CDN. Designed BFF services unifying 8+ downstream APIs, improving developer velocity by ~40%. Led monolith-to-microservices migration enabling multiple daily deployments. Built reusable UI component library reducing UI development time by ~40%. Established CI/CD pipelines (GitHub Actions) and testing standards achieving 85%+ code coverage. Mentored 5+ engineers on React/Next.js patterns and system design.",
    technologies: [
      "React",
      "Next.js (App Router)",
      "NestJS",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "GraphQL",
    ],
    logo: "/logos/ltimindtree.png",
    caseStudy: {
      problem: "The existing frontend ecosystem struggled with load times, scalability, and tightly coupled services across regions.",
      constraints: "Global traffic, multi-market localization, legacy integrations, and strict uptime requirements (99.9% SLA).",
      decision: "Moved to a microservices-driven frontend architecture using Next.js App Router, BFF-style NestJS services, and aggressive caching strategies (Redis + CloudFront).",
      tradeoffs: "Increased architectural complexity in exchange for long-term scalability and independent deployability per region.",
      result: "Achieved ~50% page load reduction, ~40% developer velocity improvement, and enabled zero-downtime daily releases across 15+ markets.",
    },
  },
  {
    company: "MSR COSMOS IT LLP",
    role: "Senior Software Engineer",
    period: "Aug 2020 - Jan 2024",
    client: "TMILL — Tata Martrade International Logistics Limited",
    description:
      "Owned end-to-end delivery of 6+ web modules across Railways, SCM, and MLS business units — from React/Next.js frontends to Node.js/Express backend services and PostgreSQL/MySQL database design. Architected RESTful APIs powering high-volume logistics workflows processing 5,000+ daily transactions with 99.5%+ API uptime. Built real-time operational dashboards with data visualization, reducing manual reporting effort by ~60%. Implemented RBAC and secure authentication for 200+ internal users. Optimized page load from 4.2s to 1.8s for mission-critical 24/7 operations.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Redis",
    ],
    logo: "/logos/msr-cosmos.png",
  },
  {
    company: "Allmvr Projects Pvt. Ltd",
    role: "Full-Stack Developer",
    period: "Jun 2019 - Aug 2020",
    description:
      "Built multi-vendor e-commerce platform (Angular 9, Angular Material, Node.js) handling end-to-end order lifecycle — onboarding, payments, real-time tracking — supporting 50+ vendors and 10,000+ monthly orders. Integrated payment gateways and OTP verification achieving 99.2% transaction success rate. Delivered Figma-to-production features in 2-week Agile sprints with consistent on-time delivery.",
    technologies: ["Angular 9", "Angular Material", "TypeScript", "RxJS", "REST APIs", "Node.js"],
    logo: "/logos/allmvr.png",
  },
  {
    company: "Xelpro Software Solutions & Whatsscore Pvt. Ltd",
    role: "Software Developer",
    period: "Jun 2017 - Jun 2019",
    description:
      "Developed sports event management platform (Angular v4–7, Angular Material, TypeScript) — serving 100+ tournaments with live scoring, bracket generation, and event scheduling. Built reactive, component-driven UI with RxJS-based state management and RESTful API integrations for real-time data updates across web and mobile viewports.",
    technologies: ["Angular", "Angular Material", "TypeScript", "RxJS", "REST APIs", "HTML5", "CSS3"],
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
  { name: "WebSockets", level: "intermediate", category: "Backend" },

  // Data & Infrastructure
  { name: "PostgreSQL", level: "advanced", category: "Database" },
  { name: "MySQL", level: "advanced", category: "Database" },
  { name: "MongoDB", level: "intermediate", category: "Database" },
  { name: "Redis", level: "advanced", category: "Database" },

  // Quality & Practices
  { name: "Jest", level: "advanced", category: "Testing" },
  { name: "Playwright", level: "intermediate", category: "Testing" },
  { name: "Cypress", level: "intermediate", category: "Testing" },
  { name: "React Testing Library", level: "advanced", category: "Testing" },
  { name: "TDD", level: "advanced", category: "Testing" },

  // DevOps & Tools
  { name: "Docker", level: "advanced", category: "DevOps" },
  { name: "Kubernetes", level: "intermediate", category: "DevOps" },
  { name: "AWS (EC2, S3, Lambda, CloudFront)", level: "advanced", category: "Cloud" },
  { name: "CI/CD (GitHub Actions, Jenkins)", level: "advanced", category: "DevOps" },
  { name: "Nginx", level: "intermediate", category: "DevOps" },
  { name: "Git", level: "expert", category: "Tools" },
];

export const highlights = [
  {
    metric: "8.5+",
    label: "Years Experience",
    description: "Delivering high-impact, full-stack production systems across automotive, logistics, enterprise IT, and e-commerce.",
  },
  {
    metric: "15+",
    label: "Global Markets",
    description: "Architected platforms serving millions of monthly users across 15+ country markets with 99.9% uptime.",
  },
  {
    metric: "50%",
    label: "Load Time Reduced",
    description: "Achieved via SSR optimization, Redis caching, and AWS CloudFront CDN configuration.",
  },
  {
    metric: "40%",
    label: "Dev Velocity Boost",
    description: "BFF architecture with NestJS unified 8+ downstream APIs, accelerating feature delivery across regions.",
  },
];
