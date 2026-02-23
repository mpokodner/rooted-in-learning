import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lessons | The Rooted Learner",
  description:
    "Standards-aligned, ready-to-use curriculum and activities for K-8 classrooms and homeschool families. Just download and teach.",
  keywords: [
    "lesson plans",
    "K-8 curriculum",
    "teaching resources",
    "classroom activities",
    "homeschool lessons",
    "reading intervention",
    "ELA lessons",
    "math lessons",
  ],
  alternates: {
    canonical: "/resources/lessons",
  },
  openGraph: {
    title: "Lessons | The Rooted Learner",
    description:
      "Standards-aligned, ready-to-use curriculum for K-8 educators and families.",
    type: "website",
  },
};

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
