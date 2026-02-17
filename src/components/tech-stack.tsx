import { Badge, Flex } from "@radix-ui/themes";
import { technologies } from "@/data/content";
import { ExternalLink } from "./external-link";
import { Section } from "./section";

export function TechStack() {
  return (
    <Section title="Stack I have experience with">
      <Flex wrap="wrap" gap="2">
        {technologies.map((tech) => (
          <ExternalLink
            key={tech.name}
            href={tech.url}
            underline="none"
            className="min-h-11 flex items-center"
          >
            <Badge variant="soft" size="2" highContrast>
              {tech.name}
            </Badge>
          </ExternalLink>
        ))}
      </Flex>
    </Section>
  );
}
