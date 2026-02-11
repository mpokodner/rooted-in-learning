import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

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
      <section className="section-lg bg-gradient-to-b from-[var(--beige-bg)] to-[var(--neutral-bg)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
              Nice to Meet You
            </p>
            <h1 className="hero-heading text-[var(--text-dark)] mb-6">
              About Rooted in Learning
            </h1>
            <p className="text-[var(--text-muted)] text-[var(--text-base)] md:text-[var(--text-lg)] leading-[var(--leading-relaxed)]">
              Where practical pedagogy meets modern technology &mdash; helping educators teach smarter, not harder.
            </p>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section id="my-story" className="section-lg bg-[var(--white)] scroll-mt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--earth)] via-[var(--earth-light)] to-[var(--earth-light)] rounded-[var(--radius-xl)] aspect-[4/5] relative overflow-hidden shadow-[var(--shadow-xl)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-[var(--white)]/80">
                    <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-[var(--text-sm)] font-medium">Photo Coming Soon</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--terracotta)] rounded-[var(--radius-lg)] -z-10"></div>
            </div>

            {/* Content */}
            <div>
              <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
                My Story
              </p>
              <h2 className="text-h2 text-[var(--text-dark)] mb-6">
                15 Years in the Classroom Taught Me This...
              </h2>
              <div className="space-y-4 text-[var(--text-muted)] leading-[var(--leading-relaxed)]">
                <p>
                  After spending over a decade as a classroom teacher, literacy coach, and curriculum designer, I discovered something that changed everything: the right tools and systems can give you back hours of your week.
                </p>
                <p>
                  I&apos;ve been where you are &mdash; drowning in lesson planning, struggling to integrate new technology, and wondering if there&apos;s a better way. Spoiler: there is.
                </p>
                <p>
                  <strong className="text-[var(--text-dark)]">Rooted in Learning</strong> was born from my passion for helping educators work smarter. I create ready-to-use curriculum, break down tech tools into simple tutorials, and curate the best resources so you don&apos;t have to search.
                </p>
                <p>
                  Whether you&apos;re a classroom teacher, homeschool parent, or educational administrator, I&apos;m here to help you master your craft without sacrificing your sanity.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[var(--border-beige)]">
                <div className="text-center">
                  <p className="text-[var(--text-2xl)] md:text-[var(--text-3xl)] font-bold text-[var(--earth)]">15+</p>
                  <p className="text-[var(--text-xs)] text-[var(--text-muted)] uppercase tracking-[var(--tracking-wide)] mt-1">Years Teaching</p>
                </div>
                <div className="text-center">
                  <p className="text-[var(--text-2xl)] md:text-[var(--text-3xl)] font-bold text-[var(--earth)]">5K+</p>
                  <p className="text-[var(--text-xs)] text-[var(--text-muted)] uppercase tracking-[var(--tracking-wide)] mt-1">Educators Helped</p>
                </div>
                <div className="text-center">
                  <p className="text-[var(--text-2xl)] md:text-[var(--text-3xl)] font-bold text-[var(--earth)]">100+</p>
                  <p className="text-[var(--text-xs)] text-[var(--text-muted)] uppercase tracking-[var(--tracking-wide)] mt-1">Resources Created</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-lg bg-[var(--neutral-bg)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
              What I Believe
            </p>
            <h2 className="text-h2 text-[var(--text-dark)]">
              Grounded in Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--white)] rounded-[var(--radius-xl)] p-6 md:p-8 border border-[var(--border-beige)]">
              <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--beige-bg)] flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[var(--earth)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[var(--text-lg)] font-bold text-[var(--text-dark)] mb-3">Time is Precious</h3>
              <p className="text-[var(--text-sm)] text-[var(--text-muted)] leading-[var(--leading-relaxed)]">
                Your time matters. Every resource I create is designed to save you hours, not add to your workload.
              </p>
            </div>

            <div className="bg-[var(--white)] rounded-[var(--radius-xl)] p-6 md:p-8 border border-[var(--border-beige)]">
              <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--beige-bg)] flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[var(--earth)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-[var(--text-lg)] font-bold text-[var(--text-dark)] mb-3">Practical Over Perfect</h3>
              <p className="text-[var(--text-sm)] text-[var(--text-muted)] leading-[var(--leading-relaxed)]">
                I believe in resources that work in the real world &mdash; not just on paper. Everything is classroom-tested.
              </p>
            </div>

            <div className="bg-[var(--white)] rounded-[var(--radius-xl)] p-6 md:p-8 border border-[var(--border-beige)]">
              <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--beige-bg)] flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[var(--earth)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-[var(--text-lg)] font-bold text-[var(--text-dark)] mb-3">Community First</h3>
              <p className="text-[var(--text-sm)] text-[var(--text-muted)] leading-[var(--leading-relaxed)]">
                We&apos;re all in this together. I&apos;m here to support, encourage, and grow alongside fellow educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-lg bg-[var(--earth)] scroll-mt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-[var(--text-xs)] font-bold text-[var(--earth-light)] uppercase tracking-[var(--tracking-widest)] mb-4">
                Get in Touch
              </p>
              <h2 className="text-h2 text-[var(--white)] mb-6">
                Let&apos;s Connect
              </h2>
              <p className="text-[var(--earth-light)] text-[var(--text-base)] md:text-[var(--text-lg)] leading-[var(--leading-relaxed)] mb-8">
                Have a question, want to collaborate, or just want to say hello? I&apos;d love to hear from you. Fill out the form or reach out on social media.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--white)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--white)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-[var(--white)]">hello@rootedinlearning.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--white)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--white)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-[var(--white)]">Austin, Texas</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--white)] rounded-[var(--radius-xl)] p-6 md:p-8">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[var(--text-sm)] font-medium text-[var(--text-dark)] mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-[var(--border-beige)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--earth)] text-[var(--text-dark)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[var(--text-sm)] font-medium text-[var(--text-dark)] mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-[var(--border-beige)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--earth)] text-[var(--text-dark)]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[var(--text-sm)] font-medium text-[var(--text-dark)] mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-[var(--border-beige)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--earth)] text-[var(--text-dark)] resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary w-full rounded-[var(--radius-md)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
