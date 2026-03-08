import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import "./parent-resources.css";

export const metadata: Metadata = {
  title: "Parent Resources | Support Your Child's Learning at Home | The Rooted Learner",
  description:
    "Research-based resources for families: phonics foundations, vocabulary building, study skills, and at-home practice ideas for K-8 learners. Science of Reading tips and family-friendly support.",
  keywords: [
    "parent resources reading",
    "help child learn to read",
    "science of reading for parents",
    "homework help tips",
    "phonics at home",
    "vocabulary building kids",
    "study skills elementary",
    "K-8 learning support",
    "at-home reading practice",
    "family learning activities",
  ],
  alternates: {
    canonical: "/parent-resources",
  },
  openGraph: {
    title: "Parent Resources | Support Your Child's Learning at Home | The Rooted Learner",
    description:
      "Research-based resources for families: phonics, vocabulary, study skills, and at-home practice ideas for K-8 learners.",
    type: "website",
  },
};

const ageGroups = [
  {
    title: "Early Readers (K-2)",
    description:
      "Phonics foundations, reading confidence, and at-home practice that builds skills without pressure.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    ),
  },
  {
    title: "Growing Learners (3-5)",
    description:
      "Vocabulary building, comprehension strategies, and homework help framing that supports without taking over.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-7.5m0 0l-.5 1.5"
      />
    ),
  },
  {
    title: "Independent Learners (6-8)",
    description:
      "Study skills, test preparation, and critical thinking support as your child takes on more responsibility.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 6.75l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    ),
  },
];

const whatFamiliesGet = [
  "Research-based activities aligned with Science of Reading",
  "Progress tips and how to celebrate small wins",
  "Weekly practice ideas that fit busy family life",
];

const featuredResources = [
  {
    title: "Homework Helper Guide",
    price: "$9.99",
    description: "Activities to support learning at home",
  },
  {
    title: "Summer Reading Activity Pack",
    price: "$12.99",
    description: "Keep skills sharp over break",
  },
  {
    title: "Family Reading Nights Kit",
    price: "$7.99",
    description: "Fun literacy activities for the whole family",
  },
];

const faqs = [
  {
    q: "How do I help without doing homework for them?",
    a: "We provide scaffolding strategies: ask guiding questions instead of giving answers, set up routines so your child knows what to try first, and use prompts that encourage thinking without taking over. Our resources include parent scripts and question stems.",
  },
  {
    q: "What is Science of Reading?",
    a: "Science of Reading is research on how children learn to read. It emphasizes phonics (sounding out words), phonemic awareness, vocabulary, fluency, and comprehension. Our resources are built on these evidence-based practices so you can support your child in ways that actually work.",
  },
  {
    q: "How much time should practice take?",
    a: "Short, consistent practice beats long sessions. For early readers (K-2), 10–15 minutes daily is ideal. For growing learners (3-5), 15–20 minutes. For independent learners (6-8), 20–30 minutes. Quality and consistency matter more than duration.",
  },
];

export default function ParentResourcesPage() {
  return (
    <div style={{ backgroundColor: "var(--neutral-bg)" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--earth) 0%, var(--earth-dark) 100%)",
          color: "var(--text-on-dark)",
          paddingBlock: "clamp(4rem, 10vw, 7rem)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "var(--max-width-md)", marginInline: "auto" }}>
          <p
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-widest)",
              color: "var(--terracotta-light)",
              marginBottom: "var(--space-md)",
            }}
          >
            For Families
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-5xl)",
              fontWeight: 800,
              lineHeight: "var(--leading-tight)",
              color: "var(--white)",
              marginBottom: "var(--space-lg)",
            }}
          >
            Support Your Child&apos;s Learning at Home
          </h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: "36rem",
              marginInline: "auto",
              lineHeight: "var(--leading-relaxed)",
              marginBottom: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Research-based resources, warm support, and practical tips so you can
            help your child build confidence and close skill gaps — without the
            overwhelm.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Link
              href="/teacher-shop"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.8rem 2rem",
                backgroundColor: "var(--terracotta)",
                color: "var(--white)",
                fontWeight: 600,
                fontSize: "var(--text-lg)",
                borderRadius: "var(--radius-lg)",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
            >
              Browse Lessons &amp; Activities
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/work-with-me"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.8rem 2rem",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                color: "var(--white)",
                fontWeight: 600,
                fontSize: "var(--text-lg)",
                borderRadius: "var(--radius-lg)",
                border: "2px solid rgba(255, 255, 255, 0.4)",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
            >
              Book a Family Consultation
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Age-specific resources */}
      <section className="section" style={{ paddingBlock: "var(--space-section)" }} aria-labelledby="age-heading">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--terracotta)", marginBottom: "var(--space-sm)" }}>
              Find Your Child&apos;s Stage
            </p>
            <h2 id="age-heading" style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-3xl)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "var(--space-md)" }}>
              Age-Specific Resources
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", maxWidth: "36rem", marginInline: "auto" }}>
              Every child learns differently. Choose resources that match where your child is right now.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(1.25rem, 2vw, 2rem)" }}>
            {ageGroups.map((group) => (
              <div key={group.title} style={{ backgroundColor: "var(--white)", border: "1px solid var(--border-beige)", borderRadius: "var(--radius-lg)", padding: "clamp(1.5rem, 3vw, 2rem)", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ width: "3rem", height: "3rem", borderRadius: "var(--radius-md)", backgroundColor: "var(--beige-bg)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="var(--earth)" strokeWidth={1.5}>{group.icon}</svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", fontWeight: 600, color: "var(--text-dark)", marginBottom: "0.5rem" }}>{group.title}</h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: "var(--leading-relaxed)" }}>{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section style={{ paddingBlock: "var(--space-section)", backgroundColor: "var(--beige-bg)" }} aria-labelledby="featured-heading">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--terracotta)", marginBottom: "var(--space-sm)" }}>Curated for You</p>
            <h2 id="featured-heading" style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-3xl)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "var(--space-md)" }}>Featured Resources for Families</h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", maxWidth: "36rem", marginInline: "auto" }}>Parent-facing materials designed to make learning at home easy and enjoyable.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(1.25rem, 2vw, 2rem)" }}>
            {featuredResources.map((resource) => (
              <div key={resource.title} style={{ backgroundColor: "var(--white)", border: "1px solid var(--border-beige)", borderRadius: "var(--radius-lg)", padding: "clamp(1.5rem, 3vw, 2rem)", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "3rem", height: "3rem", borderRadius: "var(--radius-md)", backgroundColor: "var(--beige-bg)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="var(--earth)" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", fontWeight: 600, color: "var(--text-dark)", marginBottom: "0.25rem" }}>{resource.title}</h3>
                <p style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--terracotta)", marginBottom: "0.5rem" }}>{resource.price}</p>
                <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: "var(--leading-relaxed)", marginBottom: "1.25rem", flex: 1 }}>{resource.description}</p>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.625rem 1.25rem", backgroundColor: "var(--beige-bg)", color: "var(--text-muted)", fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-beige)", cursor: "default" }}>Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Families Get */}
      <section style={{ paddingBlock: "var(--space-section)" }} aria-labelledby="what-heading">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--terracotta)", marginBottom: "var(--space-sm)" }}>What&apos;s Included</p>
            <h2 id="what-heading" style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-3xl)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "var(--space-md)" }}>What Families Get</h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", maxWidth: "36rem", marginInline: "auto" }}>Practical support grounded in research, designed for real family life.</p>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "32rem", marginInline: "auto" }}>
            {whatFamiliesGet.map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1rem 1.25rem", backgroundColor: "var(--white)", border: "1px solid var(--border-beige)", borderRadius: "var(--radius-md)" }}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--earth)" strokeWidth={2} style={{ flexShrink: 0, marginTop: "0.125rem" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span style={{ fontSize: "var(--text-base)", color: "var(--text-dark)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cross-sell Callout */}
      <section style={{ paddingBlock: "var(--space-section)", backgroundColor: "var(--beige-bg)" }}>
        <div className="container">
          <div style={{ maxWidth: "36rem", marginInline: "auto", padding: "clamp(2rem, 4vw, 3rem)", backgroundColor: "var(--white)", border: "1px solid var(--border-beige)", borderRadius: "var(--radius-xl)", textAlign: "center", boxShadow: "var(--shadow-md)" }}>
            <div style={{ width: "3rem", height: "3rem", marginInline: "auto", marginBottom: "1rem", borderRadius: "var(--radius-md)", backgroundColor: "var(--beige-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="var(--earth)" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.5rem" }}>Need Personalized Support?</h3>
            <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: "var(--leading-relaxed)" }}>
              Every family&apos;s learning journey is different. Book a one-on-one family consultation to get tailored strategies, personalized recommendations, and a clear action plan for your child.
            </p>
            <Link href="/work-with-me" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 2rem", backgroundColor: "var(--terracotta)", color: "var(--white)", fontWeight: 600, fontSize: "var(--text-base)", borderRadius: "var(--radius-lg)", textDecoration: "none", transition: "all 0.25s ease" }}>
              Book a Consultation
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingBlock: "var(--space-section)" }} aria-labelledby="faq-heading">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--terracotta)", marginBottom: "var(--space-sm)" }}>Common Questions</p>
            <h2 id="faq-heading" style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-3xl)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "var(--space-md)" }}>Family-Friendly FAQ</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "40rem", marginInline: "auto" }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ padding: "1.5rem", backgroundColor: "var(--white)", border: "1px solid var(--border-beige)", borderRadius: "var(--radius-lg)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-lg)", fontWeight: 600, color: "var(--text-dark)", marginBottom: "0.5rem" }}>{faq.q}</h3>
                <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: "var(--leading-relaxed)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ paddingBlock: "var(--space-section)", backgroundColor: "var(--beige-bg)" }}>
        <div className="container">
          <div style={{ maxWidth: "36rem", marginInline: "auto", padding: "clamp(2rem, 4vw, 3rem)", backgroundColor: "var(--white)", border: "1px solid var(--border-beige)", borderRadius: "var(--radius-xl)", textAlign: "center", boxShadow: "var(--shadow-md)" }}>
            <div style={{ width: "3rem", height: "3rem", marginInline: "auto", marginBottom: "1rem", borderRadius: "var(--radius-md)", backgroundColor: "var(--beige-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="var(--earth)" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.5rem" }}>Tips for Families</h3>
            <p style={{ fontSize: "var(--text-base)", color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: "var(--leading-relaxed)" }}>
              Get weekly practice ideas, progress tips, and encouragement delivered to your inbox. Join our community of families supporting young learners.
            </p>
            <NewsletterForm source="parent-resources" buttonText="Get Family Tips" />
            <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: "1rem" }}>Unsubscribe anytime. We respect your inbox.</p>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section style={{ paddingBlock: "var(--space-section)", borderTop: "1px solid var(--border-beige)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 3vw, 2rem)" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "var(--space-md)" }}>Explore More</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/teacher-shop" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", backgroundColor: "var(--earth)", color: "var(--white)", fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-full)", textDecoration: "none" }}>
              Lessons &amp; Activities
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/my-picks" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", backgroundColor: "transparent", color: "var(--earth)", fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-full)", border: "2px solid var(--earth)", textDecoration: "none" }}>
              My Picks
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/work-with-me" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", backgroundColor: "transparent", color: "var(--earth)", fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-full)", border: "2px solid var(--earth)", textDecoration: "none" }}>
              Work With Me
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", backgroundColor: "transparent", color: "var(--earth)", fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-full)", border: "2px solid var(--earth)", textDecoration: "none" }}>
              Contact
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
