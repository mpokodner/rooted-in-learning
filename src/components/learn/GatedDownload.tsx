"use client";

import { useState } from "react";

interface GatedDownloadProps {
  fileName?: string;
  fileSize?: string;
  fileDescription?: string;
  source?: string;
}

export default function GatedDownload({
  fileName,
  fileSize,
  fileDescription,
  source = "toolkit-download",
}: GatedDownloadProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, sendFreebie: true }),
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
  };

  if (status === "success") {
    return (
      <div
        style={{
          border: "2px solid var(--earth, #5C6B4A)",
          backgroundColor: "rgba(92, 107, 74, 0.08)",
          borderRadius: "0.75rem",
          padding: "2rem 1.5rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <p
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "var(--earth-dark, #4a5638)",
            marginBottom: "0.5rem",
          }}
        >
          Check your inbox!
        </p>
        <p
          style={{
            color: "var(--text-muted, #6b6b6b)",
            fontSize: "0.9375rem",
            margin: 0,
          }}
        >
          {message}
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "2px dashed rgba(92, 107, 74, 0.3)",
        backgroundColor: "rgba(92, 107, 74, 0.05)",
        borderRadius: "0.75rem",
        padding: "2rem 1.5rem",
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "var(--text-black, #1a1a1a)",
          marginBottom: "0.5rem",
        }}
      >
        📥 Get This Resource Free
      </p>
      <p
        style={{
          color: "var(--text-muted, #6b6b6b)",
          fontSize: "0.9375rem",
          marginBottom: "1.25rem",
          lineHeight: 1.6,
        }}
      >
        Enter your email and I&apos;ll send the download link straight to your
        inbox, plus occasional educator tips.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "26rem",
          marginInline: "auto",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@school.edu"
          aria-label="Email address"
          disabled={status === "loading"}
          style={{
            flex: "1 1 12rem",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid var(--border-beige, #e8ded0)",
            fontSize: "1rem",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: "0.75rem 1.25rem",
            borderRadius: "0.5rem",
            backgroundColor: "var(--earth, #5C6B4A)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.9375rem",
            border: "none",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            opacity: status === "loading" ? 0.7 : 1,
          }}
        >
          {status === "loading" ? "Sending..." : "Send Me the Guide"}
        </button>
      </form>

      {status === "error" && (
        <p style={{ color: "#B05931", fontSize: "0.875rem", marginTop: "0.75rem" }}>
          {message}
        </p>
      )}

      {(fileName || fileDescription) && (
        <div style={{ marginTop: "1rem" }}>
          {fileName && (
            <p
              style={{
                color: "var(--text-muted, #6b6b6b)",
                fontSize: "0.8125rem",
                margin: 0,
              }}
            >
              {fileName}
              {fileSize && ` · ${fileSize}`}
            </p>
          )}
          {fileDescription && (
            <p
              style={{
                color: "var(--text-light, #8a8a8a)",
                fontSize: "0.8125rem",
                marginTop: "0.25rem",
                margin: 0,
              }}
            >
              {fileDescription}
            </p>
          )}
        </div>
      )}

      <p
        style={{
          color: "var(--text-light, #8a8a8a)",
          fontSize: "0.75rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
