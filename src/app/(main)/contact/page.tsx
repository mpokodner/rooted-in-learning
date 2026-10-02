import type { Metadata } from "next";
import { copy } from "@/content/site-copy";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: copy.contact.title,
  description: copy.contact.lead,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="phase1">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: copy.contact.title, path: "/contact" },
        ]}
      />
      <Section labelledBy="contact-title">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: copy.contact.title }]} />
          <h1 id="contact-title" style={{ marginTop: "1rem" }}>
            {copy.contact.title}
          </h1>
          <p className="lead" style={{ marginTop: "1rem" }}>
            {copy.contact.lead}
          </p>
          <div style={{ marginTop: "2rem" }}>
            <ContactForm />
          </div>
        </Container>
      </Section>
    </div>
  );
}
