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
                    {i < job.companies.length - 1 && (
                      <Text color="gray" size="2" aria-hidden="true">
                        {" · "}
                      </Text>
                    )}
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
