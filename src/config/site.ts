import type { SiteConfig, Experience, Education, Skill } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Ravi Kumar Nersu",
  title: "Senior Full-Stack Developer | MERN Stack Expert",
  headline: "I build fast, scalable web products that solve real business problems.",
  description:
    "8.5+ years delivering full-stack systems across enterprise clients — React.js, Next.js, Node.js, NestJS, Express, real-time tracking apps, and secure authentication flows. Shipped production platforms for global brands in car rental, logistics, and distribution. Now actively seeking senior tech roles and freelance/consulting engagements based in Dubai, UAE.",
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
      "Led the architectural transformation of global digital platforms, impacting millions of users. Engineered a microservices-based monorepo using Next.js 15 App Router and NestJS, resulting in significant performance gains and enhanced scalability across multiple countries.",
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
      "Delivered enterprise web portals (X4C & X4V) that streamlined vendor and channel partner operations, improving efficiency and user experience through modular, testable MERN-stack component architecture.",
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
      "Engineered end-to-end web modules for logistics automation (Railways, SCM, MLS), leveraging Node.js and PostgreSQL. Optimized data-heavy interfaces and integrated Google Maps for live tracking, significantly boosting operational efficiency.",
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
      "Developed customer and admin portals from scratch for a multi-vendor retail delivery platform. Successfully integrated critical features like Google Maps, payment gateways, and chat support, enhancing platform functionality and user engagement.",
    technologies: ["Angular 9", "Bootstrap", "Angular Material", "Google Maps"],
    logo: "/logos/allmvr.png",
  },
  {
    company: "Whatsscore Pvt. Ltd",
    role: "Software Developer",
    period: "Jun 2017 - Jun 2019",
    description:
      "Built hybrid mobile and web applications for sports tournament management, focusing on robust authentication flows, intuitive dashboards, and seamless participant registration, improving user experience and operational workflows.",
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
    description: "Delivering high-impact, full-stack production systems in enterprise environments.",
  },
  {
    metric: "50%",
    label: "Load Time Reduced",
    description: "Achieved via architecture decisions — not micro-optimisations.",
  },
  {
    metric: "80%+",
    label: "Test Coverage",
    description: "Ensured robust quality with automated coverage across unit, integration, and E2E layers.",
  },
  {
    metric: "6+",
    label: "Microservices",
    description: "Successfully deployed production-grade NestJS services within a scalable monorepo architecture.",
  },
];
