function envFlag(name: string): boolean {
  return process.env[name] === "true";
}

function envLink(name: string, fallback = ""): string {
  return process.env[name]?.trim() || fallback;
}

export const PRODUCT_NAME = "AlignED";
export const COMPANY_NAME = "The Rooted Learner";

export const flags = {
  alignedRedirects: envFlag("NEXT_PUBLIC_ALIGNED_REDIRECTS"),
  hallpassPublic: envFlag("NEXT_PUBLIC_HALLPASS_PUBLIC"),
  iaRedirects: envFlag("NEXT_PUBLIC_IA_REDIRECTS"),
};

export const links = {
  tpt: envLink(
    "NEXT_PUBLIC_TPT_URL",
    "https://www.teacherspayteachers.com/store/the-rooted-learner-classroom",
  ),
  youtube: envLink(
    "NEXT_PUBLIC_YOUTUBE_URL",
    "https://www.youtube.com/@TheRootedLearner",
  ),
  linkedin: envLink(
    "NEXT_PUBLIC_LINKEDIN_URL",
    "https://www.linkedin.com/in/michelle-pokodner-edtech/",
  ),
  booking: envLink("NEXT_PUBLIC_BOOKING_URL"),
  groupingKit: envLink("NEXT_PUBLIC_GROUPING_KIT_URL"),
  gscVerification: envLink("NEXT_PUBLIC_GSC_VERIFICATION"),
};

export const nav = {
  primary: [
    { href: "/districts", label: "For Districts" },
    { href: "/educators", label: "For Educators" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ],
  cta: { href: "/contact", label: "Request a conversation" },
};
