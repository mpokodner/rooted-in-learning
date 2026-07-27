"use client";

import { useState } from "react";

export default function CourseWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          product: "ai-educator-course",
          source: "learn-page-course-waitlist",
          subscribeNewsletter: true,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="learn-waitlist-success">
        <p>{message || "You're on the list! We'll email you when enrollment opens."}</p>
      </div>
    );
  }

  return (
    <div className="learn-waitlist">
      <div className="learn-waitlist-row">
        <input
          type="email"
          placeholder="you@school.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          aria-label="Email for course waitlist"
          className="learn-waitlist-input"
        />
        <button
          type="button"
          className="btn btn-terra"
          onClick={handleSubmit}
          disabled={status === "loading"}
        >
          {status === "loading" ? "..." : "Join the waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p className="learn-waitlist-error">{message}</p>
      )}
      <p className="learn-waitlist-fine">Email only. We&apos;ll also add you to the weekly newsletter.</p>
    </div>
  );
}
