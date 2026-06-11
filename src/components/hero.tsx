import { Badge, Button, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { contactLinks } from "@/data/content";

export function Hero() {
  return (
    <Flex direction="column" gap="5">
      <Flex align="center" gap="5">
        <Image
          src="/portrait.webp"
          alt="Tomáš Zálešák"
          width={100}
          height={100}
          className="rounded-full w-25 h-25 ring-2 ring-(--gray-a5)"
          priority
        />
        <div>
          <Heading as="h1" size={{ initial: "7", sm: "8" }}>
            Tomáš Zálešák
          </Heading>
          <Text as="p" size="3" color="gray" mt="1">
            Senior software engineer based in the EU (CET).
          </Text>
          <Badge color="green" variant="soft" size="2" mt="2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-(--green-9)"
            />
            {"Available for freelance projects"}
          </Badge>
        </div>
      </Flex>
      <Flex gap="2" wrap="wrap">
        {contactLinks.map((link) => (
          <Button
            key={link.label}
            asChild
            size="2"
            variant={link.label === "Email" ? "solid" : "soft"}
          >
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : (
              <a href={link.href}>{link.label}</a>
            )}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
}
