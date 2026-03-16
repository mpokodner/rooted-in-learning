"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-(--neutral-bg) flex items-center justify-center">
      <div className="text-center px-6">
        <div className="w-20 h-20 bg-(--beige-bg) rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-(--terracotta)"
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
        <p className="text-(--text-xs) font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta)' }}>
          Something Went Wrong
        </p>
        <h1 className="text-h1 text-(--text-dark) mb-3">Oops!</h1>
        <p className="text-(--text-muted) max-w-md mx-auto mb-8 leading-relaxed">
          We hit an unexpected bump. Don&apos;t worry — your data is safe. Try
          refreshing or head back home.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="btn btn-lg btn-primary rounded-lg"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="btn btn-lg btn-secondary rounded-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
