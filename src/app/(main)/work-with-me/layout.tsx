import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Curriculum audits, custom software builds, AI integration strategy, and professional development — built for the schools and districts we serve.",
  alternates: {
    canonical: "/work-with-me",
  },
  openGraph: {
    title: "Work With Us — The Rooted Learner",
    description:
      "Curriculum audits, custom software builds, AI integration, and PD — built for the schools and districts we serve.",
    type: "website",
  },
};

export default function WorkWithMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
