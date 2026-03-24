import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.tomaszalesak.eu",
      lastModified: new Date("2026-03-24"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
