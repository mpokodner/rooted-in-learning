import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

/**
 * Sanity CMS client configuration.
 * Used to fetch blog posts and other CMS-managed content.
 * NOTE: Set up your Sanity project at sanity.io and add env vars.
 */
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

// Image URL builder for Sanity-hosted images
const builder = imageUrlBuilder(sanityClient);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
