import type { Metadata } from "next";
import Link from "next/link";
import { copy } from "@/content/site-copy";
import { links } from "@/config/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { client } from "@/sanity/lib/client";
import { toolkitResourcesQuery } from "@/sanity/lib/queries";
import type { ToolkitResourceCard } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: copy.educators.title,
  description: copy.educators.lead,
  alternates: { canonical: "/educators" },
};

export const revalidate = 60;

export default async function EducatorsPage() {
  let resources: ToolkitResourceCard[] = [];
  try {
    const all = await client.fetch<ToolkitResourceCard[]>(toolkitResourcesQuery);
    resources = all.slice(0, 6);
  } catch (error) {
    console.error("EducatorsPage", { error });
  }

  return (
    <div className="phase1">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: copy.educators.title, path: "/educators" },
        ]}
      />
      <Section labelledBy="educators-title">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: copy.educators.title }]} />
          <h1 id="educators-title" style={{ marginTop: "1rem" }}>
            {copy.educators.title}
          </h1>
          <p className="lead" style={{ marginTop: "1rem" }}>
            {copy.educators.lead}
          </p>
        </Container>
      </Section>
      <Section alt id="grouping" labelledBy="grouping-title">
        <Container>
          <h2 id="grouping-title">Grouping kit</h2>
          {links.groupingKit ? (
            <p style={{ marginTop: "1rem" }}>
              <Button href={links.groupingKit}>Download the grouping kit</Button>
            </p>
          ) : (
            <p style={{ marginTop: "1rem" }}>{copy.educators.groupingSoon}</p>
          )}
        </Container>
      </Section>
      <Section labelledBy="toolkit-title">
        <Container>
          <h2 id="toolkit-title">Teacher toolkit</h2>
          <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }} className="edu-grid">
            {resources.map((resource) => (
              <Card key={resource._id}>
                <h3>
                  <Link href={`/educators/toolkit/${resource.slug.current}`}>{resource.title}</Link>
                </h3>
                <p>{resource.excerpt}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      {links.tpt ? (
        <Section alt id="tpt">
          <Container>
            <h2>Teachers Pay Teachers</h2>
            <p style={{ marginTop: "0.75rem" }}>{copy.educators.tpt}</p>
            <p style={{ marginTop: "1rem" }}>
              <Button href={links.tpt} variant="secondary">
                Visit the store
              </Button>
            </p>
          </Container>
        </Section>
      ) : null}
      <style>{`
        @media (min-width: 800px) {
          .edu-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}
