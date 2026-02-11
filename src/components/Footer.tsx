import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    explore: [
      { label: "Portfolio", href: "/projects" },
      { label: "Philosophy", href: "/blog" },
      { label: "Blog", href: "/blog" },
      { label: "Speaking", href: "/#contact" },
    ],
    shop: [
      { label: "Templates", href: "/microlearning" },
      { label: "Courses", href: "/microlearning" },
      { label: "Consulting", href: "/#contact" },
      { label: "Merch", href: "/microlearning" },
    ],
    support: [
      { label: "FAQ", href: "/#contact" },
      { label: "Contact", href: "/#contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  };

  return (
    <footer className="site-footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div>
              <Link href="/" className="footer-logo">
                <div className="footer-logo-icon">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <span className="footer-logo-text">Rooted in Learning</span>
              </Link>
              <p className="footer-desc">
                Helping educators navigate the digital divide with practical
                tools, thoughtful pedagogy, and a bit of code.
              </p>
              <div className="footer-social-row">
                {[
                  {
                    label: "Website",
                    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                  },
                  {
                    label: "Share",
                    icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
                  },
                  {
                    label: "Email",
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  },
                ].map(({ label, icon }) => (
                  <a
                    key={label}
                    href="#"
                    className="footer-social-icon"
                    aria-label={label}
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={icon}
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="footer-links-grid">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h5 className="footer-heading">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h5>
                  <ul className="footer-link-list">
                    {links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link href={link.href} className="footer-link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-bottom-text">
            © {new Date().getFullYear()} Rooted in Learning. All rights
            reserved.
          </p>
          <p className="footer-bottom-text">
            Built with{" "}
            <span className="accent">intention</span>{" "}
            in Austin, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
