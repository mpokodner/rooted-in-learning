import type { Metadata } from "next";
import Link from "next/link";
import { copy } from "@/content/site-copy";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import "./about.css";

export const metadata: Metadata = {
  title: copy.about.title,
  description: copy.about.lead,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: copy.about.title, path: "/about" },
        ]}
      />
      <section className="about-hero">
        <div className="about-hero-bg" aria-hidden="true">
          <div className="about-hero-circle about-hero-circle--1" />
          <div className="about-hero-circle about-hero-circle--2" />
        </div>
        <div className="about-hero-container">
          <p className="about-hero-badge">The Rooted Learner</p>
          <h1 className="about-hero-title">
            {copy.about.title}
          </h1>
          <p className="about-hero-desc">{copy.about.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: copy.about.title }]} />
          <div className="section-head mt-4" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">The work</span>
            <h2 className="h-lg mt-3">{copy.about.lead}</h2>
            <p className="lead mt-3">{copy.about.story}</p>
            <div className="btn-row mt-4">
              <Link href="/contact" className="btn btn-terra btn-lg">
                Request a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
