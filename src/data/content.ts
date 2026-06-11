export const siteUrl = "https://www.tomaszalesak.eu";

export interface ContactLink {
  label: string;
  href: string;
  external: boolean;
}

export interface WorkExperience {
  title: string;
  description: string;
  companies?: Array<{ name: string; url: string }>;
  projects?: ClientProject[];
  period: string;
}

export interface EducationEntry {
  program: string;
  institution: string;
  institutionUrl: string;
  degree: string;
  period: string;
}

export interface ClientProject {
  name: string;
  url: string;
  description: string;
  technologies: string[];
}

/** Radix accent colors used as section accents (all are dark/light aware). */
export type AccentColor =
  | "indigo"
  | "teal"
  | "amber"
  | "grass"
  | "blue"
  | "ruby"
  | "violet";

export type PrincipleIcon = "cicd" | "scale" | "shield" | "team";

export interface ServiceOffering {
  name: string;
  items: string[];
  color: AccentColor;
}

export interface WorkPrinciple {
  title: string;
  description: string;
  icon: PrincipleIcon;
  color: AccentColor;
}

export interface SkillGroup {
  area: string;
  items: string;
  color: AccentColor;
}

export const expertiseIntro =
  "I'm a senior full-stack engineer specializing in enterprise-grade software — designed for scalability, security, and stability from day one. I build complete products end to end, from backend architecture and databases to polished frontends and the pipelines that ship them. I've tried many languages and technologies over the years, and my passion is choosing the right one for the problem at hand.";

export const services: ServiceOffering[] = [
  {
    name: "Web applications",
    color: "indigo",
    items: [
      ".NET backend — ASP.NET Core with MVC, Razor Pages, or Blazor",
      "Angular or React frontend",
      "SLA-backed maintenance and support",
    ],
  },
  {
    name: "Distributed systems",
    color: "teal",
    items: [
      "Microservices orchestrated with Kubernetes and Docker",
      "Cloud-native deployments on Azure Kubernetes Service (AKS)",
      "Built for high availability and horizontal scaling",
    ],
  },
  {
    name: "Data analysis",
    color: "amber",
    items: [
      "Data processing and normalization",
      "Report definition and implementation",
      "Automated reporting with Python and Microsoft Power BI",
      "Clear data presentation and actionable insights",
    ],
  },
];

export const workPrinciples: WorkPrinciple[] = [
  {
    title: "CI/CD automation",
    description:
      "Builds, tests, and deployments run automatically across every environment — releases become a non-event.",
    icon: "cicd",
    color: "grass",
  },
  {
    title: "Scalability",
    description:
      "Architecture that is ready to grow from day one and adapts as your needs evolve.",
    icon: "scale",
    color: "blue",
  },
  {
    title: "Security",
    description:
      "Threat analysis is part of planning, not an afterthought. Vulnerabilities are assessed and prevented within the CVSS v3 framework.",
    icon: "shield",
    color: "ruby",
  },
  {
    title: "Team management",
    description:
      "Agile delivery in 14-day sprints with all the ceremonies — predictable progress and smooth collaboration.",
    icon: "team",
    color: "violet",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    area: "Backend",
    items: ".NET, C#, Entity Framework Core, SQL, Python 3",
    color: "indigo",
  },
  {
    area: "Frontend",
    items: "React, Vue, Solid.js, Bobril.js, TypeScript, Tailwind CSS",
    color: "teal",
  },
  {
    area: "Architecture",
    items:
      "Microservice architecture, message queues, domain-driven design, vertical slices",
    color: "violet",
  },
  {
    area: "Cloud & DevOps",
    items:
      "Azure, AWS, Docker, GitHub Actions, Atlassian Bamboo, Azure DevOps — deployment, scaling, monitoring, logging",
    color: "blue",
  },
  {
    area: "Databases",
    items: "PostgreSQL, Microsoft SQL Server, NoSQL databases",
    color: "amber",
  },
  {
    area: "Security",
    items: "SecDevOps, automated vulnerability scanning with OpenVAS",
    color: "ruby",
  },
  {
    area: "AI & tooling",
    items:
      "AI models and AI coding tools (Claude Code, Codex, OpenCode); monorepos with Nx and Turborepo",
    color: "grass",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:tomas@tomaszalesak.eu",
    external: false,
  },
  {
    label: "Phone",
    href: "tel:+420773658177",
    external: false,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/420773658177",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zalesaktomas/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/tomaszalesak",
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/zalesak.tomas",
    external: true,
  },
  {
    label: "Download CV",
    href: "/cv.pdf",
    external: false,
  },
];

export const clientProjects: ClientProject[] = [
  {
    name: "Quadient",
    url: "https://www.quadient.com/",
    description:
      "Long-term engagement on Quadient's cloud e-invoicing platform: building and operating many microservices and the team's custom microservice infrastructure, designing React.js frontends and .NET backends, and driving greenfield projects from design to production. Day-to-day work spans scaling, unit/integration/e2e testing, observability with Grafana and Loki, code reviews, and AI-assisted development with Claude Code.",
    technologies: [
      ".NET",
      "React.js",
      "Bobril.js",
      "Python 3",
      "PostgreSQL",
      "NoSQL",
      "Azure",
      "Docker",
      "Kubernetes",
      "Grafana",
      "Claude Code",
    ],
  },
  {
    name: "Notino",
    url: "https://www.notino.com/",
    description:
      "Designed a new solution for managing consumables across all of Notino's European warehouses — a .NET and Microsoft SQL Server backend built around domain-driven design, events, and vertical slices, with a React.js frontend. Mentored less senior engineers through code reviews and established repository collaboration rules and code style guidelines.",
    technologies: [
      ".NET",
      "Microsoft SQL Server",
      "React.js",
      "Domain-Driven Design",
      "Vertical Slices",
    ],
  },
  {
    name: "Disruptive Lab",
    url: "https://disruptivelab.dev/",
    description:
      "Full-stack development and consulting: software architecture and domain-driven design, primarily in .NET, React.js, Bobril.js, TypeScript, and SQL, with cloud deployment and CI/CD.",
    technologies: [
      ".NET",
      "React.js",
      "Bobril.js",
      "TypeScript",
      "SQL",
      "Cloud",
      "CI/CD",
    ],
  },
  {
    name: "RHBcare",
    url: "https://www.fyzioterapieuh.cz/",
    description:
      "Built and run the clinic's web application in Next.js — web design, SEO, data and customer management, and process automation — alongside administering Linux and Windows servers, databases, automated backups, and networking.",
    technologies: ["Next.js", "SEO", "Linux", "Windows Server", "Networking"],
  },
  {
    name: "Y Soft",
    url: "https://www.ysoft.com/",
    description:
      "Consulting on the automated security-scanning solution I originally designed and built — vulnerability detection with OpenVAS orchestrated through Atlassian Bamboo.",
    technologies: ["OpenVAS", "Atlassian Bamboo", "Security Automation"],
  },
];

export const workExperience: WorkExperience[] = [
  {
    title: "Senior Software Engineer",
    description:
      "Independent senior engineer delivering full-stack solutions for multiple clients — from greenfield microservice platforms to warehouse-logistics systems — covering architecture, domain-driven design, cloud, and CI/CD.",
    projects: clientProjects,
    period: "2021–now",
  },
  {
    title: "Software Engineer",
    description:
      "Designed and fully automated dynamic application-security analysis: OpenVAS/Greenbone vulnerability scanning orchestrated by Atlassian Bamboo across a three-VM VirtualBox infrastructure, automatically detecting new vulnerabilities and suppressing false positives. Continuously validated against Ubuntu 18.04 running Rocket.Chat; a similar solution was deployed internally at Y Soft. Worked with Linux and Windows administration, React, .NET Core, Java, Python, Bash, and PowerShell.",
    companies: [{ name: "Y Soft", url: "https://www.ysoft.com/" }],
    period: "2019–2021",
  },
  {
    title: "Software Engineer Intern",
    description:
      "Worked in a team developing Microsoft Dynamics 365 Business Central, building new custom modules for client companies and automating localization into Czech and English. Used Python 3, .NET, TypeScript, JavaScript, Microsoft SQL Server, PowerShell, and Bash.",
    companies: [{ name: "AutoCont", url: "https://www.autocont.cz/" }],
    period: "2017–2018",
  },
];

export const education: EducationEntry[] = [
  {
    program: "Software Systems Development and Management",
    institution: "MUNI FI",
    institutionUrl: "https://www.fi.muni.cz/",
    degree: "Mgr.",
    period: "2020–2022",
  },
  {
    program: "Information Technology",
    institution: "BUT FIT",
    institutionUrl: "https://www.fit.vut.cz/",
    degree: "Bc.",
    period: "2016–2020",
  },
];
