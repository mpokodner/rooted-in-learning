import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | The Rooted Learner",
  robots: "noindex, nofollow",
};

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-h2 text-[var(--text-dark)] mb-2">Account Settings</h1>
            <p className="text-[var(--text-muted)] mb-8">Update your profile information and preferences.</p>

            {/* Profile Section */}
            <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-8 mb-6">
              <h2 className="text-h3 text-[var(--text-dark)] mb-6">Profile Information</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-dark)] mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-[var(--border-beige)] rounded-[var(--radius-lg)] focus:outline-none focus:border-[var(--earth)] text-[var(--text-dark)]" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-dark)] mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-[var(--border-beige)] rounded-[var(--radius-lg)] focus:outline-none focus:border-[var(--earth)] text-[var(--text-dark)] bg-[var(--beige-bg)]" disabled placeholder="your@email.com" />
                  <p className="text-xs text-[var(--text-light)] mt-1">Email changes require verification.</p>
                </div>
                <button type="submit" className="btn btn-md btn-primary rounded-[var(--radius-lg)]">
                  Save Changes
                </button>
              </form>
            </div>

            {/* Password Section */}
            <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-8 mb-6">
              <h2 className="text-h3 text-[var(--text-dark)] mb-6">Change Password</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="current-password" className="block text-sm font-medium text-[var(--text-dark)] mb-2">Current Password</label>
                  <input type="password" id="current-password" className="w-full px-4 py-3 border border-[var(--border-beige)] rounded-[var(--radius-lg)] focus:outline-none focus:border-[var(--earth)] text-[var(--text-dark)]" />
                </div>
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium text-[var(--text-dark)] mb-2">New Password</label>
                  <input type="password" id="new-password" className="w-full px-4 py-3 border border-[var(--border-beige)] rounded-[var(--radius-lg)] focus:outline-none focus:border-[var(--earth)] text-[var(--text-dark)]" />
                </div>
                <button type="submit" className="btn btn-md btn-secondary rounded-[var(--radius-lg)]">
                  Update Password
                </button>
              </form>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-[var(--radius-xl)] border border-red-200 p-8">
              <h2 className="text-h3 text-red-600 mb-3">Danger Zone</h2>
              <p className="text-sm text-[var(--text-muted)] mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <button className="btn btn-md rounded-[var(--radius-lg)] bg-red-50 text-red-600 border-red-200 hover:bg-red-100 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
