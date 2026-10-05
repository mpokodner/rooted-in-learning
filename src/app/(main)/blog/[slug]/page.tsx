import type { Metadata } from "next";
import Link from "next/link";
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
    if (!post) return { title: "Blog" };
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `/blog/${slug}` },
    };
  } catch (error) {
    console.error("insights metadata", { error });
    return { title: "Blog" };
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
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]}
        />
        <Section>
          <Container narrow>
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
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
            <p style={{ marginTop: "2rem" }}>
              <Link href="/educators#start" className="btn btn-terra">
                Get the Claude AI and Cowork guide
              </Link>
            </p>
          </Container>
        </Section>
      </div>
    );
  } catch (error) {
    console.error("InsightsSlugPage", { error });
    notFound();
  }
}
