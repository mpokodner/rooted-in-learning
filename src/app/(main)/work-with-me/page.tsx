"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import "./work-with-me.css";

const engagements = [
  {
    title: "Curriculum & systems audit",
    desc: "A diagnostic that maps vision-to-system fit, the real learner model, curriculum architecture, and the tech stack — then delivers a prioritized roadmap.",
  },
  {
    title: "Custom software builds",
    desc: "District-specific tools like Hall Pass and AssessAlign — built from audit findings, not vendor catalogs.",
  },
  {
    title: "AI integration strategy",
    desc: "Thoughtful AI woven into instruction and operations — with clear ethics lines, teacher training, and workflow-specific implementation.",
  },
  {
    title: "Professional development",
    desc: "PD, coaching, and launch support tied to your actual systems — not a generic slide deck divorced from your district's workflow.",
  },
];

export default function WorkWithMePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
    subscribeNewsletter: false,
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          subject: "consulting",
          source: "work-with-me",
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
    <div className="wwm-page">
      <section className="wwm-hero">
        <div className="container">
          <span className="wwm-eyebrow">Work With Us</span>
          <h1>Let&apos;s build something that actually works for your district</h1>
          <p className="wwm-hero-sub">
            Every engagement starts with a conversation — not a sales deck. We
            listen to understand your campus structure, your learners, and what
            &ldquo;working&rdquo; means for your team before we propose anything.
          </p>
        </div>
      </section>

      <section className="wwm-engagements section">
        <div className="container">
          <h2>What we do</h2>
          <div className="wwm-engagement-grid">
            {engagements.map((e) => (
              <div key={e.title} className="wwm-engagement-card">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
          <p className="wwm-approach-link">
            Want to understand the methodology behind every engagement?{" "}
            <Link href="/about/approach">Read about our approach</Link>
          </p>
        </div>
      </section>

      <section className="wwm-form-section section" id="contact">
        <div className="container">
          <div className="wwm-form-wrapper">
            <div className="wwm-form-intro">
              <h2>Start a conversation</h2>
              <p>
                Tell us a bit about your school or district. We&apos;ll respond
                within two business days to schedule a discovery call — no
                obligation, no pitch.
              </p>
            </div>

            {formStatus === "success" ? (
              <div className="wwm-success">
                <h3>Thank you for reaching out.</h3>
                <p>We&apos;ll be in touch within two business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="wwm-form">
                <div className="wwm-form-row">
                  <div className="wwm-field">
                    <label htmlFor="wwm-first">First name</label>
                    <input
                      id="wwm-first"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="wwm-field">
                    <label htmlFor="wwm-last">Last name</label>
                    <input
                      id="wwm-last"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="wwm-field">
                  <label htmlFor="wwm-email">Email</label>
                  <input
                    id="wwm-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="wwm-field">
                  <label htmlFor="wwm-org">School or district</label>
                  <input
                    id="wwm-org"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </div>
                <div className="wwm-field">
                  <label htmlFor="wwm-msg">What are you working on?</label>
                  <textarea
                    id="wwm-msg"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <div className="wwm-checkbox">
                  <input
                    id="wwm-subscribe"
                    type="checkbox"
                    checked={formData.subscribeNewsletter}
                    onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
                  />
                  <label htmlFor="wwm-subscribe">Subscribe to our newsletter for teaching tips and updates</label>
                </div>
                <button type="submit" className="btn btn-terra" disabled={formStatus === "loading"}>
                  {formStatus === "loading" ? "Sending..." : "Send message"}
                </button>
                {formStatus === "error" && (
                  <p className="wwm-error">Something went wrong. Please try again or email us directly at admin@therootedlearner.com.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
