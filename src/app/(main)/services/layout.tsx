import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | The Rooted Learner",
  description:
    "Curriculum systems consulting for K–12 districts. I diagnose why your tools aren't working together and build the deliverables that close the gap — AI integration, curriculum mapping, equity consulting, and custom EdTech.",
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
      "I diagnose why your curriculum tools aren't working together and build the deliverables that close the gap. AI integration, curriculum mapping, equity consulting.",
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
    jobTitle: "EdTech Consultant & Developer",
  },
  url: "https://www.therootedlearner.com/services",
  description:
    "Strategic consulting for schools and districts — AI integration PD, curriculum mapping, multilingual learner support, and custom technology solutions.",
  areaServed: "US",
  serviceType: [
    "AI Integration Professional Development",
    "Curriculum Development & Mapping",
    "Multilingual Learner & Equity Consulting",
    "Custom Technology Solutions",
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
