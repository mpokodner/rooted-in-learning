"use client";

type Platform = "instagram" | "youtube" | "pinterest" | "linkedin" | "email";

interface SocialLinksProps {
  platforms?: Platform[];
  location: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const SOCIAL_DATA: Record<Platform, { href: string; label: string; icon: React.ReactNode }> = {
  instagram: {
    href: "https://www.instagram.com/rootedinlearninged/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  youtube: {
    href: "https://www.youtube.com/@TheRootedLearner",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5zM9.8 15.3V8.7l5.7 3.3z" />
      </svg>
    ),
  },
  pinterest: {
    href: "https://www.pinterest.com/rootedinlearninged/",
    label: "Pinterest",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.2 0 1.03.4 2.13.89 2.73a.36.36 0 0 1 .08.34l-.33 1.36c-.05.22-.18.27-.4.16-1.5-.7-2.43-2.9-2.43-4.67 0-3.8 2.76-7.3 7.96-7.3 4.18 0 7.43 2.98 7.43 6.96 0 4.15-2.62 7.5-6.25 7.5-1.22 0-2.37-.63-2.76-1.38l-.75 2.86c-.27 1.05-1.01 2.36-1.5 3.16A12 12 0 1 0 12 0z" />
      </svg>
    ),
  },
  linkedin: {
    href: "https://www.linkedin.com/in/michelle-pokodner-edtech/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.2 8.3h4.56V24H.2zM8.34 8.3h4.37v2.15h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.91h-4.56v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H8.34z" />
      </svg>
    ),
  },
  email: {
    href: "mailto:admin@therootedlearner.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
};

const DEFAULT_PLATFORMS: Platform[] = ["instagram", "youtube", "pinterest"];

export default function SocialLinks({ platforms = DEFAULT_PLATFORMS, location }: SocialLinksProps) {
  const trackClick = (platform: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "social_click", {
        platform,
        location,
      });
    }
  };

  return (
    <div className="social-links">
      {platforms.map((key) => {
        const social = SOCIAL_DATA[key];
        return (
          <a
            key={key}
            href={social.href}
            aria-label={social.label}
            target={key === "email" ? undefined : "_blank"}
            rel={key === "email" ? undefined : "noopener noreferrer"}
            onClick={() => trackClick(key)}
          >
            {social.icon}
          </a>
        );
      })}
    </div>
  );
}
