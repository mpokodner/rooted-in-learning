// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN,

  tracesSampleRate: 0.2,
  enableLogs: true,

  // Session Replay can capture form fields (emails, messages). Keep it off.
  integrations: [],
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,

  dataCollection: {
    userInfo: false,
    httpBodies: [],
  },
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
