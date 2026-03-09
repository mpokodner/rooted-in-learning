import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn | The Rooted Learner",
  description:
    "AI tutorials, tech tips, how-to guides, and research-backed articles for K-8 educators. Explore the Teacher Toolkit and Blog.",
  keywords: [
    "teacher training",
    "AI for educators",
    "edtech tutorials",
    "teaching tips",
    "education blog",
    "professional development",
  ],
  alternates: {
    canonical: "/learn",
  },
  openGraph: {
    title: "Learn | The Rooted Learner",
    description:
      "AI tutorials, tech tips, how-to guides, and research-backed articles for K-8 educators.",
    type: "website",
  },
};

const sections = [
  {
    href: "/learn/teacher-toolkit",
    title: "Teacher Toolkit",
    description:
      "Your go-to hub for AI tutorials, tech tips, how-to guides, and training content — built to help educators work smarter, not harder.",
    cta: "Explore the Toolkit",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17l-5.384 3.065A1.5 1.5 0 014.5 16.92V7.08a1.5 1.5 0 011.536-1.316L11.42 8.83a1.5 1.5 0 010 6.34zm0 0l5.384 3.065A1.5 1.5 0 0018.316 17V7a1.5 1.5 0 00-1.536-1.316L11.42 8.83"
        />
      </svg>
    ),
  },
  {
    href: "/learn/blog",
    title: "Blog",
    description:
      "Research-backed articles on literacy instruction, AI in education, multilingual learner support, and the systems that make great teaching sustainable.",
    cta: "Read the Blog",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
];

export default function LearnPage() {
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
            Learn
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
            Grow your skills with AI tutorials, tech guides, and
            research-backed articles — all created for K-8 educators.
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))",
            gap: "2rem",
            maxWidth: "56rem",
            margin: "0 auto",
          }}
        >
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="audience-card group"
              style={{ textDecoration: "none" }}
            >
              <div
                className="audience-card-icon audience-card-icon--educator"
                style={{ width: "4rem", height: "4rem" }}
              >
                {section.icon}
              </div>
              <h2 className="audience-card-title">{section.title}</h2>
              <p className="audience-card-desc">{section.description}</p>
              <span className="audience-card-cta">
                {section.cta}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
