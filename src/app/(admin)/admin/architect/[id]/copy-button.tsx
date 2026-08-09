"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        padding: "4px 12px",
        fontSize: "11px",
        fontWeight: 600,
        borderRadius: "6px",
        border: "1px solid var(--border-beige)",
        background: copied ? "#dcfce7" : "#fff",
        color: copied ? "#166534" : "var(--text-dark)",
        cursor: "pointer",
      }}
    >
      {copied ? "Copied!" : "Copy Prompt"}
    </button>
  );
}
