"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";

interface NewsletterFormProps {
  source?: string;
  buttonText?: string;
  inputClassName?: string;
  buttonClassName?: string;
  formClassName?: string;
  errorClassName?: string;
  sendFreebie?: boolean;
  tag?: string;
  trackStart?: string;
  trackSubmit?: string;
  trackLocation?: string;
}

export default function NewsletterForm({
  source = "homepage",
  buttonText = "Get My Free Toolkit",
  inputClassName = "newsletter-input",
  buttonClassName = "btn btn-lg btn-secondary newsletter-submit-btn",
  formClassName = "newsletter-form",
  errorClassName = "newsletter-error",
  sendFreebie: sendFreebieOverride,
  tag,
  trackStart,
  trackSubmit,
  trackLocation,
}: NewsletterFormProps) {
  const sendFreebie = sendFreebieOverride ?? true;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const started = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const viewed = useRef(false);

  useEffect(() => {
    try {
      if (trackSubmit !== "guide_signup" || !formRef.current) return;
      const node = formRef.current;
      const observer = new IntersectionObserver(
        (entries) => {
          try {
            if (viewed.current || !entries.some((entry) => entry.isIntersecting)) return;
            viewed.current = true;
            track("guide_form_view", {
              location: trackLocation || "",
              content_category: "guide",
            });
            observer.disconnect();
          } catch (error) {
            console.error("NewsletterForm.view", { error });
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(node);
      return () => observer.disconnect();
    } catch (error) {
      console.error("NewsletterForm.observe", { error });
    }
  }, [trackLocation, trackSubmit]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const form = e.currentTarget;
      if (!(form instanceof HTMLFormElement)) {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
        return;
      }
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source,
          sendFreebie,
          website: new FormData(form).get("website"),
          ...(tag && { tag }),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage(data.message);
        if (trackSubmit) {
          track(trackSubmit, { location: trackLocation || "", content_category: "guide" });
        }
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
      <div className="newsletter-success" role="status">
        <p>{message}</p>
        {sendFreebie ? (
          <p>
            <Link href="/blog">Read the blog while you wait.</Link>
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className={formClassName}
      onSubmit={handleSubmit}
      onFocus={() => {
        try {
          if (!trackStart || started.current) return;
          started.current = true;
          track(trackStart, { location: trackLocation || "", content_category: "guide" });
        } catch (error) {
          console.error("NewsletterForm.focus", { error });
        }
      }}
    >
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor={`${source}-website`}>Website</label>
        <input id={`${source}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="your@email.com"
        className={inputClassName}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === "loading"}
        aria-label="Email address"
        suppressHydrationWarning
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
        <p className={errorClassName} role="alert">{message}</p>
      )}
    </form>
  );
}
