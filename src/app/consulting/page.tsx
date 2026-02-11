import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

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
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Homeschool Curriculum Design",
    description: "Work one-on-one to build a customized curriculum that fits your family's goals and learning style.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Teacher Side Hustle Coaching",
    description: "Turn your expertise into income. Learn how to create and sell educational products online.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ConsultingPage() {
  const progress = 80;

  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <Header />

      {/* Hero Section */}
      <section className="section-lg bg-gradient-to-b from-[var(--beige-bg)] to-[var(--neutral-bg)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[var(--terracotta)] text-[var(--white)] text-[10px] font-bold uppercase tracking-[var(--tracking-wide)] rounded-full mb-6">
              Coming Soon
            </span>
            <h1 className="hero-heading text-[var(--text-dark)] mb-6">
              Consulting &amp; Coaching
            </h1>
            <p className="text-[var(--text-muted)] text-[var(--text-base)] md:text-[var(--text-lg)] leading-[var(--leading-relaxed)] mb-8">
              Personalized support for schools, homeschool families, and teacher-entrepreneurs. Let&apos;s build something great together.
            </p>

            {/* Progress Bar */}
            <div className="max-w-xs mx-auto mb-10">
              <div className="flex items-center justify-between text-[var(--text-xs)] text-[var(--text-muted)] mb-2">
                <span className="uppercase tracking-[var(--tracking-widest)] font-semibold">Launching Soon</span>
                <span className="font-bold text-[var(--text-dark)]">{progress}%</span>
              </div>
              <div className="h-2 bg-[var(--border-beige)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[var(--terracotta)] to-[var(--terracotta-light)] rounded-full transition-all duration-[var(--duration-slow)]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-lg bg-[var(--white)]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
              What&apos;s Coming
            </p>
            <h2 className="text-h2 text-[var(--text-dark)]">
              Services Preview
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[var(--neutral-bg)] rounded-[var(--radius-xl)] p-6 md:p-8 border border-[var(--border-beige)]"
              >
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--earth)] text-[var(--white)] flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-[var(--text-lg)] font-bold text-[var(--text-dark)] mb-3">{service.title}</h3>
                <p className="text-[var(--text-sm)] text-[var(--text-muted)] leading-[var(--leading-relaxed)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="section-lg bg-[var(--earth)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h2 text-[var(--white)] mb-4">
              Be the First to Know
            </h2>
            <p className="text-[var(--earth-light)] mb-8">
              Join the waitlist and get early access to consulting services, plus a special launch discount.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3.5 rounded-[var(--radius-md)] border-2 border-[var(--white)]/20 bg-[var(--white)]/10 text-[var(--white)] placeholder:text-[var(--white)]/50 focus:outline-none focus:border-[var(--white)]/40"
              />
              <button className="bg-[var(--white)] text-[var(--earth)] px-6 py-3.5 rounded-[var(--radius-md)] font-semibold text-[var(--text-sm)] hover:bg-[var(--neutral-bg)] transition-all duration-[var(--duration-base)]">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
