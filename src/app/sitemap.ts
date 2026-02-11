import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rootedinlearning.com";

/**
 * Dynamic sitemap generator.
 * Next.js will serve this as /sitemap.xml automatically.
 * Add dynamic blog post and product URLs here once those tables are populated.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ─── Static Pages ───
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/consulting`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/consulting/assessalign`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/shop`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/resources/lessons`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/resources/tech-tips`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/resources/favorites`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  // ─── Dynamic Blog Posts (uncomment when blog_posts table exists) ───
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

  // ─── Dynamic Products (uncomment when products table exists) ───
  // const { data: products } = await supabase
  //   .from("products")
  //   .select("slug, updated_at")
  //   .eq("active", true);
  //
  // const productPages: MetadataRoute.Sitemap = (products || []).map((product) => ({
  //   url: `${SITE_URL}/shop/${product.slug}`,
  //   lastModified: new Date(product.updated_at),
  //   changeFrequency: "weekly" as const,
  //   priority: 0.7,
  // }));

  return [
    ...staticPages,
    // ...blogPages,
    // ...productPages,
  ];
}
