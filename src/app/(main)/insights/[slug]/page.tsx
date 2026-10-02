import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { blogPostBySlugQuery } from "@/sanity/lib/queries";
import type { BlogPost } from "@/sanity/lib/types";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import RichText from "@/components/shared/RichText";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await client.fetch<BlogPost | null>(blogPostBySlugQuery, { slug });
    if (!post) return { title: "Insights" };
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `/insights/${slug}` },
    };
  } catch (error) {
    console.error("insights metadata", { error });
    return { title: "Insights" };
  }
}

export default async function InsightsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const post = await client.fetch<BlogPost | null>(blogPostBySlugQuery, { slug });
    if (!post) notFound();

    return (
      <div className="phase1">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: post.title, path: `/insights/${slug}` },
          ]}
        />
        <Section>
          <Container narrow>
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/insights", label: "Insights" },
                { label: post.title },
              ]}
            />
            <h1 style={{ marginTop: "1rem" }}>{post.title}</h1>
            {post.excerpt ? <p className="lead" style={{ marginTop: "1rem" }}>{post.excerpt}</p> : null}
            {post.body ? (
              <div style={{ marginTop: "1.5rem" }}>
                <RichText content={post.body} />
              </div>
            ) : null}
          </Container>
        </Section>
      </div>
    );
  } catch (error) {
    console.error("InsightsSlugPage", { error });
    notFound();
  }
}
