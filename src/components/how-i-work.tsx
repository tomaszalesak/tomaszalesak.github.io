import { Box, Grid, Heading, Text } from "@radix-ui/themes";
import { workPrinciples } from "@/data/content";
import { Section } from "./section";

export function HowIWork() {
  return (
    <Section title="How I work">
      <Grid columns={{ initial: "1", xs: "2" }} gapX="5" gapY="4">
        {workPrinciples.map((principle) => (
          <Box
            key={principle.title}
            className="border-l-2 border-(--accent-9) pl-3"
          >
            <Heading as="h3" size="2">
              {principle.title}
            </Heading>
            <Text as="p" size="2" color="gray" mt="1">
              {principle.description}
            </Text>
          </Box>
        ))}
      </Grid>
    </Section>
  );
}
