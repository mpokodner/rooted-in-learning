import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Tips | Rooted in Learning",
  description:
    "Step-by-step technology tutorials for educators. Learn to integrate classroom tools with confidence — no IT degree required.",
  keywords: ["educational technology", "tech tutorials", "classroom technology", "edtech", "teacher tech tips"],
  openGraph: {
    title: "Tech Tips | Rooted in Learning",
    description: "Step-by-step technology tutorials for educators.",
    type: "website",
  },
};

const techTips = [
  { id: 1, title: "Getting Started with Google Classroom", category: "Google", duration: "10 min", level: "Beginner" },
  { id: 2, title: "Creating Interactive Slides", category: "Presentations", duration: "15 min", level: "Intermediate" },
  { id: 3, title: "Canva for Educators: Complete Guide", category: "Design", duration: "20 min", level: "Beginner" },
  { id: 4, title: "Using AI Tools Responsibly", category: "AI", duration: "12 min", level: "Intermediate" },
  { id: 5, title: "Video Editing Basics for Teachers", category: "Video", duration: "18 min", level: "Beginner" },
  { id: 6, title: "Organizing Digital Files Like a Pro", category: "Productivity", duration: "8 min", level: "Beginner" },
];

export default function TechTipsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />

      {/* Hero Section */}
      <section className="section-lg bg-gradient-to-b from-[#F5EFE7] to-[#FAF7F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#5C6B4D] mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Resources
            </Link>
            <p className="text-[11px] font-bold text-[#C17B5C] uppercase tracking-[0.15em] mb-4">
              Technology Tutorials
            </p>
            <h1 className="hero-heading text-[#2D2D2D] mb-6">
              Tech Tips
            </h1>
            <p className="text-[#666666] text-base md:text-lg leading-[1.7]">
              Step-by-step tutorials to help you integrate technology with confidence. No IT degree required.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="section-lg bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-[#FAF7F2] rounded-[1.25rem] p-6 border border-[#E8DED0] hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-[1rem] bg-[#5C6B4D] flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-[#E8DED0] rounded-full text-[10px] font-bold text-[#5C6B4D] uppercase">{tip.category}</span>
                  <span className="px-2.5 py-1 bg-[#C17B5C]/10 rounded-full text-[10px] font-bold text-[#C17B5C] uppercase">{tip.level}</span>
                </div>

                <h3 className="text-lg font-bold text-[#2D2D2D] mb-3 group-hover:text-[#5C6B4D] transition-colors">{tip.title}</h3>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666] flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tip.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C17B5C] group-hover:gap-2 transition-all">
                    Watch
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
