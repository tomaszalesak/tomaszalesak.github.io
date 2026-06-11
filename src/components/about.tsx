import { Box, Text } from "@radix-ui/themes";
import { about } from "@/data/content";
import { Section } from "./section";

export function About() {
  return (
    <Section title="About">
      <Text as="p" size="3">
        {about.intro}
      </Text>
      <Box asChild mt="3">
        <ul className="flex flex-col gap-1">
          {about.highlights.map((highlight) => (
            <li key={highlight.area} className="list-none">
              <Text size="2" weight="medium">
                {highlight.area}:
              </Text>{" "}
              <Text size="2" color="gray">
                {highlight.items}
              </Text>
            </li>
          ))}
        </ul>
      </Box>
      <Text as="p" size="3" color="gray" mt="3">
        {about.closing}
      </Text>
    </Section>
  );
}
