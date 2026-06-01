import type { SiteConfig, Experience, Education, Skill } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Ravi Kumar Nersu",
  title: "Senior Full-Stack Engineer",
  headline: "Enterprise Platform Architecture • Performance Engineering • Microservices",
  description:
    "Delivering high-traffic, performance-critical platforms across 15+ global markets. ~50% load time reduction • ~40% developer velocity improvement • 99.9% SLA systems.",
  url: "https://ravikumarnersu.vercel.app",
  ogImage: "/og-image.png",
  location: "Hyderabad, Telangana, India",
  locations: [
    "Hyderabad, Telangana, India",
    "Bengaluru, Karnataka, India",
    "Chennai, Tamil Nadu, India",
    "Singapore",
    "Dubai, United Arab Emirates",
  ],
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
    period: "Jan 2025 - Apr 2026",
    client: "Avis Budget Group — Global Digital Platform (15+ Countries, Millions of Monthly Users)",
    location: "Hyderabad, India",
    highlights: [
      "Architected microservices-based platform spanning React/Next.js (App Router, SSR/ISR) frontends and NestJS backend services — supporting 15+ country markets with 99.9% uptime SLA and millions of monthly active users",
      "Delivered ~50% page load reduction through server-side rendering optimization, Redis caching, and AWS CloudFront CDN configuration — directly improving Core Web Vitals scores and contributing to measurable conversion rate uplift across key booking flows",
      "Designed BFF (Backend-for-Frontend) services with NestJS that unified 8+ downstream APIs into single aggregated endpoints — reducing frontend-backend coupling and improving developer velocity by ~40% across 3 cross-functional squads",
      "Led monolith-to-microservices migration enabling independent deployments per region — increasing release frequency from bi-weekly to multiple daily deployments with zero-downtime releases",
      "Built reusable UI component library and modular frontend architecture, reducing UI development time by ~40% across enterprise B2B portals and campaign analytics dashboards",
      "Established CI/CD pipelines (GitHub Actions) and testing standards (Jest, Playwright) — reducing production defect rate by ~30% and achieving 85%+ code coverage across frontend and BFF layers",
      "Mentored 5+ junior/mid-level engineers on React/Next.js patterns, component architecture, and system design principles",
    ],
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
    company: "LTIMindtree",
    role: "Specialist Software Engineer",
    period: "Jan 2024 - Jan 2025",
    client: "Ingram Micro — Global Technology Distributor",
    location: "Hyderabad, India",
    highlights: [
      "Built React-based modules for enterprise vendor and channel-partner portals serving a global technology distributor — improving UI consistency and maintainability across the platform",
      "Integrated REST APIs powering partner onboarding, campaign management, and operational workflows",
      "Developed reusable UI components and applied semantic versioning with internal package and dependency management for stable, reproducible builds",
      "Delivered in a Jira-driven Agile environment, contributing to code reviews and release support alongside product managers",
    ],
    technologies: ["React", "TypeScript", "Redux", "REST APIs", "Tailwind CSS"],
    logo: "/logos/ltimindtree.png",
  },
  {
    company: "MSR COSMOS IT LLP",
    role: "Senior Software Engineer",
    period: "Aug 2020 - Jan 2024",
    client: "TMILL — Tata Martrade International Logistics Limited",
    location: "Hyderabad, India",
    highlights: [
      "Owned end-to-end delivery of logistics automation modules across Railways, SCM, and MLS business units — from React frontends to Node.js backend services and PostgreSQL/MySQL database design",
      "Built real-time operational dashboards with geospatial tracking (Google Maps API), data visualization, and live monitoring — processing 5,000+ daily transactions across multiple business units with 99.5%+ API uptime",
      "Architected RESTful APIs and role-based operational dashboards powering high-volume logistics workflows in 24/7 operational environments — reducing manual reporting effort by ~60%",
      "Implemented RBAC and secure authentication for 200+ internal users and external logistics partners — eliminating unauthorized access incidents and passing security audits",
      "Optimized database queries and frontend rendering — reducing average page load from 4.2s to 1.8s and improving system reliability for mission-critical 24/7 operations",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Google Maps API",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Redis",
    ],
    logo: "/logos/msr-cosmos.png",
  },
  {
    company: "Allmvr Projects Pvt. Ltd",
    role: "Front-End Developer",
    period: "Jun 2019 - Aug 2020",
    location: "Vijayawada, India",
    highlights: [
      "Built customer-facing and admin web applications for a multi-vendor retail delivery platform (React, JavaScript) handling end-to-end order lifecycle — supporting 50+ vendors and 10,000+ monthly orders",
      "Implemented onboarding, ordering, payment, and real-time tracking flows with REST API integration — achieving 99.2% transaction success rate and reducing checkout abandonment through streamlined UX",
      "Translated Figma designs into responsive, production-ready UI in 2-week Agile sprints with consistent on-time delivery",
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
      "Built web and mobile applications for sports tournament and event-management platforms (JavaScript, HTML, CSS) — serving 100+ tournaments with live scoring, registration, and event scheduling",
      "Implemented authentication, dashboards, and participant registration with REST API integration and responsive UI for real-time data updates",
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
    metric: "15+",
    label: "Global Markets",
  },
  {
    metric: "Millions",
    label: "Monthly Users",
  },
  {
    metric: "~50%",
    label: "Load Time Reduction",
  },
  {
    metric: "~40%",
    label: "Dev Velocity Gain",
  },
  {
    metric: "99.9%",
    label: "SLA Uptime",
  },
  {
    metric: "85%+",
    label: "Code Coverage",
  },
  {
    metric: "5,000+",
    label: "Daily Transactions",
  },
];
