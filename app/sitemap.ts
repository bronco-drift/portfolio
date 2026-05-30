import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date("2026-05-30");

  const root: MetadataRoute.Sitemap[number] = {
    url: `${base}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
  };

  const work: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [root, ...work];
}
