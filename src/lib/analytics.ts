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

export function track(event: string, payload?: Record<string, string>): void {
  try {
    if (!getAnalyticsConsent()) return;
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", event, payload ?? {});
  } catch (error) {
    console.error("track", { event, error });
  }
}
