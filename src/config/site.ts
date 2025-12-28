import type { SiteConfig, Experience, Education, Skill } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Ravi Kumar Nersu",
  title: "Specialist Software Engineer",
  headline: "I design and scale frontend-heavy enterprise systems used by millions of users.",
  description:
    "Specialist Software Engineer with 8.5+ years of experience designing and scaling performance-critical web platforms using React, Next.js, and Node.js — with a focus on architectural ownership, frontend performance systems, and microservice-driven platforms at global scale.",
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
    client: "Avis Budget Group",
    description:
      "Primary frontend architecture owner for global digital platforms serving millions of customers across multiple countries. Designed and implemented a microservices-based monorepo using Next.js 15 App Router and NestJS, with a focus on rendering strategy, API boundaries, and cache behavior.",
    technologies: [
      "React 19",
      "Next.js 15",
      "NestJS 11",
      "TypeScript",
      "Material-UI v6",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    logo: "/logos/ltimindtree.png",
    caseStudy: {
      problem: "The existing frontend ecosystem struggled with load times, scalability, and tightly coupled services across regions.",
      constraints: "Global traffic, multi-market localization, legacy integrations, and strict uptime requirements.",
      decision: "Moved to a microservices-driven frontend architecture using Next.js App Router, BFF-style NestJS services, and aggressive caching strategies.",
      tradeoffs: "Increased architectural complexity in exchange for long-term scalability and independent deployability.",
      result: "Achieved ~50% reduction in load times, improved developer velocity, and enabled safer feature rollout across markets.",
    },
  },
  {
    company: "LTIMindtree",
    role: "Specialist Software Engineer",
    period: "Jan 2024 - Present",
    client: "Ingram Micro",
    description:
      "Developed and maintained enterprise web portals (X4C & X4V), streamlining vendor and channel partner operations with modular, testable component architecture.",
    technologies: [
      "React.js",
      "Redux",
      "React Query",
      "TypeScript",
      "REST APIs",
      "Zenith UI",
    ],
    logo: "/logos/ltimindtree.png",
  },
  {
    company: "MSR COSMOS IT LLP",
    role: "Senior Software Engineer",
    period: "Aug 2020 - Dec 2023",
    client: "TMILL (Tata Martrade)",
    description:
      "Built end-to-end web modules for logistics automation across Railways, SCM, and MLS projects. Designed live tracking dashboards with Google Maps integration and optimized data-heavy interfaces for operational efficiency.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Azure",
      "Context API",
      "Google Maps API",
    ],
    logo: "/logos/msr-cosmos.png",
  },
  {
    company: "Allmvr Projects Pvt. Ltd",
    role: "Front-End Developer",
    period: "Jun 2019 - Aug 2020",
    description:
      "Built customer and admin portals from scratch for a multi-vendor retail delivery platform. Integrated Google Maps, payment gateways, OTP verification, and chat support.",
    technologies: ["Angular 9", "Bootstrap", "Angular Material", "Google Maps"],
    logo: "/logos/allmvr.png",
  },
  {
    company: "Whatsscore Pvt. Ltd",
    role: "Software Developer",
    period: "Jun 2017 - Jun 2019",
    description:
      "Developed hybrid mobile and web apps for sports tournament management. Built authentication flows, dashboards, and participant registration modules.",
    technologies: ["Angular 4", "Ionic 3", "TypeScript", "Angular Material"],
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
  { name: "Next.js 15", level: "expert", category: "Frontend" },
  { name: "TypeScript", level: "expert", category: "Languages" },
  { name: "JavaScript (ES6+)", level: "advanced", category: "Languages" },
  { name: "Redux", level: "advanced", category: "Frontend" },
  { name: "Zustand", level: "advanced", category: "Frontend" },
  { name: "HTML5", level: "expert", category: "Frontend" },
  { name: "CSS3", level: "advanced", category: "Frontend" },
  { name: "Material-UI", level: "expert", category: "Frontend" },

  // Backend
  { name: "Node.js", level: "advanced", category: "Backend" },
  { name: "NestJS", level: "advanced", category: "Backend" },
  { name: "Express.js", level: "advanced", category: "Backend" },
  { name: "RESTful APIs", level: "expert", category: "Backend" },
  { name: "Microservices", level: "advanced", category: "Backend" },
  { name: "GraphQL", level: "intermediate", category: "Backend" },

  // Database
  { name: "PostgreSQL", level: "advanced", category: "Database" },
  { name: "MySQL", level: "advanced", category: "Database" },
  { name: "Redis", level: "intermediate", category: "Database" },
  { name: "MongoDB", level: "intermediate", category: "Database" },

  // Testing
  { name: "Jest", level: "advanced", category: "Testing" },
  { name: "React Testing Library", level: "advanced", category: "Testing" },
  { name: "Playwright", level: "intermediate", category: "Testing" },
  { name: "Vitest", level: "intermediate", category: "Testing" },

  // DevOps & Tools
  { name: "Git", level: "expert", category: "Tools" },
  { name: "Docker", level: "intermediate", category: "DevOps" },
  { name: "AWS (S3, EC2)", level: "intermediate", category: "Cloud" },
  { name: "CI/CD", level: "intermediate", category: "DevOps" },
  { name: "Kubernetes", level: "beginner", category: "DevOps" },
  { name: "Jenkins", level: "intermediate", category: "DevOps" },
];

export const highlights = [
  {
    metric: "8.5+",
    label: "Years Experience",
    description: "Delivering production systems in enterprise environments",
  },
  {
    metric: "50%",
    label: "Performance Boost",
    description: "Frontend load-time reduction via architectural decisions",
  },
  {
    metric: "80%+",
    label: "Test Coverage",
    description: "Automated coverage across unit, integration, and E2E layers",
  },
  {
    metric: "6+",
    label: "Microservices",
    description: "Production NestJS services in a monorepo architecture",
  },
];
