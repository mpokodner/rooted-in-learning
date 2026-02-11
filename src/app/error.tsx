"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error (Sentry integration point)
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--neutral-bg)] flex items-center justify-center">
      <div className="text-center px-6">
        <div className="w-20 h-20 bg-[var(--beige-bg)] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-[var(--terracotta)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-3">
          Something Went Wrong
        </p>
        <h1 className="text-h1 text-[var(--text-dark)] mb-3">
          Oops!
        </h1>
        <p className="text-[var(--text-muted)] text-[var(--text-base)] max-w-md mx-auto mb-8 leading-[var(--leading-relaxed)]">
          We hit an unexpected bump. Don&apos;t worry — your data is safe. Try refreshing or head back home.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="btn btn-lg btn-primary rounded-[var(--radius-lg)]"
          >
            Try Again
          </button>
          <a
            href="/"
            className="btn btn-lg btn-secondary rounded-[var(--radius-lg)]"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
