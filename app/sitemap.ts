import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { team } from "@/data/pages";

const pages = ["", "/about", "/services", "/products", "/projects", "/team", "/careers", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...team.map((m) => ({ url: `${site.url}/team/${m.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
