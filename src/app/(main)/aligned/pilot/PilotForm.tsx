"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { copy } from "@/content/site-copy";
import { track } from "@/lib/analytics";

const ROLES = [
  "Teacher",
  "Literacy coach",
  "Curriculum leader",
  "Assessment or MTSS leader",
  "Other",
];

export default function PilotForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const started = useRef(false);

  const markStart = () => {
    try {
      if (started.current) return;
      started.current = true;
      track("pilot_form_start", { location: "pilot_form", content_category: "aligned" });
    } catch (err) {
      console.error("PilotForm.markStart", { error: err });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const role = String(data.get("role") || "");
      const params = new URLSearchParams(window.location.search);
      const lines = [
        "AlignED pilot interest.",
        `Role: ${role}`,
        `State: ${String(data.get("state") || "")}`,
        `Grades served: ${String(data.get("grades") || "")}`,
        `Approximate scale: ${String(data.get("scale") || "")}`,
        `Primary challenge: ${String(data.get("challenge") || "")}`,
        `Planning window: ${String(data.get("timeline") || "")}`,
      ];
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          organization: data.get("organization"),
          audience: "district",
          message: lines.join("\n"),
          website: data.get("website"),
          source: "aligned-pilot",
          utm_source: params.get("utm_source"),
          utm_medium: params.get("utm_medium"),
          utm_campaign: params.get("utm_campaign"),
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(json.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      track("pilot_form_submit", { location: "pilot_form", content_category: "aligned" });
      form.reset();
    } catch (err) {
      console.error("PilotForm.submit", { error: err });
      setStatus("error");
      setError("Failed to send. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div role="status">
        <h2 className="h-lg">Thanks. You are on the pilot interest list.</h2>
        <p className="lead mt-3">
          We will write you at the email you gave. This list is not an enrollment.
          You can read how AlignED works on the <Link href="/aligned">product page</Link>.
        </p>
      </div>
    );
  }

  return (
    <form className="ct-form" onSubmit={handleSubmit} onFocus={markStart}>
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="pilot-website">Website</label>
        <input id="pilot-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="pilot-name">Name <span className="ct-required">*</span></label>
        <input className="ct-input" id="pilot-name" name="name" required maxLength={200} />
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="pilot-email">Work email <span className="ct-required">*</span></label>
        <input className="ct-input" id="pilot-email" name="email" type="email" required maxLength={320} />
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="pilot-org">District or organization</label>
        <input className="ct-input" id="pilot-org" name="organization" maxLength={200} />
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="pilot-role">Role <span className="ct-required">*</span></label>
        <select className="ct-select" id="pilot-role" name="role" required defaultValue="">
          <option value="" disabled>Choose one</option>
          {ROLES.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="pilot-state">State</label>
        <input className="ct-input" id="pilot-state" name="state" maxLength={80} />
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="pilot-grades">Grades served</label>
        <input className="ct-input" id="pilot-grades" name="grades" maxLength={80} placeholder="For example, 3–8" />
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="pilot-scale">Approximate number of teachers or classrooms</label>
        <input className="ct-input" id="pilot-scale" name="scale" maxLength={80} />
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="pilot-challenge">Primary challenge</label>
        <textarea className="ct-textarea" id="pilot-challenge" name="challenge" maxLength={1000} rows={4} />
      </div>
      <div className="ct-field">
        <label className="ct-label" htmlFor="pilot-timeline">Planning window</label>
        <input className="ct-input" id="pilot-timeline" name="timeline" maxLength={120} placeholder="For example, this school year" />
      </div>
      <p className="ct-form-desc">{copy.forms.studentNotice} We use this information to contact you about AlignED pilot updates.</p>
      {status === "error" ? <p role="alert">{error}</p> : null}
      <button className="btn btn-terra btn-lg" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Join the pilot interest list"}
      </button>
    </form>
  );
}
