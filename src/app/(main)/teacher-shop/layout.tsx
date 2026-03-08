import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teacher Shop | The Rooted Learner",
  description:
    "Standards-aligned lessons, data tools, templates, and planning resources built by a 12+ year veteran educator. Browse, filter, and add to cart.",
  keywords: [
    "teacher resources",
    "lesson plans",
    "classroom tools",
    "standards-aligned lessons",
    "K-8 curriculum",
    "teacher shop",
  ],
  alternates: {
    canonical: "/teacher-shop",
  },
  openGraph: {
    title: "Teacher Shop | The Rooted Learner",
    description:
      "Resources built by a teacher, for teachers. Lessons, tools, and templates — ready to use.",
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
