import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | The Rooted Learner",
  description:
    "Get in touch with Michelle. Consulting inquiries, curriculum questions, collaboration opportunities. Let's connect.",
  keywords: [
    "contact",
    "educator",
    "consulting",
    "speaking",
    "collaboration",
    "curriculum inquiry",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | The Rooted Learner",
    description: "Questions, consulting inquiries, or collaborations? Reach out and I'll respond within 48 hours.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
