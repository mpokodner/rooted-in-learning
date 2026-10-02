import type { Metadata } from "next";
import Link from "next/link";
import { copy } from "@/content/site-copy";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import type { BlogPostCard } from "@/sanity/lib/types";

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

  return (
    <div className="phase1">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: copy.insights.title, path: "/insights" },
        ]}
      />
      <Section labelledBy="insights-title">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: copy.insights.title }]} />
          <h1 id="insights-title" style={{ marginTop: "1rem" }}>
            {copy.insights.title}
          </h1>
          <p className="lead" style={{ marginTop: "1rem" }}>
            {copy.insights.lead}
          </p>
          <div style={{ display: "grid", gap: "1rem", marginTop: "2rem" }}>
            {posts.map((post) => (
              <Card key={post._id}>
                <h2>
                  <Link href={`/insights/${post.slug.current}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
