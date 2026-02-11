import Link from "next/link";
import type { Metadata } from "next";
import "./consulting.css";

export const metadata: Metadata = {
  title: "Consulting | Rooted in Learning",
  description:
    "Personalized educational consulting for schools, homeschool families, and teacher-entrepreneurs. Book a discovery call today.",
  keywords: ["educational consulting", "teacher coaching", "curriculum consulting", "edtech consulting"],
  openGraph: {
    title: "Consulting | Rooted in Learning",
    description: "Personalized educational consulting and coaching services.",
    type: "website",
  },
};

const services = [
  {
    title: "School Tech Integration",
    description: "Help your school or district successfully implement new technology tools with training and support.",
    icon: (
      <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Homeschool Curriculum Design",
    description: "Work one-on-one to build a customized curriculum that fits your family's goals and learning style.",
    icon: (
      <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Teacher Side Hustle Coaching",
    description: "Turn your expertise into income. Learn how to create and sell educational products online.",
    icon: (
      <svg className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ConsultingPage() {
  const progress = 80;

  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      {/* Hero Section */}
      <section className="consulting-hero">
        <div className="consulting-container">
          <div className="consulting-hero-inner">
            <span className="consulting-badge">Coming Soon</span>
            <h1 className="consulting-hero-title">Consulting &amp; Coaching</h1>
            <p className="consulting-hero-desc">
              Personalized support for schools, homeschool families, and teacher-entrepreneurs. Let&apos;s build something great together.
            </p>

            {/* Progress Bar */}
            <div className="progress-wrapper">
              <div className="progress-header">
                <span className="progress-label">Launching Soon</span>
                <span className="progress-value">{progress}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-section">
        <div className="consulting-container">
          <div className="services-header">
            <p className="services-label">What&apos;s Coming</p>
            <h2 className="services-title">Services Preview</h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AssessAlign Preview Section */}
      <section className="section bg-[var(--beige-bg)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
                Currently In Development
              </p>
              <h2 className="text-h2 text-[var(--text-dark)] mb-4">Sneak Peek: AssessAlign</h2>
              <p className="text-[var(--text-muted)] max-w-lg mx-auto">
                Get an early look at the tool I&apos;m building to transform how educators align assessments to standards.
              </p>
            </div>

            {/* AssessAlign Preview Card */}
            <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] overflow-hidden shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] transition-all">
              <div className="bg-[var(--earth)] p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/15 rounded-[var(--radius-md)] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-[var(--text-xs)] font-bold text-white/80 uppercase tracking-[var(--tracking-widest)]">
                    Project Preview
                  </span>
                </div>
                <h3 className="text-h2 text-white mb-2">AssessAlign</h3>
                <p className="text-[var(--earth-light)] max-w-xl">
                  A powerful assessment alignment tool that helps educators and administrators map assessments to standards for truly data-driven instruction.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Standards Mapping", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
                    { label: "Gap Analysis", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                    { label: "Report Generation", icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                    { label: "Collaboration", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                  ].map((feature, i) => (
                    <div key={i} className="text-center">
                      <div className="w-10 h-10 bg-[var(--beige-bg)] rounded-[var(--radius-md)] flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-[var(--earth)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                        </svg>
                      </div>
                      <p className="text-[var(--text-xs)] font-medium text-[var(--text-dark)]">{feature.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/consulting/assessalign"
                    className="btn btn-lg btn-primary rounded-[var(--radius-lg)] inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Preview AssessAlign
                  </Link>
                  <Link
                    href="/about#contact"
                    className="btn btn-lg btn-secondary rounded-[var(--radius-lg)] inline-flex items-center justify-center gap-2"
                  >
                    Request Early Access
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="waitlist-section">
        <div className="consulting-container">
          <div className="waitlist-inner">
            <h2 className="waitlist-title">Be the First to Know</h2>
            <p className="waitlist-desc">
              Join the waitlist and get early access to consulting services, plus a special launch discount.
            </p>
            <form className="waitlist-form">
              <input type="email" placeholder="your@email.com" className="waitlist-input" />
              <button type="submit" className="waitlist-btn">Join Waitlist</button>
            </form>
            <div className="waitlist-trust">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>No spam, just updates. Unsubscribe anytime.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
