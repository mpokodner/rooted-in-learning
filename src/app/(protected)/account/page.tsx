import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Account | The Rooted Learner",
  robots: "noindex, nofollow",
};

const quickLinks = [
  { title: "Saved Items", desc: "Blog posts, products, and videos you've bookmarked.", href: "/account/saved", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { title: "Order History", desc: "View past purchases and download receipts.", href: "/account/orders", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
  { title: "Downloads", desc: "Access your purchased digital resources.", href: "/account/downloads", icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { title: "Settings", desc: "Update your profile, password, and preferences.", href: "/account/settings", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
];

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Welcome */}
            <div className="mb-10">
              <h1 className="text-h1 text-[var(--text-dark)] mb-2">My Account</h1>
              <p className="text-[var(--text-muted)]">Welcome back! Manage your resources, orders, and preferences.</p>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-6 hover:shadow-lg hover:border-[var(--earth-light)] transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--beige-bg)] rounded-[var(--radius-lg)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--earth-light)] transition-colors">
                      <svg className="w-6 h-6 text-[var(--earth)] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-dark)] mb-1">{link.title}</h3>
                      <p className="text-sm text-[var(--text-muted)]">{link.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
