"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { copy } from "@/content/site-copy";
import { track } from "@/lib/analytics";

const routes = [
  { value: "district", label: copy.contact.routes.district },
  { value: "educator", label: copy.contact.routes.educator },
  { value: "press", label: copy.contact.routes.press },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [intent, setIntent] = useState("");
  const started = useRef(false);

  useEffect(() => {
    try {
      setIntent(new URLSearchParams(window.location.search).get("intent") || "");
    } catch (err) {
      console.error("ContactForm.intent", { error: err });
    }
  }, []);

  const markStart = () => {
    try {
      if (started.current) return;
      started.current = true;
      track(intent === "audit" ? "audit_form_start" : "contact_form_start", {
        location: "contact_form",
        content_category: intent === "audit" ? "rooted_audit" : "contact",
      });
    } catch (err) {
      console.error("ContactForm.markStart", { error: err });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const params = new URLSearchParams(window.location.search);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          organization: data.get("organization"),
          audience: data.get("audience"),
          message: data.get("message"),
          website: data.get("website"),
          source: "contact-page",
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(json.error || "Something went wrong.");
        return;
      }
      setStatus("success");
      track(intent === "audit" ? "audit_request_submit" : "contact_submit", {
        location: "contact_form",
        content_category: intent === "audit" ? "rooted_audit" : "contact",
      });
      form.reset();
    } catch (err) {
      console.error("ContactForm.submit", { error: err });
      setStatus("error");
      setError("Failed to send message. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="ct-success" role="status">
        <h3 className="ct-success-title">Thanks. We received your note.</h3>
        <p className="ct-success-desc">
          We will read it. Field notes are on the{" "}
          <Link href="/blog">blog</Link>
          {intent === "audit" ? "." : (
            <>
              . If this is about AlignED, the{" "}
              <Link href="/aligned/pilot">pilot interest list</Link> is the shorter path.
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <form className="ct-form" onSubmit={handleSubmit} onFocus={markStart}>
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="ct-form-row">
        <div className="ct-field">
          <label className="ct-label" htmlFor="name">
            Name <span className="ct-required">*</span>
          </label>
          <input className="ct-input" id="name" name="name" required maxLength={200} />
        </div>
        <div className="ct-field">
          <label className="ct-label" htmlFor="email">
            Email <span className="ct-required">*</span>
          </label>
          <input className="ct-input" id="email" name="email" type="email" required maxLength={320} />
        </div>
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="organization">
          Organization
        </label>
        <input className="ct-input" id="organization" name="organization" maxLength={200} />
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="audience">
          I am reaching out as <span className="ct-required">*</span>
        </label>
        <select className="ct-select" id="audience" name="audience" required defaultValue="district">
          {routes.map((route) => (
            <option key={route.value} value={route.value}>
              {route.label}
            </option>
          ))}
        </select>
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="message">
          What are you trying to solve? <span className="ct-required">*</span>
        </label>
        <textarea className="ct-textarea" id="message" name="message" required maxLength={5000} rows={6} />
      </div>
      {intent === "audit" ? (
        <p className="ct-form-desc">This note is about a Rooted Audit.</p>
      ) : null}
      <p className="ct-form-desc">{copy.forms.studentNotice}</p>
      {status === "error" ? <p role="alert">{error}</p> : null}
      <button className="ct-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
