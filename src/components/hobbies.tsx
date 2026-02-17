import { Link, Text } from "@radix-ui/themes";
import { Section } from "./section";

export function Hobbies() {
  return (
    <Section title="Hobbies">
      <Text as="p" size="3">
        Apart from IT, I love sports, especially basketball which I play for{" "}
        <Link
          href="http://basket.ub.cz"
          target="_blank"
          rel="noopener noreferrer"
        >
          BK TJ Spartak Uherský Brod
        </Link>
        .
      </Text>
    </Section>
  );
}
