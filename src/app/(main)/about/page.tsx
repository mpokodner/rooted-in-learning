import type { Metadata } from "next";
import { copy } from "@/content/site-copy";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import BotanicalPortrait from "@/components/aligned/BotanicalPortrait";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: copy.about.title,
  description: copy.about.lead,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="phase1">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: copy.about.title, path: "/about" },
        ]}
      />
      <Section labelledBy="about-title">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: copy.about.title }]} />
          <div style={{ display: "grid", gap: "2rem", marginTop: "1rem" }} className="about-grid">
            <div>
              <h1 id="about-title">{copy.about.title}</h1>
              <p className="lead" style={{ marginTop: "1rem" }}>
                {copy.about.lead}
              </p>
              <p style={{ marginTop: "1rem", maxWidth: "60ch" }}>{copy.about.story}</p>
              <p style={{ marginTop: "1.5rem" }}>
                <Button href="/contact">Request a conversation</Button>
              </p>
            </div>
            <BotanicalPortrait />
          </div>
        </Container>
      </Section>
      <style>{`
        @media (min-width: 800px) {
          .about-grid { grid-template-columns: 1.2fr 0.8fr; align-items: center; }
        }
      `}</style>
    </div>
  );
}
