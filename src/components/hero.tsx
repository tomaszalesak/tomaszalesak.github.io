import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

export function Hero() {
  return (
    <Flex align="center" gap="5">
      <Image
        src="/portrait.jpeg"
        alt="Tomáš Zálešák"
        width={100}
        height={100}
        className="rounded-full"
        priority
      />
      <div>
        <Heading as="h1" size="7">
          Tomáš Zálešák
        </Heading>
        <Text as="p" size="3" color="gray" mt="1">
          Senior software engineer based in the EU (CET).
        </Text>
      </div>
    </Flex>
  );
}
