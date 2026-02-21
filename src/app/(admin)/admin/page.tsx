import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | The Rooted Learner",
  robots: "noindex, nofollow",
};

const stats = [
  { label: "Total Orders", value: "0", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { label: "Subscribers", value: "0", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Products", value: "0", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { label: "Revenue", value: "$0.00", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-h2 text-[var(--text-dark)] mb-2">Dashboard</h1>
        <p className="text-[var(--text-muted)]">Overview of your store and content.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--beige-bg)] rounded-[var(--radius-lg)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[var(--earth)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-bold text-[var(--text-dark)]">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for recent activity */}
      <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-8">
        <h2 className="text-h3 text-[var(--text-dark)] mb-4">Recent Activity</h2>
        <p className="text-[var(--text-muted)] text-sm">
          No recent activity to display. Activity will appear here once your store is live.
        </p>
      </div>
    </div>
  );
}
