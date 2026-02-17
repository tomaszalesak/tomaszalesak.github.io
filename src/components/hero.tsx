import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

export function Hero() {
  return (
    <Flex align="center" gap="5">
      <Image
        src="/portrait.webp"
        alt="Tomáš Zálešák"
        width={200}
        height={200}
        className="rounded-full w-[100px] h-[100px]"
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
