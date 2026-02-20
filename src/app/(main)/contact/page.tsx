"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import "./contact.css";

const subjectOptions = [
  { value: "", label: "What can I help you with?" },
  { value: "consulting", label: "Consulting — Schools & Districts" },
  { value: "coaching", label: "1-on-1 Educator Coaching" },
  { value: "curriculum", label: "Curriculum & Lesson Inquiry" },
  { value: "speaking", label: "Speaking Engagement" },
  { value: "collaboration", label: "Collaboration Opportunity" },
  { value: "family", label: "Family / Parent Support" },
  { value: "other", label: "Something Else" },
];

const trustPoints = [
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Response within 48 hours",
    desc: "I personally read and respond to every message.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Confidential & no obligation",
    desc: "Your inquiry is private. No spam, no pressure.",
  },
  {
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Free discovery calls available",
    desc: "Consulting starts with a 30-minute conversation.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="contact-page">
      {/* ─── Hero ─── */}
      <section className="ct-hero" aria-labelledby="ct-heading">
        <div className="ct-hero-bg" aria-hidden="true">
          <div className="ct-hero-orb ct-hero-orb--1" />
          <div className="ct-hero-orb ct-hero-orb--2" />
        </div>
        <div className="ct-container ct-hero-content">
          <p className="ct-hero-label">Get in Touch</p>
          <h1 id="ct-heading" className="ct-hero-title">
            Let&apos;s Start a
            <br />
            <span className="ct-hero-accent">Conversation</span>
          </h1>
          <p className="ct-hero-desc">
            Whether you&apos;re exploring consulting, looking for curriculum support,
            or want to collaborate — I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ─── Main Content: Form + Sidebar ─── */}
      <section className="ct-main">
        <div className="ct-container">
          <div className="ct-layout">
            {/* ─── Form Card ─── */}
            <div className="ct-form-card">
              {formState === "success" ? (
                <div className="ct-success">
                  <div className="ct-success-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="ct-success-title">Message Sent!</h2>
                  <p className="ct-success-desc">
                    Thank you for reaching out. I&apos;ll get back to you within 48 hours.
                    In the meantime, check out some resources:
                  </p>
                  <div className="ct-success-links">
                    <Link href="/blog" className="ct-success-link">
                      Read the Blog
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link href="/resources/lessons" className="ct-success-link">
                      Browse Lessons
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="ct-form-header">
                    <h2 className="ct-form-title">Send a Message</h2>
                    <p className="ct-form-desc">
                      Fill out the form below and I&apos;ll get back to you personally.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="ct-form">
                    <div className="ct-form-row">
                      <div className="ct-field">
                        <label htmlFor="ct-name" className="ct-label">
                          Name <span className="ct-required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="ct-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="ct-input"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="ct-field">
                        <label htmlFor="ct-email" className="ct-label">
                          Email <span className="ct-required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          id="ct-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="ct-input"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>

                    <div className="ct-field">
                      <label htmlFor="ct-subject" className="ct-label">
                        Subject <span className="ct-required" aria-hidden="true">*</span>
                      </label>
                      <div className="ct-select-wrap">
                        <select
                          id="ct-subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="ct-select"
                        >
                          {subjectOptions.map((opt) => (
                            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <svg className="ct-select-chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="ct-field">
                      <label htmlFor="ct-message" className="ct-label">
                        Message <span className="ct-required" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="ct-message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="ct-textarea"
                        placeholder="Tell me about your goals, challenges, or questions..."
                      />
                    </div>

                    {formState === "error" && (
                      <div className="ct-error" role="alert">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>Something went wrong. Please try again or email me directly.</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className="ct-submit"
                    >
                      {formState === "sending" ? (
                        <>
                          <span className="ct-spinner" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* ─── Sidebar ─── */}
            <aside className="ct-sidebar">
              {/* Trust Points */}
              <div className="ct-trust-card">
                <h3 className="ct-trust-heading">What to Expect</h3>
                <div className="ct-trust-list">
                  {trustPoints.map((point) => (
                    <div key={point.title} className="ct-trust-item">
                      <div className="ct-trust-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={point.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="ct-trust-title">{point.title}</p>
                        <p className="ct-trust-desc">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact */}
              <div className="ct-direct-card">
                <h3 className="ct-direct-heading">Prefer Email?</h3>
                <p className="ct-direct-desc">
                  You can also reach me directly:
                </p>
                <a href="mailto:hello@therootedlearner.com" className="ct-direct-email">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@therootedlearner.com
                </a>
              </div>

              {/* Quick Links */}
              <div className="ct-links-card">
                <h3 className="ct-links-heading">Explore While You Wait</h3>
                <div className="ct-links-list">
                  <Link href="/consulting" className="ct-quick-link">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                    <span>Consulting Services</span>
                  </Link>
                  <Link href="/resources/lessons" className="ct-quick-link">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>Browse Lessons</span>
                  </Link>
                  <Link href="/about" className="ct-quick-link">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>About Michelle</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
