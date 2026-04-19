import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | The Rooted Learner",
  description:
    "WIDA-aligned ELD overlays, formative assessment kits, AI prompt libraries, and Science of Reading intervention guides — designed at the district level, usable at the classroom level.",
  keywords: [
    "ELD resources",
    "WIDA-aligned curriculum",
    "multilingual learner resources",
    "formative assessment kits",
    "Science of Reading",
    "AI prompt library educators",
    "curriculum tools K-12",
  ],
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Resources | The Rooted Learner",
    description:
      "Curriculum tools built for the classrooms that need them most. WIDA-aligned overlays, assessment kits, and intervention guides.",
    type: "website",
  },
};

export default function TeacherShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
