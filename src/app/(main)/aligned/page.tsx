import type { Metadata } from "next";
import Link from "next/link";
import { copy } from "@/content/site-copy";
import { PRODUCT_NAME } from "@/config/site";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FakeDataPanels from "@/components/aligned/FakeDataPanels";
import RegroupDiagram from "@/components/aligned/RegroupDiagram";

export const metadata: Metadata = {
  title: PRODUCT_NAME,
  description: copy.aligned.lead,
  alternates: { canonical: "/aligned" },
};

export default function AlignedPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: PRODUCT_NAME, path: "/aligned" },
        ]}
      />
      <section className="section hero" aria-labelledby="aligned-title">
        <div className="container">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: PRODUCT_NAME }]} />
          <p className="chip mt-3" role="note">
            {copy.aligned.notice}
          </p>
          <div className="section-head reveal mt-3" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">{PRODUCT_NAME}</span>
            <h1 id="aligned-title" className="display mt-3">
              {PRODUCT_NAME}
            </h1>
            <p className="lead mt-3">{copy.aligned.lead}</p>
            <div className="btn-row mt-4">
              <Link href="/contact" className="btn btn-terra btn-lg" data-track="cta_aligned_page">
                Request a conversation
              </Link>
              <Link href="/partner" className="btn btn-outline btn-lg">
                For schools and districts
              </Link>
              <Link href="/aligned/pilot" className="btn btn-outline btn-lg" data-track="pilot_cta_click" data-track-location="aligned_page" data-track-category="aligned">
                Join the pilot interest list
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--beige" aria-labelledby="aligned-what">
        <div className="container">
          <div className="hero-grid">
            <div className="reveal">
              <span className="eyebrow">What it is</span>
              <h2 id="aligned-what" className="h-lg mt-3">
                {copy.aligned.whatTitle}
              </h2>
              <p className="mt-3" style={{ maxWidth: "54ch", color: "var(--text-muted)" }}>
                {copy.aligned.whatBody}
              </p>
            </div>
            <div className="card reveal">
              <FakeDataPanels />
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="aligned-not">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Boundaries</span>
            <h2 id="aligned-not" className="h-lg mt-3">
              {copy.aligned.notTitle}
            </h2>
            <p className="lead mt-3">{copy.aligned.notBody}</p>
          </div>
          <div className="mt-4 reveal">
            <RegroupDiagram />
          </div>
        </div>
      </section>
    </>
  );
}
