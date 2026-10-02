"use client";

import { useState, type FormEvent } from "react";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import { copy } from "@/content/site-copy";

const routes = [
  { value: "district", label: copy.contact.routes.district },
  { value: "educator", label: copy.contact.routes.educator },
  { value: "press", label: copy.contact.routes.press },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

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
      form.reset();
    } catch (err) {
      console.error("ContactForm.submit", { error: err });
      setStatus("error");
      setError("Failed to send message. Please try again.");
    }
  };

  if (status === "success") {
    return <p role="status">Thanks — we received your note and will respond.</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem", maxWidth: "32rem" }}>
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <Field id="name" label="Name">
        <input id="name" name="name" required maxLength={200} />
      </Field>
      <Field id="email" label="Email">
        <input id="email" name="email" type="email" required maxLength={320} />
      </Field>
      <Field id="organization" label="Organization" hint="School, district, or independent">
        <input id="organization" name="organization" maxLength={200} />
      </Field>
      <Field id="audience" label="I am reaching out as">
        <select id="audience" name="audience" required defaultValue="district">
          {routes.map((route) => (
            <option key={route.value} value={route.value}>
              {route.label}
            </option>
          ))}
        </select>
      </Field>
      <Field id="message" label="What are you trying to solve?">
        <textarea id="message" name="message" required maxLength={5000} rows={6} />
      </Field>
      {status === "error" ? <p role="alert">{error}</p> : null}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </Button>
    </form>
  );
}
