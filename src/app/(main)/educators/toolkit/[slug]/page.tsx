import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { toolkitResourceBySlugQuery } from "@/sanity/lib/queries";
import type { ToolkitResource } from "@/sanity/lib/types";
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
    const resource = await client.fetch<ToolkitResource | null>(toolkitResourceBySlugQuery, { slug });
    if (!resource) return { title: "Toolkit" };
    return {
      title: resource.title,
      description: resource.excerpt,
      alternates: { canonical: `/educators/toolkit/${slug}` },
    };
  } catch (error) {
    console.error("educators toolkit metadata", { error });
    return { title: "Toolkit" };
  }
}

export default async function EducatorsToolkitSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const resource = await client.fetch<ToolkitResource | null>(toolkitResourceBySlugQuery, { slug });
    if (!resource) notFound();

    return (
      <div className="phase1">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", path: "/" },
            { name: "For educators", path: "/educators" },
            { name: resource.title, path: `/educators/toolkit/${slug}` },
          ]}
        />
        <Section>
          <Container narrow>
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/educators", label: "For educators" },
                { label: resource.title },
              ]}
            />
            <h1 style={{ marginTop: "1rem" }}>{resource.title}</h1>
            <p className="lead" style={{ marginTop: "1rem" }}>
              {resource.excerpt}
            </p>
            {resource.body ? (
              <div style={{ marginTop: "1.5rem" }}>
                <RichText content={resource.body} />
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
    console.error("EducatorsToolkitSlugPage", { error });
    notFound();
  }
}
