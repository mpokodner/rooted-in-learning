"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./consulting.css";

const faqItems = [
  {
    question: "How does pricing work for school districts?",
    answer:
      "Pricing is scoped to the engagement. Every engagement starts with a system audit so I can provide an accurate proposal based on what's actually broken.",
  },
  {
    question: "Do you work with individual teachers?",
    answer:
      "My primary work is at the district and school level. For individual educators, I offer classroom tools and resources through the Training Hub.",
  },
  {
    question: "What's the typical engagement timeline?",
    answer:
      "The audit phase is typically 2–3 weeks. Build and implementation timelines depend on scope, ranging from 4 weeks to 3 months.",
  },
  {
    question: "Can you provide a proposal for my administration?",
    answer:
      "Yes. After the system audit, I deliver a scoped proposal with clear deliverables, timelines, and pricing you can bring to your leadership team.",
  },
  {
    question: "What about procurement and purchase orders?",
    answer:
      "I work with standard school district procurement processes. PO-based billing is available for institutional clients.",
  },
];

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
    subscribeNewsletter: false,
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          subject: "consulting",
          source: "services-page",
          subscribeNewsletter: formData.subscribeNewsletter,
        }),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", organization: "", message: "", subscribeNewsletter: false });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="svc-page">
      {/* ─── Hero ─── */}
      <section className="svc-hero" aria-labelledby="svc-heading">
        <Image
          src="/images/services-hero.png"
          alt="Interconnected technology and data systems network"
          fill
          priority
          className="svc-hero-bg-image"
        />
        <div className="container svc-hero-container">
          <div className="svc-hero-badge">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            <span>District Work</span>
          </div>
          <h1 id="svc-heading" className="svc-hero-title">
            Start with Diagnosis.
            <br />
            Not a Menu.
          </h1>
          <p className="svc-hero-desc">
            Most districts don&apos;t need another service offering. They need
            someone to diagnose where the system breaks and build what fixes
            it. Every engagement starts with an audit, because the
            solution depends on what&apos;s actually broken.
          </p>
          <div className="svc-hero-actions">
            <a href="#audit" className="svc-hero-cta-primary">
              Start with a System Audit
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <Link href="/tools/assessalign" className="svc-hero-cta-secondary">
              See Example Build Work
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Three-Phase Process ─── */}
      <section className="svc-process section" aria-labelledby="svc-process-heading">
        <div className="container">
          <div className="svc-process-header">
            <h2 id="svc-process-heading" className="svc-section-title">
              How Every Engagement Works
            </h2>
            <p className="svc-process-subtitle">
              No menus. No generic proposals. Every engagement follows the same
              diagnostic framework.
            </p>
          </div>

          <div className="svc-process-grid">
            <div id="audit" className="svc-process-step">
              <div className="svc-process-number-row">
                <div className="svc-process-number">1</div>
                <div className="svc-process-connector" aria-hidden="true" />
              </div>
              <h3 className="svc-process-step-title">System Audit</h3>
              <p className="svc-process-step-desc">
                I map where your curriculum, assessment, access, and technology
                systems break. This is the entry point for every engagement.
              </p>
              <div className="svc-process-step-actions">
                <Link href="/contact" className="svc-step-cta svc-step-cta--primary">
                  Book the Audit
                </Link>
                <Link href="/contact" className="svc-step-cta svc-step-cta--outline">
                  Request Scope &amp; Pricing
                </Link>
              </div>
            </div>

            <div className="svc-process-step">
              <div className="svc-process-number-row">
                <div className="svc-process-number">2</div>
                <div className="svc-process-connector" aria-hidden="true" />
              </div>
              <h3 className="svc-process-step-title">Build</h3>
              <p className="svc-process-step-desc">
                Based on what the audit reveals, I design and develop the
                solution. This might include curriculum and assessment
                alignment, multilingual learner access systems, technology
                integrations, or custom instructional tools.
              </p>
              <div className="svc-process-step-actions">
                <Link href="/tools/assessalign" className="svc-step-cta svc-step-cta--outline">
                  See What This Looks Like
                </Link>
                <a href="#audit" className="svc-step-cta svc-step-cta--text">
                  Start with an Audit
                </a>
              </div>
            </div>

            <div className="svc-process-step">
              <div className="svc-process-number-row">
                <div className="svc-process-number">3</div>
              </div>
              <h3 className="svc-process-step-title">Implement</h3>
              <p className="svc-process-step-desc">
                I support the solution until it works in real classrooms.
                Training, iteration, and ongoing refinement, because
                building it isn&apos;t enough if it doesn&apos;t function for
                the people using it.
              </p>
              <div className="svc-process-step-actions">
                <Link href="/contact" className="svc-step-cta svc-step-cta--outline">
                  Discuss Implementation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What the Audit May Reveal ─── */}
      <section className="svc-cards section" aria-labelledby="svc-reveals-heading">
        <div className="container">
          <h2 id="svc-reveals-heading" className="svc-section-title" style={{ marginBottom: "0.75rem" }}>
            Depending on What the Audit Reveals, I May Build:
          </h2>
          <div className="svc-cards-grid">
            {[
              {
                title: "Curriculum &amp; Assessment Alignment",
                desc: "Standards mapping, assessment redesign, and instructional coherence across grade bands.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              },
              {
                title: "Multilingual Learner Access Systems",
                desc: "WIDA-aligned overlays, scaffolding frameworks, and equitable access to core instruction.",
                icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
              },
              {
                title: "Technology Integrations",
                desc: "Making existing tools work together instead of adding new ones. Reducing tech burden, not increasing it.",
                icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
              },
              {
                title: "Custom Instructional Tools",
                desc: "Purpose-built applications that solve the specific problems your district faces. See AssessAlign as an example.",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
            ].map((svc) => (
              <div key={svc.title} className="svc-card">
                <div className="svc-card-icon">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={svc.icon}
                    />
                  </svg>
                </div>
                <h3
                  className="svc-card-title"
                  dangerouslySetInnerHTML={{ __html: svc.title }}
                />
                <p className="svc-card-desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Form ─── */}
      <section
        id="contact-form"
        className="svc-contact section"
        aria-labelledby="svc-contact-heading"
      >
        <div className="container">
          <div className="svc-contact-card">
            <div className="svc-contact-info">
              <h2 id="svc-contact-heading" className="svc-contact-title">
                Start the Conversation
              </h2>
              <p className="svc-contact-desc">
                Tell me what&apos;s breaking. I&apos;ll tell you what it takes
                to fix it.
              </p>
              <div className="svc-contact-details">
                <div className="svc-contact-detail">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>hello@therootedlearner.com</span>
                </div>
                <div className="svc-contact-detail">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <span>Available Nationwide (Remote &amp; On-site)</span>
                </div>
              </div>
            </div>

            <form className="svc-contact-form" onSubmit={handleSubmit}>
              <div className="svc-form-row">
                <div className="svc-form-field">
                  <label htmlFor="svc-first" className="svc-form-label">
                    First Name
                  </label>
                  <input
                    id="svc-first"
                    type="text"
                    className="svc-form-input"
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="svc-form-field">
                  <label htmlFor="svc-last" className="svc-form-label">
                    Last Name
                  </label>
                  <input
                    id="svc-last"
                    type="text"
                    className="svc-form-input"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="svc-form-field">
                <label htmlFor="svc-email" className="svc-form-label">
                  Email
                </label>
                <input
                  id="svc-email"
                  type="email"
                  className="svc-form-input"
                  placeholder="you@school.edu"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="svc-form-field">
                <label htmlFor="svc-org" className="svc-form-label">
                  School/Organization
                </label>
                <input
                  id="svc-org"
                  type="text"
                  className="svc-form-input"
                  placeholder="Lincoln Public Schools"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                />
              </div>
              <div className="svc-form-field">
                <label htmlFor="svc-msg" className="svc-form-label">
                  What&apos;s breaking in your system?
                </label>
                <textarea
                  id="svc-msg"
                  className="svc-form-textarea"
                  placeholder="Tell me what's not working..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  lineHeight: 1.5,
                }}
              >
                <input
                  type="checkbox"
                  checked={formData.subscribeNewsletter}
                  onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
                  style={{ marginTop: "0.2rem", accentColor: "var(--earth)" }}
                />
                Also sign me up for educator updates and free resources
              </label>
              <button
                type="submit"
                className="svc-form-submit"
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading" ? "Sending..." : "Start the Conversation"}
              </button>
              {formStatus === "success" && (
                <p className="svc-form-success">
                  Message sent! I&apos;ll be in touch soon.
                </p>
              )}
              {formStatus === "error" && (
                <p className="svc-form-error">
                  Something went wrong. Please try again.
                </p>
              )}
              <p className="svc-form-calendly">
                Or email me directly at{" "}
                <a href="mailto:hello@therootedlearner.com">
                  hello@therootedlearner.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="svc-faq section" aria-labelledby="svc-faq-heading">
        <div className="container">
          <div className="svc-faq-header">
            <h2 id="svc-faq-heading" className="svc-section-title">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="svc-faq-list">
            {faqItems.map((item) => (
              <div key={item.question} className="svc-faq-item">
                <h3 className="svc-faq-question">{item.question}</h3>
                <p className="svc-faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="svc-bottom-cta section">
        <div className="container" style={{ textAlign: "center" }}>
          <Link href="/contact" className="svc-hero-cta-primary">
            Start the Audit
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
