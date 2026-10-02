import type { Metadata } from "next";
import { copy } from "@/content/site-copy";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: copy.partner.title,
  description: copy.partner.lead,
  alternates: { canonical: "/partner" },
};

export default function PartnerPage() {
  return (
    <div className="phase1">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: copy.partner.title, path: "/partner" },
        ]}
      />
      <Section labelledBy="partner-title">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: copy.partner.title }]} />
          <h1 id="partner-title" style={{ marginTop: "1rem" }}>
            {copy.partner.title}
          </h1>
          <p className="lead" style={{ marginTop: "1rem", maxWidth: "54ch" }}>
            {copy.partner.lead}
          </p>
        </Container>
      </Section>
      <Section alt>
        <Container>
          <div style={{ display: "grid", gap: "1rem" }} className="partner-grid">
            <Card>
              <h2>Fit</h2>
              <p>We start with your assessment stack, your grouping practice, and whether a teacher-facing companion belongs beside them.</p>
            </Card>
            <Card>
              <h2>Agreements</h2>
              <p>{copy.partner.dpa}</p>
            </Card>
            <Card>
              <h2>Next step</h2>
              <p>No public price list. If we are a fit, we will talk through scope together.</p>
              <p style={{ marginTop: "1rem" }}>
                <Button href="/contact">Request a conversation</Button>
              </p>
            </Card>
          </div>
        </Container>
      </Section>
      <style>{`
        @media (min-width: 900px) {
          .partner-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </div>
  );
}
