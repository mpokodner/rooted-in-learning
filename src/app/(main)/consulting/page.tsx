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

      {/* AssessAlign Link Section */}
      <section className="section bg-[var(--beige-bg)]">
        <div className="container text-center">
          <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
            Current Project
          </p>
          <h2 className="text-h2 text-[var(--text-dark)] mb-4">AssessAlign</h2>
          <p className="text-[var(--text-muted)] max-w-lg mx-auto mb-8">
            See my current project — an assessment alignment tool built to help educators and administrators.
          </p>
          <Link
            href="/consulting/assessalign"
            className="btn btn-lg btn-primary rounded-[var(--radius-lg)]"
          >
            View AssessAlign
          </Link>
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
