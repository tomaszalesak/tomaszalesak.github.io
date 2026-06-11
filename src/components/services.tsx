import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { services } from "@/data/content";
import { Section } from "./section";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-1 shrink-0 text-(--accent-9)"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Services() {
  return (
    <Section title="Services">
      <Text as="p" size="3">
        {services.intro}
      </Text>
      <Flex direction="column" gap="3" mt="4">
        {services.offerings.map((offering) => (
          <Card key={offering.name} variant="surface">
            <Heading as="h3" size="3">
              {offering.name}
            </Heading>
            <Text as="p" size="2" color="gray" mt="1">
              {offering.description}
            </Text>
            <ul className="mt-3 flex flex-col gap-2">
              {offering.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon />
                  <Text size="2">{item}</Text>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Flex>
    </Section>
  );
}
