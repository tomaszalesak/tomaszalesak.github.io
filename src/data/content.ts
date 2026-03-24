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
      "Full-stack development and consulting, architecture and domain-driven design, primarily focused on .NET, React.js, Bobril.js, TypeScript, JavaScript, SQL, cloud, CI/CD.",
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
      "Dynamic analysis of application security and its automation with OpenVAS, development using .NET, React, Python 3, Bash, Java, CI/CD tools, JavaScript.",
    companies: [{ name: "Y Soft", url: "https://www.ysoft.com/" }],
    period: "2019–2021",
  },
  {
    title: "Software Engineer",
    description:
      "Localization automation, translating and database migration, Python 3, SQL, .NET, JavaScript.",
    companies: [{ name: "AutoCont", url: "https://www.autocont.cz/" }],
    period: "2017–2018",
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
