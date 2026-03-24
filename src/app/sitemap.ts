import { execSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/content";

export const dynamic = "force-static";

const lastCommitDate = new Date(
  execSync("git log -1 --format=%cI").toString().trim(),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: lastCommitDate,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
