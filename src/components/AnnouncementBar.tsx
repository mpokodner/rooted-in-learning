"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "trl-announcement-dismissed";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!visible) return null;

  return (
    <div className="announcement-bar" role="banner">
      <div className="container announcement-inner">
        <p>
          <strong>Free PDF:</strong> Claude for Educators — 18 pages of prompt templates and classroom workflows.{" "}
          <Link href="/#download">Get it free</Link>
        </p>
        <button
          type="button"
          className="announcement-close"
          aria-label="Dismiss announcement"
          onClick={dismiss}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
