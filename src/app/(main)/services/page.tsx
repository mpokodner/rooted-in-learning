"use client";

import { useState } from "react";
import Link from "next/link";
import "./consulting.css";

const services = [
  {
    title: "AI Integration Professional Development",
    description:
      "Equip your staff with the skills to leverage cutting-edge AI tools responsibly. We focus on ethical usage, prompt engineering for educators, and workflow automation to reclaim teacher time.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Curriculum Development & Mapping",
    description:
      "Custom curriculum overlays and standards alignment tailored to your district and/or school's individual needs. I specialize in designing rigorous, engaging instructional frameworks that bridge the gap between policy and practice.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Multilingual Learner & Equity Consulting",
    description:
      "WIDA-aligned ELD support and culturally responsive teaching practices. We analyze data and instructional routines to ensure equitable access and success for every learner in your community.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "Custom Technology Solutions",
    description:
      "Developing custom technology to solve specific school and district problems for personalized solutions. Teaching is not a one-size-fits-all — your technology shouldn't be either.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    featured: true,
  },
];

const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "A 30-minute deep dive into your district's current goals and friction points.",
  },
  {
    step: 2,
    title: "Custom Proposal",
    description:
      "A tailored roadmap with clear deliverables, timelines, and measurable outcomes.",
  },
  {
    step: 3,
    title: "Delivery",
    description:
      "Interactive workshops, direct consulting, or curriculum builds in close partnership.",
  },
  {
    step: 4,
    title: "Ongoing Support",
    description:
      "Continued office hours and data reviews to ensure sustainable growth.",
  },
];

const faqItems = [
  {
    question: "How does pricing work for school districts?",
    answer:
      "We offer flexible pricing based on scope and district size. Every engagement starts with a free discovery call to understand your needs and provide a tailored proposal.",
  },
  {
    question: "Do you work with individual teachers?",
    answer:
      "Absolutely! I offer 1-on-1 coaching sessions for classroom strategy, tech integration, and professional growth.",
  },
  {
    question: "What's the typical engagement timeline?",
    answer:
      "A focused engagement is typically 2-4 weeks. Strategic partnerships run 1-3 months with ongoing support.",
  },
  {
    question: "Can you provide a proposal for my administration?",
    answer:
      "Yes — I can provide a downloadable consulting one-pager and custom proposal. Contact me to request one.",
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
    organization: "",
    message: "",
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
          email: "",
          organization: formData.organization,
          message: formData.message,
          source: "services",
        }),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({ firstName: "", lastName: "", organization: "", message: "" });
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
        <div className="svc-hero-bg" aria-hidden="true">
          <div className="svc-hero-circle svc-hero-circle--1" />
          <div className="svc-hero-circle svc-hero-circle--2" />
        </div>
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
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
            <span>Strategic Consulting</span>
          </div>
          <h1 id="svc-heading" className="svc-hero-title">
            Partner With Me
          </h1>
          <p className="svc-hero-desc">
            Empowering schools and districts with custom-tailored solutions.
            From AI integration to equity-centered curriculum, I help educators
            navigate the future of learning.
          </p>
          <div className="svc-hero-actions">
            <a href="#services-grid" className="svc-hero-cta-primary">
              Explore Services
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
            <a href="#contact-form" className="svc-hero-cta-secondary">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* ─── Service Cards ─── */}
      <section
        id="services-grid"
        className="svc-cards section"
        aria-labelledby="svc-cards-heading"
      >
        <div className="container">
          <h2 id="svc-cards-heading" className="sr-only">
            Our Services
          </h2>
          <div className="svc-cards-grid">
            {services.map((svc) => (
              <div
                key={svc.title}
                className={`svc-card${(svc as { featured?: boolean }).featured ? " svc-card--featured" : ""}`}
              >
                {(svc as { featured?: boolean }).featured && (
                  <span className="svc-card-featured-tag">Custom</span>
                )}
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
                <h3 className="svc-card-title">{svc.title}</h3>
                <p className="svc-card-desc">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How We Work Together ─── */}
      <section
        className="svc-process section"
        aria-labelledby="svc-process-heading"
      >
        <div className="container">
          <div className="svc-process-header">
            <h2 id="svc-process-heading" className="svc-section-title">
              How We Work Together
            </h2>
            <p className="svc-process-subtitle">
              A streamlined process from initial inquiry to long-term impact.
            </p>
          </div>

          <div className="svc-process-grid">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="svc-process-step">
                <div className="svc-process-number-row">
                  <div className="svc-process-number">{step.step}</div>
                  {idx < processSteps.length - 1 && (
                    <div
                      className="svc-process-connector"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="svc-process-step-title">{step.title}</h3>
                <p className="svc-process-step-desc">{step.description}</p>
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
                Ready to transform your school?
              </h2>
              <p className="svc-contact-desc">
                Schedule a consultation or send an inquiry. I&apos;m excited to
                hear about the work you&apos;re doing.
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
                  How can I help?
                </label>
                <textarea
                  id="svc-msg"
                  className="svc-form-textarea"
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="svc-form-submit"
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading" ? "Sending..." : "Send Message"}
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
                Or{" "}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  book directly on Calendly
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ─── AssessAlign Proof of Concept ─── */}
      <section
        className="svc-showcase section"
        aria-labelledby="svc-showcase-heading"
      >
        <div className="container">
          <div className="svc-showcase-card">
            <div className="svc-showcase-banner">
              <div className="svc-showcase-badge">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Proof of Concept</span>
              </div>
              <h2 id="svc-showcase-heading" className="svc-showcase-name">
                AssessAlign
              </h2>
              <p className="svc-showcase-tagline">
                Intelligent assessment orchestration that helps educators and
                administrators map assessments to standards for truly
                data-driven instruction.
              </p>
            </div>
            <div className="svc-showcase-body">
              <div className="svc-showcase-features">
                {[
                  "Standards Mapping",
                  "Gap Analysis",
                  "Report Generation",
                  "AI-Powered Feedback",
                ].map((f) => (
                  <div key={f} className="svc-showcase-feature">
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
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/tools" className="svc-showcase-btn">
                Explore AssessAlign
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
    </div>
  );
}
