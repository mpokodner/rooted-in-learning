import type { Metadata } from "next";
import Link from "next/link";
import { copy } from "@/content/site-copy";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: copy.partner.title,
  description: copy.partner.lead,
  alternates: { canonical: "/partner" },
};

export default function PartnerPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: copy.partner.title, path: "/partner" },
        ]}
      />
      <section className="section hero" aria-labelledby="partner-title">
        <div className="container">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: copy.partner.title }]} />
          <div className="section-head reveal mt-3" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">Partnership</span>
            <h1 id="partner-title" className="display mt-3">
              {copy.partner.title}
            </h1>
            <p className="lead mt-3">{copy.partner.lead}</p>
            <div className="btn-row mt-4">
              <Link href="/contact?intent=audit" className="btn btn-terra btn-lg" data-track="audit_cta_click" data-track-location="partner_hero" data-track-category="rooted_audit">
                Request a Rooted Audit conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--beige">
        <div className="container">
          <div className="grid grid-3">
            <article className="card card--hover reveal">
              <h3>Fit</h3>
              <p>We start with your assessment stack, your grouping practice, and whether a teacher-facing companion belongs beside them.</p>
            </article>
            <article className="card card--hover reveal">
              <h3>Agreements</h3>
              <p>{copy.partner.dpa}</p>
            </article>
            <article className="card card--hover reveal">
              <h3>Next step</h3>
              <p>No public price list. If we are a fit, we will talk through scope together.</p>
              <Link href="/contact?intent=audit" className="link-arrow mt-3" data-track="audit_cta_click" data-track-location="partner_next" data-track-category="rooted_audit">
                Request a Rooted Audit conversation
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="audit-title">
        <div className="container">
          <div className="section-head" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">Rooted Audit</span>
            <h2 id="audit-title" className="h-lg mt-3">A conversation about the system you already have</h2>
            <p className="lead mt-3">
              A Rooted Audit looks at your screener, diagnostics, adopted curriculum, and how evidence moves between benchmark windows — and where AlignED could sit beside them. It does not replace those tools.
            </p>
            <Link href="/contact?intent=audit" className="btn btn-terra mt-4" data-track="audit_cta_click" data-track-location="partner_audit" data-track-category="rooted_audit">
              Request a Rooted Audit conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
