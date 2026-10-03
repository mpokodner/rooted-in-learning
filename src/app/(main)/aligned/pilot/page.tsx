import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCT_NAME } from "@/config/site";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import PilotForm from "./PilotForm";
import "../../contact/contact.css";

export const metadata: Metadata = {
  title: `${PRODUCT_NAME} pilot interest`,
  description: `Ask to hear about ${PRODUCT_NAME} pilot conversations for grades 3–8 ELA. Adult contact information only.`,
  alternates: { canonical: "/aligned/pilot" },
};

export default function PilotPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: PRODUCT_NAME, path: "/aligned" },
          { name: "Pilot interest", path: "/aligned/pilot" },
        ]}
      />
      <section className="section hero" aria-labelledby="pilot-title">
        <div className="container">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/aligned", label: PRODUCT_NAME },
              { label: "Pilot interest" },
            ]}
          />
          <div className="section-head reveal mt-3" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">{PRODUCT_NAME}</span>
            <h1 id="pilot-title" className="display mt-3">Join the pilot interest list</h1>
            <p className="lead mt-3">
              {PRODUCT_NAME} is a standards-aligned grouping companion for grades 3–8 ELA. This list is for adult educators and district leaders who want to hear when pilot conversations open. It does not collect student records.
            </p>
          </div>
          <div className="card mt-4" style={{ maxWidth: "40rem" }}>
            <PilotForm />
          </div>
          <p className="mt-4">
            <Link href="/aligned">Back to {PRODUCT_NAME}</Link>
          </p>
        </div>
      </section>
    </>
  );
}
