import type { MetadataRoute } from "next";
import { flags } from "@/config/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.therootedlearner.com";

export default function robots(): MetadataRoute.Robots {
  const disallow = [
    "/account/",
    "/admin/",
    "/api/",
    "/cart",
    "/checkout",
    "/confirmation",
    "/studio",
    "/studio/",
    "/_kit",
    "/_kit/",
    "/links",
    "/links/",
    "/_next/",
  ];

  if (!flags.hallpassPublic) {
    disallow.push("/for-districts/hallpass");
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
      {
        userAgent: "Google-Extended",
        disallow: ["/"],
      },
      {
        userAgent: "anthropic-ai",
        disallow: ["/"],
      },
      {
        userAgent: "Bytespider",
        disallow: ["/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
