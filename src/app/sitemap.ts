import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { flags } from "@/config/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.therootedlearner.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/aligned`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/partner`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/educators`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/insights`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/ai-ethics`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  if (flags.hallpassPublic) {
    staticPages.push({
      url: `${SITE_URL}/for-districts/hallpass`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  let blogPages: MetadataRoute.Sitemap = [];
  let toolkitPages: MetadataRoute.Sitemap = [];

  try {
    const blogPosts = await client.fetch<{ slug: string; publishedAt: string }[]>(
      `*[_type == "blogPost" && status == "published"]{ "slug": slug.current, publishedAt }`
    );

    blogPages = blogPosts.map((post) => ({
      url: `${SITE_URL}/insights/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }));
  } catch (error) {
    console.error("sitemap.blog", { error });
  }

  try {
    const toolkitResources = await client.fetch<{ slug: string; publishedAt: string }[]>(
      `*[_type == "toolkitResource" && status == "published"]{ "slug": slug.current, publishedAt }`
    );

    toolkitPages = toolkitResources.map((resource) => ({
      url: `${SITE_URL}/educators/toolkit/${resource.slug}`,
      lastModified: new Date(resource.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    }));
  } catch (error) {
    console.error("sitemap.toolkit", { error });
  }

  return [...staticPages, ...blogPages, ...toolkitPages];
}
