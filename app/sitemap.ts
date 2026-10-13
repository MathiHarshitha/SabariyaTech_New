import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { team } from "@/data/pages";

type SitemapEntry = {
  url: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticPages: SitemapEntry[] = [
  { url: "",                    changeFrequency: "weekly",  priority: 1.0 },
  { url: "/services",           changeFrequency: "monthly", priority: 0.9 },
  { url: "/contact",            changeFrequency: "yearly",  priority: 0.9 },
  { url: "/projects",           changeFrequency: "monthly", priority: 0.8 },
  { url: "/products",           changeFrequency: "monthly", priority: 0.8 },
  { url: "/about",              changeFrequency: "yearly",  priority: 0.7 },
  { url: "/team",               changeFrequency: "monthly", priority: 0.7 },
  { url: "/careers",            changeFrequency: "weekly",  priority: 0.6 },
  { url: "/privacy-policy",     changeFrequency: "yearly",  priority: 0.3 },
  { url: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticPages.map(({ url, changeFrequency, priority }) => ({
      url: `${site.url}${url}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...team.map((m) => ({
      url: `${site.url}/team/${m.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
