import { Text } from "@radix-ui/themes";
import { ExternalLink } from "./external-link";
import { Section } from "./section";

export function Hobbies() {
  return (
    <Section title="Hobbies">
      <Text as="p" size="3">
        Apart from IT, I love sports, especially basketball which I play for{" "}
        <ExternalLink href="http://basket.ub.cz">
          BK TJ Spartak Uherský Brod
        </ExternalLink>
        .
      </Text>
    </Section>
  );
}
