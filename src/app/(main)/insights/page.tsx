import type { Metadata } from "next";
import { copy } from "@/content/site-copy";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import type { BlogPostCard } from "@/sanity/lib/types";
import BlogCard, { BlogFeaturedCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: copy.insights.title,
  description: copy.insights.lead,
  alternates: { canonical: "/insights" },
};

export const revalidate = 60;

export default async function InsightsPage() {
  let posts: BlogPostCard[] = [];
  try {
    posts = await client.fetch<BlogPostCard[]>(blogPostsQuery);
  } catch (error) {
    console.error("InsightsPage", { error });
  }

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: copy.insights.title, path: "/insights" },
        ]}
      />
      <section className="section hero" aria-labelledby="insights-title">
        <div className="container">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: copy.insights.title }]} />
          <div className="section-head reveal mt-3" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">Field notes</span>
            <h1 id="insights-title" className="display mt-3">
              {copy.insights.title}
            </h1>
            <p className="lead mt-3">{copy.insights.lead}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {featured ? (
            <div className="mt-2">
              <BlogFeaturedCard post={featured} hrefPrefix="/insights" />
            </div>
          ) : null}
          {rest.length > 0 ? (
            <div className="grid grid-3 mt-4">
              {rest.map((post) => (
                <BlogCard key={post._id} post={post} hrefPrefix="/insights" />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
