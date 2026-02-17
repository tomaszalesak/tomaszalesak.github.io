import { Box, Heading } from "@radix-ui/themes";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <Box asChild mt="7">
      <section>
        <Heading as="h2" size="5" mb="3">
          {title}
        </Heading>
        {children}
      </section>
    </Box>
  );
}
