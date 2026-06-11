import { Badge, Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import {
  type AccentColor,
  expertiseIntro,
  services,
  skillGroups,
  workPrinciples,
} from "@/data/content";
import { PrincipleGlyph } from "./icons";
import { Section } from "./section";

/** Reference a Radix color scale step — values are dark/light aware. */
const token = (color: AccentColor, step: number) => `var(--${color}-${step})`;

const techRows: { label: string; items: string; color: AccentColor }[] = [
  ...skillGroups.map((group) => ({
    label: group.area,
    items: group.items,
    color: group.color,
  })),
  ...services.map((service) => ({
    label: service.name,
    items: service.items.join(" · "),
    color: service.color,
  })),
];

function Eyebrow({ children, mt }: Readonly<{ children: string; mt?: "6" }>) {
  return (
    <Heading as="h3" size={{ initial: "3", sm: "2" }} mb="3" mt={mt}>
      {children}
    </Heading>
  );
}

export function Expertise() {
  return (
    <Section title="What I do">
      <Text as="p" size={{ initial: "4", sm: "3" }}>
        {expertiseIntro}
      </Text>

      <Eyebrow mt="6">How I work</Eyebrow>
      <Grid columns={{ initial: "1", xs: "2" }} gap="4">
        {workPrinciples.map((principle) => (
          <Box
            key={principle.title}
            className="rounded-lg p-4"
            style={{ backgroundColor: token(principle.color, 2) }}
          >
            <Flex align="center" gap="2" mb="2">
              <span style={{ color: token(principle.color, 11) }}>
                <PrincipleGlyph icon={principle.icon} />
              </span>
              <Heading as="h4" size={{ initial: "3", sm: "2" }}>
                {principle.title}
              </Heading>
            </Flex>
            <Text as="p" size={{ initial: "3", sm: "2" }} color="gray">
              {principle.description}
            </Text>
          </Box>
        ))}
      </Grid>

      <Eyebrow mt="6">Tech stack and what I can build for you</Eyebrow>
      <Flex direction="column" gap="3">
        {techRows.map((row) => (
          <Flex key={row.label} gap="2" align="baseline" wrap="wrap">
            <Badge color={row.color} variant="soft" size="2" radius="full">
              {row.label}
            </Badge>
            <Text size={{ initial: "3", sm: "2" }} color="gray">
              {row.items}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Section>
  );
}
