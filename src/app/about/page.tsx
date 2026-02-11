import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./about.css";

export const metadata: Metadata = {
  title: "About | Rooted in Learning",
  description:
    "Meet Michelle, a 15-year veteran educator passionate about helping teachers master classroom technology and reclaim their prep time.",
  keywords: ["educator", "teacher", "educational technology", "curriculum design", "homeschool"],
  openGraph: {
    title: "About | Rooted in Learning",
    description: "Meet Michelle, a 15-year veteran educator passionate about helping teachers.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-inner">
            <p className="about-hero-label">Nice to Meet You</p>
            <h1 className="about-hero-title">About Rooted in Learning</h1>
            <p className="about-hero-desc">
              Where practical pedagogy meets modern technology &mdash; helping educators teach smarter, not harder.
            </p>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section id="my-story" className="story-section">
        <div className="about-container">
          <div className="story-grid">
            {/* Image Placeholder */}
            <div className="story-image-wrapper">
              <div className="story-image">
                <div className="story-image-placeholder">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p>Photo Coming Soon</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="story-image-accent"></div>
            </div>

            {/* Content */}
            <div className="story-content">
              <p className="story-label">My Story</p>
              <h2 className="story-title">15 Years in the Classroom Taught Me This...</h2>
              <div className="story-text">
                <p>
                  After spending over a decade as a classroom teacher, literacy coach, and curriculum designer, I discovered something that changed everything: the right tools and systems can give you back hours of your week.
                </p>
                <p>
                  I&apos;ve been where you are &mdash; drowning in lesson planning, struggling to integrate new technology, and wondering if there&apos;s a better way. Spoiler: there is.
                </p>
                <p>
                  <strong>Rooted in Learning</strong> was born from my passion for helping educators work smarter. I create ready-to-use curriculum, break down tech tools into simple tutorials, and curate the best resources so you don&apos;t have to search.
                </p>
                <p>
                  Whether you&apos;re a classroom teacher, homeschool parent, or educational administrator, I&apos;m here to help you master your craft without sacrificing your sanity.
                </p>
              </div>

              {/* Stats */}
              <div className="story-stats">
                <div className="story-stat">
                  <p className="story-stat-number">15+</p>
                  <p className="story-stat-label">Years Teaching</p>
                </div>
                <div className="story-stat">
                  <p className="story-stat-number">5K+</p>
                  <p className="story-stat-label">Educators Helped</p>
                </div>
                <div className="story-stat">
                  <p className="story-stat-number">100+</p>
                  <p className="story-stat-label">Resources Created</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="about-container">
          <div className="values-header">
            <p className="values-label">What I Believe</p>
            <h2 className="values-title">Grounded in Purpose</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrapper">
                <svg className="value-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="value-title">Time is Precious</h3>
              <p className="value-desc">
                Your time matters. Every resource I create is designed to save you hours, not add to your workload.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-wrapper">
                <svg className="value-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="value-title">Practical Over Perfect</h3>
              <p className="value-desc">
                I believe in resources that work in the real world &mdash; not just on paper. Everything is classroom-tested.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-wrapper">
                <svg className="value-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="value-title">Community First</h3>
              <p className="value-desc">
                We&apos;re all in this together. I&apos;m here to support, encourage, and grow alongside fellow educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="about-container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <p className="contact-label">Get in Touch</p>
              <h2 className="contact-title">Let&apos;s Connect</h2>
              <p className="contact-desc">
                Have a question, want to collaborate, or just want to say hello? I&apos;d love to hear from you. Fill out the form or reach out on social media.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="contact-detail-text">hello@rootedinlearning.com</span>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="contact-detail-text">Austin, Texas</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-textarea"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <div className="form-submit">
                  <button type="submit" className="contact-submit-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
