import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)] flex items-center justify-center">
      <div className="text-center px-6">
        <div className="w-20 h-20 bg-[var(--beige-bg)] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-[var(--earth-light)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-3">
          404
        </p>
        <h1 className="text-h1 text-[var(--text-dark)] mb-3">
          Page Not Found
        </h1>
        <p className="text-[var(--text-muted)] text-[var(--text-base)] max-w-md mx-auto mb-8 leading-[var(--leading-relaxed)]">
          Looks like this page hasn&apos;t been planted yet. Let&apos;s head back to familiar ground.
        </p>
        <Link
          href="/"
          className="btn btn-lg btn-primary rounded-[var(--radius-lg)] inline-flex"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
