import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.therootedlearner.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    // Core pages
    { url: `${SITE_URL}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Products
    { url: `${SITE_URL}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/products/assessalign`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/products/lessons`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/products/teacher-tools`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Resources
    { url: `${SITE_URL}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/resources/recommended-tools`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Services
    { url: `${SITE_URL}/services/consulting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Audience-specific
    { url: `${SITE_URL}/parents`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Legal & trust
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/ai-ethics`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // ─── Dynamic Blog Posts (uncomment when blog_posts table is populated) ───
  // const supabase = createServerSupabaseClient();
  // const { data: posts } = await supabase
  //   .from("blog_posts")
  //   .select("slug, updated_at")
  //   .eq("published", true);
  //
  // const blogPages: MetadataRoute.Sitemap = (posts || []).map((post) => ({
  //   url: `${SITE_URL}/blog/${post.slug}`,
  //   lastModified: new Date(post.updated_at),
  //   changeFrequency: "weekly" as const,
  //   priority: 0.7,
  // }));

  return [
    ...staticPages,
    // ...blogPages,
  ];
}
