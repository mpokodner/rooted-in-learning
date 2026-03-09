import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | The Rooted Learner",
  description:
    "Strategic consulting for schools, districts, and educators. AI integration, curriculum design, equity consulting, and custom technology solutions from a 12+ year practitioner.",
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
      "Empowering schools and districts with custom-tailored solutions. From AI integration to equity-centered curriculum.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
