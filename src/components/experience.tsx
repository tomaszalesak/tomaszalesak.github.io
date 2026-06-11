import { Badge, Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { workExperience } from "@/data/content";
import { ExternalLink } from "./external-link";
import { Section } from "./section";

export function Experience() {
  return (
    <Section title="Work Experience">
      <Flex direction="column" gap="3">
        {workExperience.map((job) => (
          <Card key={job.period} variant="surface">
            <Flex justify="between" align="start" gap="3" wrap="wrap">
              <Heading as="h3" size="3">
                {job.title}
              </Heading>
              <Badge variant="soft" color="gray" size="1">
                {job.period}
              </Badge>
            </Flex>
            <Text as="p" size="2" color="gray" mt="2">
              {job.description}
            </Text>
            {job.companies && (
              <Box mt="2">
                <Flex
                  gap="1"
                  wrap="wrap"
                  align="center"
                  role="list"
                  aria-label="Companies"
                >
                  {job.companies.map((company, i) => (
                    <li key={company.name} className="list-none">
                      <ExternalLink href={company.url} size="2" weight="medium">
                        {company.name}
                      </ExternalLink>
                      {i < (job.companies?.length ?? 0) - 1 && (
                        <Text color="gray" size="2" aria-hidden="true">
                          {" · "}
                        </Text>
                      )}
                    </li>
                  ))}
                </Flex>
              </Box>
            )}
            {job.projects && (
              <Flex
                direction="column"
                gap="3"
                mt="3"
                role="list"
                aria-label="Client projects"
              >
                {job.projects.map((project) => (
                  <li
                    key={project.name}
                    className="list-none border-l-2 border-(--gray-a6) pl-3"
                  >
                    <Heading as="h4" size="2">
                      <ExternalLink
                        href={project.url}
                        highContrast
                        underline="hover"
                      >
                        {project.name}
                      </ExternalLink>
                    </Heading>
                    <Text as="p" size="2" color="gray" mt="1">
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
                  </li>
                ))}
              </Flex>
            )}
          </Card>
        ))}
      </Flex>
    </Section>
  );
}
