import { Link, Table } from "@radix-ui/themes";
import { contactLinks } from "@/data/content";
import { ExternalLink } from "./external-link";
import { Section } from "./section";

export function Contact() {
  return (
    <Section title="Contact">
      <Table.Root variant="ghost" size="2">
        <Table.Body>
          {contactLinks.map((link) => (
            <Table.Row key={link.label}>
              <Table.RowHeaderCell width="120px">
                {link.label}
              </Table.RowHeaderCell>
              <Table.Cell>
                {link.external ? (
                  <ExternalLink href={link.href}>{link.text}</ExternalLink>
                ) : (
                  <Link href={link.href} underline="always">
                    {link.text}
                  </Link>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Section>
  );
}
