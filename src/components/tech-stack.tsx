import { Badge, Flex, Link } from "@radix-ui/themes";
import { technologies } from "@/data/content";
import { Section } from "./section";

export function TechStack() {
  return (
    <Section title="Stack I have experience with">
      <Flex wrap="wrap" gap="2">
        {technologies.map((tech) => (
          <Link
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <Badge variant="soft" size="2" highContrast>
              {tech.name}
            </Badge>
          </Link>
        ))}
      </Flex>
    </Section>
  );
}
