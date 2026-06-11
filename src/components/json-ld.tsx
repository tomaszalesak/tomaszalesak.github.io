import type { Person, ProfilePage, WithContext } from "schema-dts";
import { siteUrl } from "@/data/content";

export function JsonLd() {
  const person: Person = {
    "@type": "Person",
    name: "Tomáš Zálešák",
    url: siteUrl,
    email: "tomas@tomaszalesak.eu",
    telephone: "+420773658177",
    jobTitle: "Senior Software Engineer",
    description:
      "Senior software engineer in the EU building enterprise-grade web applications, distributed systems, and data analysis solutions. Available for freelance projects.",
    worksFor: {
      "@type": "Organization",
      name: "Disruptive Lab",
      url: "https://disruptivelab.dev/",
    },
    sameAs: [
      "https://www.linkedin.com/in/zalesaktomas/",
      "https://github.com/tomaszalesak",
      "https://www.facebook.com/zalesak.tomas",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Masaryk University, Faculty of Informatics",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Brno University of Technology, Faculty of Information Technology",
      },
    ],
    knowsAbout: [
      ".NET",
      "C#",
      "Entity Framework Core",
      "React.js",
      "Vue.js",
      "Solid.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
      "Python",
      "Docker",
      "Kubernetes",
      "SQL",
      "PostgreSQL",
      "Microsoft SQL Server",
      "Azure",
      "AWS",
      "Microservices",
      "Domain-Driven Design",
      "CI/CD",
      "Application Security",
      "ASP.NET Core",
      "Blazor",
      "Angular",
      "Azure Kubernetes Service (AKS)",
      "Distributed Systems",
      "Data Analysis",
    ],
    knowsLanguage: ["Czech", "English"],
    image: `${siteUrl}/portrait.webp`,
  };

  const jsonLd: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    inLanguage: "en",
    mainEntity: person,
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: standard pattern for JSON-LD
      dangerouslySetInnerHTML={{
        // Escape "<" so the payload can't break out of the <script> tag.
        __html: JSON.stringify(jsonLd).replaceAll("<", String.raw`\u003c`),
      }}
    />
  );
}
