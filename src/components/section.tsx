import { useId } from "react";
import { Box, Heading } from "@radix-ui/themes";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  const headingId = useId();
  return (
    <Box asChild mt="7">
      <section aria-labelledby={headingId}>
        <Heading as="h2" size="5" mb="3" id={headingId}>
          {title}
        </Heading>
        {children}
      </section>
    </Box>
  );
}
