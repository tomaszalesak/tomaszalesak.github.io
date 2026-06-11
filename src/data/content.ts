export const siteUrl = "https://www.tomaszalesak.eu";

export interface ContactLink {
  label: string;
  href: string;
  text: string;
  external: boolean;
}

export interface WorkExperience {
  title: string;
  description: string;
  companies: Array<{ name: string; url: string }>;
  period: string;
}

export interface Technology {
  name: string;
  url: string;
}

export interface EducationEntry {
  program: string;
  institution: string;
  institutionUrl: string;
  degree: string;
  period: string;
}

export interface AboutHighlight {
  area: string;
  items: string;
}

export interface AboutContent {
  intro: string;
  highlights: AboutHighlight[];
  closing: string;
}

export interface ClientProject {
  name: string;
  url: string;
  description: string;
  technologies: string[];
}

export const about: AboutContent = {
  intro:
    "I'm a senior full-stack software engineer who designs and builds complete products — from backend architecture and databases to polished frontends and the CI/CD pipelines that ship them.",
  highlights: [
    {
      area: "Backend",
      items: ".NET, C#, Entity Framework Core, SQL, Python 3",
    },
    {
      area: "Frontend",
      items: "React, Vue, Solid.js, Bobril.js, TypeScript, Tailwind CSS",
    },
    {
      area: "Architecture",
      items:
        "Microservice architecture, message queues, domain-driven design, vertical slices",
    },
    {
      area: "Cloud & DevOps",
      items:
        "Azure, AWS, Docker, GitHub Actions, Atlassian Bamboo, Azure DevOps — deployment, scaling, monitoring, logging",
    },
    {
      area: "Databases",
      items: "PostgreSQL, Microsoft SQL Server, NoSQL databases",
    },
    {
      area: "Security",
      items: "SecDevOps, automated vulnerability scanning with OpenVAS",
    },
    {
      area: "AI & tooling",
      items:
        "AI models and AI coding tools (Claude Code, Codex, OpenCode); monorepos with Nx and Turborepo",
    },
  ],
  closing:
    "I've tried many languages and technologies over the years — my passion is choosing the right one for the problem at hand.",
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:tomas@tomaszalesak.eu",
    text: "tomas@tomaszalesak.eu",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zalesaktomas/",
    text: "LinkedIn",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/tomaszalesak",
    text: "github.com/tomaszalesak",
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/zalesak.tomas",
    text: "facebook.com/zalesak.tomas",
    external: true,
  },
  {
    label: "CV",
    href: "/cv.pdf",
    text: "Download CV (PDF)",
    external: false,
  },
];

export const workExperience: WorkExperience[] = [
  {
    title: "Senior Software Engineer",
    description:
      "Freelance senior engineer delivering full-stack solutions for multiple clients — from greenfield microservice platforms to warehouse-logistics systems — covering architecture, domain-driven design, cloud, and CI/CD. Detailed per client in the Client Projects section below.",
    companies: [
      { name: "Disruptive Lab", url: "https://disruptivelab.dev/" },
      { name: "Quadient", url: "https://www.quadient.com/" },
      { name: "Notino", url: "https://www.notino.com/" },
      { name: "RHBcare", url: "https://www.fyzioterapieuh.cz/" },
    ],
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

export const technologies: Technology[] = [
  { name: ".NET", url: "https://dotnet.microsoft.com/" },
  { name: "React.js", url: "https://react.dev/" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "Nx", url: "https://nx.dev/" },
  { name: "Solid.js", url: "https://www.solidjs.com/" },
  { name: "Vue.js", url: "https://vuejs.org/" },
  { name: "Node.js", url: "https://nodejs.org/" },
  { name: "Angular", url: "https://angular.dev/" },
  { name: "Python", url: "https://www.python.org/" },
  { name: "Java", url: "https://www.java.com/" },
  { name: "C", url: "https://en.cppreference.com/w/c" },
  { name: "OpenVAS", url: "https://www.openvas.org/" },
  {
    name: "Unix",
    url: "https://www.opengroup.org/membership/forums/platform/unix",
  },
  { name: "Windows", url: "https://www.microsoft.com/windows/" },
  { name: "Docker", url: "https://www.docker.com/" },
  { name: "SQL", url: "https://www.iso.org/standard/63555.html" },
  { name: "Azure", url: "https://azure.microsoft.com/" },
  { name: "AWS", url: "https://aws.amazon.com/" },
  { name: "Claude Code", url: "https://claude.ai/code" },
  {
    name: "Artificial Intelligence",
    url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
  },
  { name: "PostgreSQL", url: "https://www.postgresql.org/" },
  { name: "macOS", url: "https://www.apple.com/macos/" },
  { name: "CSS", url: "https://www.w3.org/Style/CSS/" },
  { name: "C#", url: "https://learn.microsoft.com/dotnet/csharp/" },
  {
    name: "Entity Framework Core",
    url: "https://learn.microsoft.com/ef/core/",
  },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { name: "Kubernetes", url: "https://kubernetes.io/" },
  { name: "Grafana", url: "https://grafana.com/" },
  { name: "GitHub Actions", url: "https://github.com/features/actions" },
  { name: "Azure DevOps", url: "https://azure.microsoft.com/products/devops" },
  {
    name: "Microsoft SQL Server",
    url: "https://www.microsoft.com/sql-server",
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
