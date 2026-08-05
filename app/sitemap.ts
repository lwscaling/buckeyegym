import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://buckeyegym.com", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://buckeyegym.com/privacy", lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: "https://buckeyegym.com/terms", lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
