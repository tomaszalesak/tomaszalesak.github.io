import { Badge, Card, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { education } from "@/data/content";
import { Section } from "./section";

export function Education() {
  return (
    <Section title="Education">
      <Flex direction="column" gap="3">
        {education.map((entry) => (
          <Card key={entry.period} variant="surface">
            <Flex justify="between" align="start" gap="3" wrap="wrap">
              <div>
                <Heading as="h3" size="3">
                  {entry.program}
                </Heading>
                <Flex gap="2" align="center" mt="1">
                  <Link
                    href={entry.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="2"
                    weight="medium"
                  >
                    {entry.institution}
                  </Link>
                  <Text size="2" color="gray">
                    · {entry.degree}
                  </Text>
                </Flex>
              </div>
              <Badge variant="soft" color="gray" size="1">
                {entry.period}
              </Badge>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Section>
  );
}
