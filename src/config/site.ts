function envFlag(name: string): boolean {
  return process.env[name] === "true";
}

function envLink(name: string): string {
  return process.env[name]?.trim() ?? "";
}

export const PRODUCT_NAME = "AlignED";
export const COMPANY_NAME = "The Rooted Learner";

export const flags = {
  alignedRedirects: envFlag("NEXT_PUBLIC_ALIGNED_REDIRECTS"),
  hallpassPublic: envFlag("NEXT_PUBLIC_HALLPASS_PUBLIC"),
  iaRedirects: envFlag("NEXT_PUBLIC_IA_REDIRECTS"),
};

export const links = {
  tpt: envLink("NEXT_PUBLIC_TPT_URL"),
  youtube: envLink("NEXT_PUBLIC_YOUTUBE_URL"),
  linkedin: envLink("NEXT_PUBLIC_LINKEDIN_URL"),
  booking: envLink("NEXT_PUBLIC_BOOKING_URL"),
  groupingKit: envLink("NEXT_PUBLIC_GROUPING_KIT_URL"),
  gscVerification: envLink("NEXT_PUBLIC_GSC_VERIFICATION"),
};

export const nav = {
  primary: [
    { href: "/partner", label: "For Districts" },
    { href: "/educators", label: "For Educators" },
    { href: "/insights", label: "Blog" },
    { href: "/about", label: "About" },
  ],
  cta: { href: "/contact", label: "Request a conversation" },
};
