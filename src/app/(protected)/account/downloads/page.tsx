import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads | The Rooted Learner",
  robots: "noindex, nofollow",
};

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h2 text-[var(--text-dark)] mb-2">Downloads</h1>
            <p className="text-[var(--text-muted)] mb-8">Access your purchased digital resources.</p>

            {/* Empty state */}
            <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-12 text-center">
              <div className="w-16 h-16 bg-[var(--beige-bg)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--earth-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-h3 text-[var(--text-dark)] mb-3">No downloads available</h2>
              <p className="text-[var(--text-muted)]">
                Digital resources you purchase will be available for download here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
