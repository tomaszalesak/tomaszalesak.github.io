import { DataList, Text } from "@radix-ui/themes";
import { about } from "@/data/content";
import { Section } from "./section";

export function About() {
  return (
    <Section title="About">
      <Text as="p" size="3">
        {about.intro}
      </Text>
      <DataList.Root
        size="2"
        mt="4"
        orientation={{ initial: "vertical", sm: "horizontal" }}
      >
        {about.highlights.map((highlight) => (
          <DataList.Item key={highlight.area}>
            <DataList.Label>{highlight.area}</DataList.Label>
            <DataList.Value>{highlight.items}</DataList.Value>
          </DataList.Item>
        ))}
      </DataList.Root>
      <Text as="p" size="3" color="gray" mt="4">
        {about.closing}
      </Text>
    </Section>
  );
}
