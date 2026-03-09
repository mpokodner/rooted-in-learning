import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teacher Toolkit | The Rooted Learner",
  description:
    "AI tutorials, tech tips, how-to guides, and training content for K-8 educators. Learn to automate tasks, integrate technology, and teach smarter.",
  keywords: [
    "AI tutorials for teachers",
    "edtech how-to guides",
    "teacher training",
    "tech tips for educators",
    "classroom technology",
    "teacher toolkit",
  ],
  alternates: {
    canonical: "/learn/teacher-toolkit",
  },
  openGraph: {
    title: "Teacher Toolkit | The Rooted Learner",
    description:
      "AI tutorials, tech tips, how-to guides, and training content for K-8 educators.",
    type: "website",
  },
};

const categories = [
  {
    title: "AI Tutorials",
    description:
      "Step-by-step walkthroughs for using AI tools in your classroom — from lesson planning to assessment creation.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
  },
  {
    title: "Tech Tips",
    description:
      "Quick, practical tips for integrating technology into your teaching workflow without the overwhelm.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    title: "How-To Guides",
    description:
      "Detailed guides for setting up classroom systems, using EdTech platforms, and implementing research-based strategies.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-6.274-.243c-2.17 0-4.318.119-6.274.243-1.131.094-1.976 1.057-1.976 2.192V16.5A2.25 2.25 0 006 18.75h.75"
        />
      </svg>
    ),
  },
  {
    title: "Training & PD",
    description:
      "Professional development content for educators and teams looking to level up with modern tools and pedagogical strategies.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
        />
      </svg>
    ),
  },
];

export default function TeacherToolkitPage() {
  return (
    <div style={{ backgroundColor: "var(--white, #FFFFFF)" }}>
      <section
        style={{
          backgroundColor: "var(--earth, #5C6B4A)",
          padding: "clamp(3rem, 6vw, 5rem) 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              color: "var(--earth-light, #8B9B7A)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "0.75rem",
            }}
          >
            Learn
          </p>
          <h1
            style={{
              fontFamily:
                'var(--font-heading, "Cal Sans", "Inter", system-ui, sans-serif)',
              fontSize: "var(--text-5xl, clamp(2rem, 1.6rem + 2vw, 3rem))",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "var(--white, #FFFFFF)",
              marginBottom: "1rem",
            }}
          >
            Teacher Toolkit
          </h1>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.75)",
              fontSize: "var(--text-lg, 1.125rem)",
              lineHeight: 1.65,
              maxWidth: "36rem",
              margin: "0 auto",
            }}
          >
            AI tutorials, tech tips, how-to guides, and training content — built
            to help K-8 educators work smarter.
          </p>
        </div>
      </section>

      <section
        className="container"
        style={{ padding: "clamp(3rem, 6vw, 5rem) 1rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 16rem), 1fr))",
            gap: "1.5rem",
            maxWidth: "64rem",
            margin: "0 auto 3rem",
          }}
        >
          {categories.map((cat) => (
            <div key={cat.title} className="resource-card">
              <div className="resource-icon-wrapper">{cat.icon}</div>
              <h3 className="resource-title">{cat.title}</h3>
              <p className="resource-desc">{cat.description}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "2.5rem",
            backgroundColor: "var(--beige-bg, #F0EDE7)",
            borderRadius: "var(--radius-xl, 1.5rem)",
            maxWidth: "40rem",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "var(--text-lg, 1.125rem)",
              fontWeight: 600,
              color: "var(--text-dark, #2D2D2D)",
              marginBottom: "0.5rem",
            }}
          >
            Content launching soon
          </p>
          <p
            style={{
              fontSize: "var(--text-sm, 0.875rem)",
              color: "var(--text-muted, #6B6B6B)",
              lineHeight: 1.65,
              marginBottom: "1.25rem",
            }}
          >
            The Teacher Toolkit is actively being built. Sign up to be notified
            when new tutorials and guides drop.
          </p>
          <Link
            href="/#newsletter"
            className="hero-cta-btn hero-cta-btn--earth"
            style={{ display: "inline-flex" }}
          >
            Get Notified
          </Link>
        </div>
      </section>
    </div>
  );
}
