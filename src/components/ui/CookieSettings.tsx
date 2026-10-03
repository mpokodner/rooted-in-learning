"use client";

import { useEffect, useState } from "react";
import { CONSENT_KEY, getAnalyticsConsent, setAnalyticsConsent } from "@/lib/analytics";

export default function CookieSettings() {
  const [granted, setGranted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setGranted(getAnalyticsConsent());
    } catch (error) {
      console.error("CookieSettings", { error });
    }
  }, []);

  return (
    <div className="ui-cookie">
      <button type="button" onClick={() => setOpen((v) => !v)}>
        Cookie settings
      </button>
      {open ? (
        <p>
          Custom analytics events use local flag `{CONSENT_KEY}`.{" "}
          <button
            type="button"
            onClick={() => {
              try {
                const next = !granted;
                setAnalyticsConsent(next);
                setGranted(next);
              } catch (error) {
                console.error("CookieSettings.toggle", { error });
              }
            }}
          >
            {granted ? "Turn custom events off" : "Allow custom events"}
          </button>
        </p>
      ) : null}
    </div>
  );
}
