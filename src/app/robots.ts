import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rootedinlearning.com";

/**
 * robots.txt configuration.
 * Next.js will serve this at /robots.txt automatically.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/account/",
          "/admin/",
          "/api/",
          "/login",
          "/register",
          "/forgot-password",
          "/cart",
          "/checkout",
          "/confirmation",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
