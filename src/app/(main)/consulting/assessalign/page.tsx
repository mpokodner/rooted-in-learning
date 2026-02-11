import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AssessAlign | Rooted in Learning",
  description: "AssessAlign — an assessment alignment tool for educators and administrators to map assessments to standards.",
  keywords: ["assessment alignment", "standards mapping", "educational assessment", "data-driven instruction"],
};

export default function AssessAlignPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      {/* Hero */}
      <section className="section-lg bg-[var(--earth)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Current Project
            </span>
            <h1 className="text-h1 text-white mb-4">AssessAlign</h1>
            <p className="text-[var(--earth-light)] text-lg max-w-xl mx-auto mb-8">
              A powerful assessment alignment tool that helps educators and administrators map assessments to standards for truly data-driven instruction.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#features" className="btn btn-lg btn-primary rounded-full">
                Explore Features
              </a>
              <Link href="/consulting" className="btn btn-lg btn-outline-white rounded-full">
                Back to Consulting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
                Key Features
              </p>
              <h2 className="text-h2 text-[var(--text-dark)]">What AssessAlign Does</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Standards Mapping", desc: "Align assessments to state and national standards with drag-and-drop ease." },
                { title: "Gap Analysis", desc: "Identify which standards are under-assessed and which are over-tested." },
                { title: "Report Generation", desc: "Generate comprehensive alignment reports for administrators and stakeholders." },
                { title: "Collaboration", desc: "Share alignments with your team and work together in real-time." },
              ].map((feature, i) => (
                <div key={i} className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-8 hover:shadow-lg transition-all">
                  <h3 className="text-h3 text-[var(--text-dark)] mb-3">{feature.title}</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="section bg-[var(--beige-bg)]">
        <div className="container text-center">
          <h2 className="text-h2 text-[var(--text-dark)] mb-4">Project Status</h2>
          <p className="text-[var(--text-muted)] max-w-lg mx-auto mb-8">
            AssessAlign is currently in active development. Interested in early access or have feedback? Get in touch!
          </p>
          <Link href="/about#contact" className="btn btn-lg btn-primary rounded-[var(--radius-lg)]">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
