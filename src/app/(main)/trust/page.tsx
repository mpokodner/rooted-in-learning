import type { Metadata } from "next";
import Link from "next/link";
import "../legal.css";

export const metadata: Metadata = {
  title: "Data & trust",
  description: "What The Rooted Learner collects on this website, and what has to happen before any student information is shared.",
  alternates: { canonical: "/trust" },
};

export default function TrustPage() {
  return (
    <div>
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <h1 className="legal-hero-title">Data & trust</h1>
          <p className="legal-hero-subtitle">
            Adult professional contact on this website. Student information only after a district agrees to the scope.
          </p>
        </div>
      </section>
      <section className="legal-body">
        <div className="legal-container">
          <div className="legal-section">
            <h2 className="legal-section-title">This website</h2>
            <ul className="legal-list">
              <li>Website forms collect adult professional contact information only.</li>
              <li>Please do not submit student information through this website.</li>
              <li>The Rooted Learner does not ask visitors to upload student records.</li>
              <li>We use what you submit to respond to your request, send a guide you asked for, or contact you about a list you joined.</li>
            </ul>
          </div>
          <div className="legal-section">
            <h2 className="legal-section-title">AlignED</h2>
            <ul className="legal-list">
              <li>AlignED is being designed with student-data protection and educator oversight in mind.</li>
              <li>Early conversations and demonstrations use sample or adult-provided information.</li>
              <li>Before any district shares student information, we will agree on the purpose, data scope, access, and applicable privacy terms.</li>
              <li>Any future use of student information will be scoped with the district before implementation.</li>
            </ul>
            <p className="legal-text">
              This page does not say that AlignED is certified, validated, or already approved by a district.
            </p>
          </div>
          <div className="legal-contact">
            <h3 className="legal-contact-title">Questions</h3>
            <p>
              Email <a href="mailto:admin@therootedlearner.com">admin@therootedlearner.com</a> or use the <Link href="/contact">contact form</Link>.
              The longer policy is on the <Link href="/privacy">privacy page</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
