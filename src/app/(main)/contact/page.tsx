import type { Metadata } from "next";
import { copy } from "@/content/site-copy";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ContactForm from "./ContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: copy.contact.title,
  description: copy.contact.lead,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: copy.contact.title, path: "/contact" },
        ]}
      />
      <section className="ct-hero">
        <div className="ct-hero-bg" aria-hidden="true">
          <div className="ct-hero-orb ct-hero-orb--1" />
          <div className="ct-hero-orb ct-hero-orb--2" />
        </div>
        <div className="ct-container ct-hero-content">
          <p className="ct-hero-label">The Rooted Learner</p>
          <h1 className="ct-hero-title">{copy.contact.title}</h1>
          <p className="ct-hero-desc">{copy.contact.lead}</p>
        </div>
      </section>

      <section className="ct-main">
        <div className="ct-container">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: copy.contact.title }]} />
          <div className="ct-form-card mt-4">
            <div className="ct-form-header">
              <h2 className="ct-form-title">Tell us who you are</h2>
              <p className="ct-form-desc">{copy.contact.lead}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
