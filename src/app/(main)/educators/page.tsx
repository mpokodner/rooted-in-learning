import type { Metadata } from "next";
import Link from "next/link";
import { copy } from "@/content/site-copy";
import { links } from "@/config/site";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { client } from "@/sanity/lib/client";
import { toolkitResourcesQuery } from "@/sanity/lib/queries";
import type { ToolkitResourceCard } from "@/sanity/lib/types";
import ToolkitCard from "@/components/learn/ToolkitCard";

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
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: copy.educators.title, path: "/educators" },
        ]}
      />
      <section className="section hero" aria-labelledby="educators-title">
        <div className="container">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: copy.educators.title }]} />
          <div className="section-head reveal mt-3" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">Classroom</span>
            <h1 id="educators-title" className="display mt-3">
              {copy.educators.title}
            </h1>
            <p className="lead mt-3">{copy.educators.lead}</p>
          </div>
        </div>
      </section>

      <section className="section section--beige" id="grouping" aria-labelledby="grouping-title">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Coming next</span>
              <h2 id="grouping-title" className="h-lg mt-3">
                Grouping kit
              </h2>
              <p className="lead mt-3">{links.groupingKit ? copy.educators.lead : copy.educators.groupingSoon}</p>
            </div>
            <div className="btn-row" style={{ alignItems: "center" }}>
              {links.groupingKit ? (
                <a href={links.groupingKit} className="btn btn-primary">
                  Download the grouping kit
                </a>
              ) : (
                <Link href="/contact" className="btn btn-outline">
                  Request a conversation
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="toolkit-title">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Toolkit</span>
            <h2 id="toolkit-title" className="h-lg mt-3">
              Teacher toolkit
            </h2>
          </div>
          <div className="grid grid-2 mt-4">
            {resources.map((resource) => (
              <ToolkitCard
                key={resource._id}
                resource={resource}
                hrefPrefix="/educators/toolkit"
              />
            ))}
          </div>
        </div>
      </section>

      {links.tpt ? (
        <section className="section section--beige" id="tpt">
          <div className="container">
            <span className="eyebrow">Shop</span>
            <h2 className="h-lg mt-3">Teachers Pay Teachers</h2>
            <p className="lead mt-3">{copy.educators.tpt}</p>
            <a href={links.tpt} className="btn btn-outline mt-4" rel="noopener noreferrer">
              Visit the store
            </a>
          </div>
        </section>
      ) : null}
    </>
  );
}
