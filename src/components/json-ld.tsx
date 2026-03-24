import type { Person, WithContext } from "schema-dts";

export function JsonLd() {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tomáš Zálešák",
    url: "https://www.tomaszalesak.eu",
    email: "tomas@tomaszalesak.eu",
    jobTitle: "Senior Software Engineer",
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
      "React.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "Docker",
      "SQL",
      "Azure",
      "AWS",
    ],
    image: "https://www.tomaszalesak.eu/portrait.webp",
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: standard pattern for JSON-LD
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
