import { Badge, Box, Card, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { workExperience } from "@/data/content";
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
              <Flex gap="2" wrap="wrap" align="center">
                {job.companies.map((company, i) => (
                  <span key={company.name}>
                    <Link
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="2"
                      weight="medium"
                    >
                      {company.name}
                    </Link>
                    {i < job.companies.length - 1 && (
                      <Text color="gray" size="2">
                        {" · "}
                      </Text>
                    )}
                  </span>
                ))}
              </Flex>
            </Box>
          </Card>
        ))}
      </Flex>
    </Section>
  );
}
