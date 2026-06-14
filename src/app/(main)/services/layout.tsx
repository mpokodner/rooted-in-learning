import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Greenhouse Schools | The Rooted Learner",
  description:
    "The curriculum-integrity partner for new, alternative, international, and microschools — and the edtech serving them. Start with the Greenhouse Audit: read the climate, then build what the crop needs.",
  keywords: [
    "Greenhouse Schools",
    "education consulting",
    "curriculum consulting",
    "microschool consulting",
    "international school consulting",
    "edtech integration",
    "school consulting",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Greenhouse Schools | The Rooted Learner",
    description:
      "The curriculum-integrity partner for new, alternative, international, and microschools — and the edtech serving them. Start with the Greenhouse Audit.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Rooted Learner: Consulting Services",
  provider: {
    "@type": "Person",
    name: "Michelle Pokodner",
    jobTitle: "Curricular Solutions Architect",
  },
  url: "https://www.therootedlearner.com/services",
  description:
    "System audits, curriculum and assessment alignment, multilingual learner access, and custom instructional tools. Built for K–12 districts.",
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
