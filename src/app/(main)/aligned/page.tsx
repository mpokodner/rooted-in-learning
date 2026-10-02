import type { Metadata } from "next";
import { copy } from "@/content/site-copy";
import { flags, PRODUCT_NAME } from "@/config/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Notice from "@/components/ui/Notice";
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
    <div className="phase1">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: PRODUCT_NAME, path: "/aligned" },
        ]}
      />
      <Section labelledBy="aligned-title">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: PRODUCT_NAME }]} />
          {flags.alignedRedirects ? <Notice>{copy.aligned.notice}</Notice> : null}
          <h1 id="aligned-title" style={{ marginTop: "1rem" }}>
            {copy.aligned.title}
          </h1>
          <p className="lead" style={{ marginTop: "1rem" }}>
            {copy.aligned.lead}
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            <Button href="/contact" track="cta_aligned_page">
              Request a conversation
            </Button>
          </p>
        </Container>
      </Section>
      <Section alt labelledBy="aligned-what">
        <Container>
          <h2 id="aligned-what">{copy.aligned.whatTitle}</h2>
          <p style={{ marginTop: "1rem", maxWidth: "60ch" }}>{copy.aligned.whatBody}</p>
          <div style={{ marginTop: "2rem" }}>
            <FakeDataPanels />
          </div>
        </Container>
      </Section>
      <Section labelledBy="aligned-not">
        <Container>
          <h2 id="aligned-not">{copy.aligned.notTitle}</h2>
          <p style={{ marginTop: "1rem", maxWidth: "60ch" }}>{copy.aligned.notBody}</p>
          <div style={{ marginTop: "2rem" }}>
            <RegroupDiagram />
          </div>
        </Container>
      </Section>
    </div>
  );
}
