import type { PrincipleIcon, ServiceIcon } from "@/data/content";

interface IconProps {
  size?: number;
}

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CheckIcon({ size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      aria-hidden="true"
      {...base}
      strokeWidth={2.25}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

const serviceIcons: Record<ServiceIcon, React.ReactNode> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  distributed: (
    <>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M12 7v3m0 0L6 17m6-7l6 7" />
    </>
  ),
  data: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
};

const principleIcons: Record<PrincipleIcon, React.ReactNode> = {
  cicd: (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </>
  ),
  scale: (
    <>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9.5 12l2 2 3.5-3.5" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.5M21 20a6 6 0 0 0-5-5.9" />
    </>
  ),
};

export function ServiceGlyph({
  icon,
  size = 22,
}: IconProps & { icon: ServiceIcon }) {
  return (
    <svg width={size} height={size} aria-hidden="true" {...base}>
      {serviceIcons[icon]}
    </svg>
  );
}

export function PrincipleGlyph({
  icon,
  size = 20,
}: IconProps & { icon: PrincipleIcon }) {
  return (
    <svg width={size} height={size} aria-hidden="true" {...base}>
      {principleIcons[icon]}
    </svg>
  );
}
