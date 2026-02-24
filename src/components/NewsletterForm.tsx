"use client";

import { useState } from "react";

interface NewsletterFormProps {
  source?: string;
  buttonText?: string;
  inputClassName?: string;
  buttonClassName?: string;
  formClassName?: string;
  errorClassName?: string;
}

export default function NewsletterForm({
  source = "homepage",
  buttonText = "Get My Free Toolkit",
  inputClassName = "newsletter-input",
  buttonClassName = "btn btn-lg btn-secondary newsletter-submit-btn",
  formClassName = "newsletter-form",
  errorClassName = "newsletter-error",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source,
          sendFreebie: true,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="newsletter-success">
        <p>🌱 {message}</p>
      </div>
    );
  }

  return (
    <form className={formClassName} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="your@email.com"
        className={inputClassName}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === "loading"}
        aria-label="Email address"
      />
      <button
        type="submit"
        className={buttonClassName}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : buttonText}
        {status !== "loading" && (
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
        )}
      </button>
      {status === "error" && (
        <p className={errorClassName}>{message}</p>
      )}
    </form>
  );
}
