import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const SITE_URL = "https://www.therootedlearner.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/shop`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/learn`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/learn/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/learn/teacher-toolkit`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tools/assessalign`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/ai-ethics`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  let blogPages: MetadataRoute.Sitemap = [];
  let toolkitPages: MetadataRoute.Sitemap = [];

  try {
    const blogPosts = await client.fetch<
      { slug: string; publishedAt: string }[]
    >(`*[_type == "blogPost" && status == "published"]{ "slug": slug.current, publishedAt }`);

    blogPages = blogPosts.map((post) => ({
      url: `${SITE_URL}/learn/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // Sanity fetch failed — continue with static pages only
  }

  try {
    const toolkitResources = await client.fetch<
      { slug: string; publishedAt: string }[]
    >(`*[_type == "toolkitResource" && status == "published"]{ "slug": slug.current, publishedAt }`);

    toolkitPages = toolkitResources.map((resource) => ({
      url: `${SITE_URL}/learn/teacher-toolkit/${resource.slug}`,
      lastModified: new Date(resource.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // Sanity fetch failed — continue with static pages only
  }

  return [...staticPages, ...blogPages, ...toolkitPages];
}
