import { Badge, Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import {
  type AccentColor,
  expertiseClosing,
  expertiseIntro,
  services,
  skillGroups,
  workPrinciples,
} from "@/data/content";
import { CheckIcon, PrincipleGlyph, ServiceGlyph } from "./icons";
import { Section } from "./section";

/** Reference a Radix color scale step — values are dark/light aware. */
const token = (color: AccentColor, step: number) => `var(--${color}-${step})`;

function Eyebrow({ children, mt }: { children: string; mt?: "6" }) {
  return (
    <Heading as="h3" size="2" mb="3" mt={mt}>
      {children}
    </Heading>
  );
}

export function Expertise() {
  return (
    <Section title="What I do">
      <Text as="p" size="3">
        {expertiseIntro}
      </Text>

      <Eyebrow mt="6">What I can build for you</Eyebrow>
      <Flex direction="column" gap="3">
        {services.map((service) => (
          <Card
            key={service.name}
            variant="surface"
            style={{ borderTop: `3px solid ${token(service.color, 9)}` }}
          >
            <Flex align="center" gap="3">
              <Flex
                align="center"
                justify="center"
                className="size-10 shrink-0 rounded-lg"
                style={{
                  backgroundColor: token(service.color, 3),
                  color: token(service.color, 11),
                }}
              >
                <ServiceGlyph icon={service.icon} />
              </Flex>
              <Heading as="h4" size="3">
                {service.name}
              </Heading>
            </Flex>
            <Text as="p" size="2" color="gray" mt="2">
              {service.description}
            </Text>
            <ul className="mt-3 flex flex-col gap-2">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-0.5 shrink-0"
                    style={{ color: token(service.color, 11) }}
                  >
                    <CheckIcon />
                  </span>
                  <Text size="2">{item}</Text>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Flex>

      <Eyebrow mt="6">How I work</Eyebrow>
      <Grid columns={{ initial: "1", xs: "2" }} gap="3">
        {workPrinciples.map((principle) => (
          <Box
            key={principle.title}
            className="rounded-lg p-3"
            style={{ backgroundColor: token(principle.color, 2) }}
          >
            <Flex align="center" gap="2" mb="1">
              <span style={{ color: token(principle.color, 11) }}>
                <PrincipleGlyph icon={principle.icon} />
              </span>
              <Heading as="h4" size="2">
                {principle.title}
              </Heading>
            </Flex>
            <Text as="p" size="2" color="gray">
              {principle.description}
            </Text>
          </Box>
        ))}
      </Grid>

      <Eyebrow mt="6">Tech stack</Eyebrow>
      <Flex direction="column" gap="2">
        {skillGroups.map((group) => (
          <Flex key={group.area} gap="2" align="baseline" wrap="wrap">
            <Badge color={group.color} variant="soft" radius="full">
              {group.area}
            </Badge>
            <Text size="2" color="gray">
              {group.items}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Text as="p" size="3" color="gray" mt="6">
        {expertiseClosing}
      </Text>
    </Section>
  );
}
