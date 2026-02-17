import { Link } from "@radix-ui/themes";
import type { ComponentProps } from "react";

type ExternalLinkProps = Omit<ComponentProps<typeof Link>, "target" | "rel">;

export function ExternalLink({
  children,
  underline = "always",
  ...props
}: ExternalLinkProps) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      underline={underline}
      {...props}
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </Link>
  );
}
