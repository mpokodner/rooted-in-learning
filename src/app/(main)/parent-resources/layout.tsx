import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Parent Resources | Support Your Child's Learning at Home | The Rooted Learner",
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
    title:
      "Parent Resources | Support Your Child's Learning at Home | The Rooted Learner",
    description:
      "Research-based resources for families: phonics, vocabulary, study skills, and at-home practice ideas for K-8 learners.",
    type: "website",
  },
};

export default function ParentResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
