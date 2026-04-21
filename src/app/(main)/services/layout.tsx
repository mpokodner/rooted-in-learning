import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | The Rooted Learner",
  description:
    "Start with diagnosis, not a menu. I audit where your curriculum systems break and build what fixes them — assessment alignment, multilingual learner access, technology integrations, and custom instructional tools.",
  keywords: [
    "education consulting",
    "AI professional development",
    "curriculum consulting",
    "edtech integration",
    "equity consulting",
    "school consulting",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | The Rooted Learner",
    description:
      "Start with diagnosis, not a menu. I audit where your curriculum systems break and build what fixes them.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Rooted Learner — Consulting Services",
  provider: {
    "@type": "Person",
    name: "Michelle Pokodner",
    jobTitle: "Curricular Solutions Architect",
  },
  url: "https://www.therootedlearner.com/services",
  description:
    "System audits, curriculum and assessment alignment, multilingual learner access, and custom instructional tools — built for K–12 districts.",
  areaServed: "US",
  serviceType: [
    "System Audit",
    "Curriculum & Assessment Alignment",
    "Multilingual Learner Access Systems",
    "Technology Integrations",
    "Custom Instructional Tools",
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
