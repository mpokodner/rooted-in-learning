"use client";

import { useState, type FormEvent } from "react";

const inputStyle: React.CSSProperties = {
  padding: "0.8rem 1rem",
  borderRadius: "0.625rem",
  border: "1px solid var(--border-greige)",
  background: "#fff",
  width: "100%",
};

export default function AboutContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
    subscribeNewsletter: false,
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

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
          source: "about-page",
          subscribeNewsletter: formData.subscribeNewsletter,
        }),
      });

      if (res.ok) {
        setFormStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          organization: "",
          message: "",
          subscribeNewsletter: false,
        });
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error("AboutContactForm handleSubmit:", formData.email, err);
      setFormStatus("error");
    }
  };

  return (
    <form className="card stack-sm" onSubmit={handleSubmit}>
      <div className="grid grid-2" style={{ gap: "0.75rem" }}>
        <input
          style={inputStyle}
          type="text"
          placeholder="First name"
          aria-label="First name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          required
        />
        <input
          style={inputStyle}
          type="text"
          placeholder="Last name"
          aria-label="Last name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
      </div>
      <input
        style={inputStyle}
        type="email"
        placeholder="Email"
        aria-label="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        style={inputStyle}
        type="text"
        placeholder="School / organization"
        aria-label="Organization"
        value={formData.organization}
        onChange={(e) =>
          setFormData({ ...formData, organization: e.target.value })
        }
      />
      <textarea
        style={{
          ...inputStyle,
          minHeight: "110px",
          resize: "vertical",
        }}
        placeholder="What are you building?"
        aria-label="Message"
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
        required
      />
      <label
        className="note"
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "flex-start",
        }}
      >
        <input
          type="checkbox"
          style={{ marginTop: "0.2rem" }}
          checked={formData.subscribeNewsletter}
          onChange={(e) =>
            setFormData({
              ...formData,
              subscribeNewsletter: e.target.checked,
            })
          }
        />
        Also send me educator updates &amp; free resources
      </label>
      <button
        className="btn btn-terra"
        type="submit"
        style={{ width: "100%" }}
        disabled={formStatus === "loading"}
      >
        {formStatus === "loading" ? "Sending..." : "Start the conversation"}
      </button>
      {formStatus === "success" && (
        <p className="note" style={{ color: "var(--earth-dark)" }}>
          Message sent! We&apos;ll be in touch soon.
        </p>
      )}
      {formStatus === "error" && (
        <p className="note" style={{ color: "var(--terracotta-dark)" }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
