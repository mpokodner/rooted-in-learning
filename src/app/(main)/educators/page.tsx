import type { Metadata } from "next";
import { copy } from "@/content/site-copy";
import { links } from "@/config/site";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import NewsletterForm from "@/components/NewsletterForm";
import { client } from "@/sanity/lib/client";
import { toolkitResourcesQuery } from "@/sanity/lib/queries";
import type { ToolkitResourceCard } from "@/sanity/lib/types";
import ToolkitCard from "@/components/learn/ToolkitCard";
import "./educators.css";

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

      <section className="section section--beige" id="start" aria-labelledby="guide-title">
        <div className="container">
          <div className="grid grid-2">
            <article className="card reveal">
              <span className="eyebrow">Download</span>
              <h2 id="guide-title" className="h-lg mt-3">
                {copy.educators.guideTitle}
              </h2>
              <p className="lead mt-3">{copy.educators.guideBody}</p>
              <NewsletterForm
                source="educators-guide"
                buttonText="Get the Claude AI and Cowork guide"
                sendFreebie
                formClassName="educators-guide-form"
                inputClassName="educators-guide-input"
                buttonClassName="btn btn-terra btn-lg"
                trackStart="guide_cta_click"
                trackSubmit="guide_signup"
                trackLocation="educators_guide"
              />
              <p className="muted mt-3">{copy.forms.studentNotice}</p>
            </article>

            <article className="card reveal" id="tpt">
              <span className="eyebrow">Shop</span>
              <h2 className="h-lg mt-3">{copy.educators.tptTitle}</h2>
              <p className="lead mt-3">{copy.educators.tpt}</p>
              <a
                href={links.tpt}
                className="btn btn-outline btn-lg mt-4"
                target="_blank"
                rel="noopener noreferrer"
                data-track="tpt_outbound_click"
                data-track-location="educators"
                data-track-category="tpt"
              >
                Browse Free + Paid Resources on TpT
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="coming-soon-title">
        <div className="container">
          <div className="section-head" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">{copy.educators.comingSoonTitle}</span>
            <h2 id="coming-soon-title" className="h-lg mt-3">
              Instructional videos and paid products
            </h2>
            <p className="muted mt-3">{copy.educators.comingSoonBody}</p>
          </div>
        </div>
      </section>

      <section className="section section--beige" aria-labelledby="toolkit-title">
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
    </>
  );
}
