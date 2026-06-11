import type { PrincipleIcon } from "@/data/content";

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
