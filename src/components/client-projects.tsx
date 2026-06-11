import { Badge, Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { clientProjects } from "@/data/content";
import { ExternalLink } from "./external-link";
import { Section } from "./section";

export function ClientProjects() {
  return (
    <Section title="Client Projects">
      <Flex direction="column" gap="3">
        {clientProjects.map((project) => (
          <Card key={project.name} variant="surface">
            <Heading as="h3" size="3">
              <ExternalLink href={project.url} highContrast underline="hover">
                {project.name}
              </ExternalLink>
            </Heading>
            <Text as="p" size="2" color="gray" mt="2">
              {project.description}
            </Text>
            <Box mt="2">
              <Flex
                gap="1"
                wrap="wrap"
                role="list"
                aria-label="Technologies used"
              >
                {project.technologies.map((tech) => (
                  <li key={tech} className="list-none">
                    <Badge variant="soft" size="1">
                      {tech}
                    </Badge>
                  </li>
                ))}
              </Flex>
            </Box>
          </Card>
        ))}
      </Flex>
    </Section>
  );
}
