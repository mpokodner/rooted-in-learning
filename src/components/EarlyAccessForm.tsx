"use client";

import { useState } from "react";

const ROLES = [
  "Teacher",
  "School Admin",
  "District Leader",
  "Curriculum Coordinator",
  "Other",
] as const;

const DISTRICT_SIZES = [
  "Individual",
  "Small School (<500)",
  "Medium District (500-5000)",
  "Large District (5000+)",
] as const;

export interface EarlyAccessFormProps {
  className?: string;
  heading?: string;
  description?: string;
}

export function EarlyAccessForm({
  className = "",
  heading = "Get Early Access",
  description = "Be the first to try AssessAlign...",
}: EarlyAccessFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [districtSize, setDistrictSize] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          source: "early-access",
          role: role || undefined,
          organization: organization || undefined,
          districtSize: districtSize || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setOrganization("");
      setRole("");
      setDistrictSize("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={className}
        style={{
          padding: "2rem",
          backgroundColor: "var(--neutral-bg, #FAF7F2)",
          borderRadius: "1rem",
          border: "1px solid var(--border-beige, #E8DED0)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "var(--text-dark, #2D2D2D)",
            fontSize: "1.125rem",
            fontWeight: 600,
            margin: 0,
          }}
        >
          You&apos;re on the list! We&apos;ll notify you when early access opens.
        </p>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        padding: "2rem",
        backgroundColor: "var(--neutral-bg, #FAF7F2)",
        borderRadius: "1rem",
        border: "1px solid var(--border-beige, #E8DED0)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.5rem, 1.4rem + 1.2vw, 2rem)",
          fontWeight: 700,
          color: "var(--text-dark, #2D2D2D)",
          marginBottom: "0.5rem",
        }}
      >
        {heading}
      </h2>
      <p
        style={{
          color: "var(--text-muted, #6B6B6B)",
          fontSize: "1rem",
          lineHeight: 1.65,
          marginBottom: "1.5rem",
        }}
      >
        {description}
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label
            htmlFor="early-access-name"
            style={{
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-dark, #2D2D2D)",
              marginBottom: "0.375rem",
            }}
          >
            Name
          </label>
          <input
            id="early-access-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              backgroundColor: "#fff",
              border: "1px solid var(--border-beige, #E8DED0)",
              borderRadius: "0.5rem",
              color: "var(--text-dark, #2D2D2D)",
              fontSize: "1rem",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="early-access-email"
            style={{
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-dark, #2D2D2D)",
              marginBottom: "0.375rem",
            }}
          >
            Email
          </label>
          <input
            id="early-access-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              backgroundColor: "#fff",
              border: "1px solid var(--border-beige, #E8DED0)",
              borderRadius: "0.5rem",
              color: "var(--text-dark, #2D2D2D)",
              fontSize: "1rem",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="early-access-organization"
            style={{
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-dark, #2D2D2D)",
              marginBottom: "0.375rem",
            }}
          >
            School / Organization
          </label>
          <input
            id="early-access-organization"
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              backgroundColor: "#fff",
              border: "1px solid var(--border-beige, #E8DED0)",
              borderRadius: "0.5rem",
              color: "var(--text-dark, #2D2D2D)",
              fontSize: "1rem",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="early-access-role"
            style={{
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-dark, #2D2D2D)",
              marginBottom: "0.375rem",
            }}
          >
            Role
          </label>
          <select
            id="early-access-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              backgroundColor: "#fff",
              border: "1px solid var(--border-beige, #E8DED0)",
              borderRadius: "0.5rem",
              color: "var(--text-dark, #2D2D2D)",
              fontSize: "1rem",
            }}
          >
            <option value="">Select your role</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="early-access-district-size"
            style={{
              display: "block",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-dark, #2D2D2D)",
              marginBottom: "0.375rem",
            }}
          >
            District Size
          </label>
          <select
            id="early-access-district-size"
            value={districtSize}
            onChange={(e) => setDistrictSize(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              backgroundColor: "#fff",
              border: "1px solid var(--border-beige, #E8DED0)",
              borderRadius: "0.5rem",
              color: "var(--text-dark, #2D2D2D)",
              fontSize: "1rem",
            }}
          >
            <option value="">Select district size</option>
            {DISTRICT_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {status === "error" && (
          <p
            style={{
              color: "#B05931",
              fontSize: "0.875rem",
              margin: 0,
            }}
          >
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            marginTop: "0.5rem",
            padding: "0.875rem 2rem",
            backgroundColor: "var(--earth, #5C6B4D)",
            color: "var(--text-on-dark, #FAF7F2)",
            fontWeight: 600,
            fontSize: "1rem",
            border: "2px solid var(--earth, #5C6B4D)",
            borderRadius: "1rem",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            opacity: status === "loading" ? 0.7 : 1,
          }}
        >
          {status === "loading" ? "Submitting..." : "Join the List"}
        </button>
      </form>
    </div>
  );
}
