import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lessons | Rooted in Learning",
  description:
    "Standards-aligned, ready-to-use lesson plans and curriculum for K-8 classrooms and homeschool families. Download and teach today.",
  keywords: ["lesson plans", "curriculum", "K-8 education", "teaching resources", "homeschool curriculum"],
  openGraph: {
    title: "Lessons | Rooted in Learning",
    description: "Standards-aligned, ready-to-use lesson plans for K-8 educators.",
    type: "website",
  },
};

const lessons = [
  { id: 1, title: "Reading Comprehension Bundle", subject: "ELA", grade: "3-5", price: 12.99, badge: "Bestseller" },
  { id: 2, title: "Math Problem Solving Strategies", subject: "Math", grade: "K-2", price: 9.99, badge: null },
  { id: 3, title: "Science Inquiry Lab Pack", subject: "Science", grade: "4-6", price: 14.99, badge: "New" },
  { id: 4, title: "Writing Workshop Essentials", subject: "ELA", grade: "2-4", price: 11.99, badge: null },
  { id: 5, title: "Social Studies Explorer Kit", subject: "Social Studies", grade: "3-5", price: 10.99, badge: null },
  { id: 6, title: "STEM Challenge Cards", subject: "STEM", grade: "K-5", price: 8.99, badge: "Popular" },
];

export default function LessonsPage() {
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
              Ready-to-Use Curriculum
            </p>
            <h1 className="hero-heading text-[#2D2D2D] mb-6">
              Lessons
            </h1>
            <p className="text-[#666666] text-base md:text-lg leading-[1.7]">
              Standards-aligned lesson plans and activities designed by a veteran educator. Just download and teach.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-4 bg-white border-y border-[#E8DED0] sticky top-[72px] z-40">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-[#666666]">Filter:</span>
            {["All", "ELA", "Math", "Science", "STEM"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === "All"
                    ? "bg-[#5C6B4D] text-white"
                    : "bg-[#F5EFE7] text-[#666666] hover:bg-[#E8DED0]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-white rounded-[1.25rem] overflow-hidden border border-[#E8DED0] hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#5C6B4D] to-[#8B9B7A] relative flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {lesson.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#C17B5C] text-white text-[10px] font-bold rounded-full uppercase tracking-wide">
                      {lesson.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[#F5EFE7] rounded text-[10px] font-bold text-[#5C6B4D] uppercase">{lesson.subject}</span>
                    <span className="px-2 py-1 bg-[#F5EFE7] rounded text-[10px] font-bold text-[#5C6B4D] uppercase">Grade {lesson.grade}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2D2D2D] mb-3 group-hover:text-[#5C6B4D] transition-colors">{lesson.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#2D2D2D]">${lesson.price}</span>
                    <button className="bg-[#5C6B4D] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#4A5638] transition-all">
                      Add to Cart
                    </button>
                  </div>
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
