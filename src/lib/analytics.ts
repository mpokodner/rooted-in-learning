export const CONSENT_KEY = "ril_analytics_consent";

export function getAnalyticsConsent(): boolean {
  try {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(CONSENT_KEY) === "granted";
  } catch (error) {
    console.error("getAnalyticsConsent", { error });
    return false;
  }
}

export function setAnalyticsConsent(granted: boolean): void {
  try {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
  } catch (error) {
    console.error("setAnalyticsConsent", { granted, error });
  }
}

const ALLOWED_PROPS = new Set([
  "location",
  "page_path",
  "cta_label",
  "content_category",
  "referrer_domain",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
]);

export function track(event: string, payload?: Record<string, string>): void {
  try {
    if (!getAnalyticsConsent()) return;
    const params = new URLSearchParams(window.location.search);
    const safe: Record<string, string> = {
      page_path: window.location.pathname,
    };
    if (document.referrer) {
      try {
        safe.referrer_domain = new URL(document.referrer).hostname;
      } catch (error) {
        console.error("track.referrer", { error });
      }
    }
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content"]) {
      const value = params.get(key)?.trim();
      if (value) safe[key] = value.slice(0, 80);
    }
    if (payload) {
      for (const [key, value] of Object.entries(payload)) {
        if (ALLOWED_PROPS.has(key) && value.trim()) safe[key] = value.trim().slice(0, 120);
      }
    }
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", event, safe);
  } catch (error) {
    console.error("track", { event, error });
  }
}
