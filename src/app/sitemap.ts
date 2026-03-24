import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-03-24"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
