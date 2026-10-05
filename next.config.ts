import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      { source: "/for-districts/assessalign", destination: "/aligned", permanent: true },
      { source: "/for-districts", destination: "/districts", permanent: true },
      { source: "/partner", destination: "/districts", permanent: true },
      { source: "/insights", destination: "/blog", permanent: true },
      { source: "/insights/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/products", destination: "/shop", permanent: true },
      { source: "/products/lessons", destination: "/shop", permanent: true },
      { source: "/products/teacher-tools", destination: "/shop", permanent: true },
      { source: "/products/assessalign", destination: "/aligned", permanent: true },
      { source: "/parents", destination: "/", permanent: true },
      { source: "/family-hub", destination: "/", permanent: true },
      { source: "/parent-resources", destination: "/", permanent: true },
      { source: "/services", destination: "/work-with-me", permanent: true },
      { source: "/services/:path*", destination: "/work-with-me", permanent: true },
      { source: "/resources/recommended-tools", destination: "/shop", permanent: true },
      { source: "/recommended-tools", destination: "/shop", permanent: true },
      { source: "/resources", destination: "/shop", permanent: true },
      { source: "/resources/favorites", destination: "/shop", permanent: true },
      { source: "/my-picks", destination: "/shop", permanent: true },
      { source: "/resources/lessons", destination: "/shop", permanent: true },
      { source: "/resources/teacher-tools", destination: "/shop", permanent: true },
      { source: "/teacher-shop", destination: "/shop", permanent: true },
      { source: "/edtech-tools", destination: "/for-districts", permanent: true },
      { source: "/consulting", destination: "/work-with-me", permanent: true },
      { source: "/consulting/assessalign", destination: "/aligned", permanent: true },
      { source: "/tools", destination: "/for-districts", permanent: true },
      { source: "/tools/:path*", destination: "/for-districts/:path*", permanent: true },
      { source: "/about/projects", destination: "/about#projects", permanent: true },
      { source: "/learn/toolkit", destination: "/educators", permanent: true },
      { source: "/learn/toolkit/:slug", destination: "/educators/toolkit/:slug", permanent: true },
      { source: "/learn", destination: "/educators", permanent: true },
      { source: "/shop", destination: "/educators", permanent: true },
      { source: "/for-teachers", destination: "/educators", permanent: true },
      { source: "/work-with-me", destination: "/districts", permanent: true },
      { source: "/learn/blog", destination: "/blog", permanent: true },
      { source: "/learn/blog/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/learn/teacher-toolkit", destination: "/educators", permanent: true },
      { source: "/learn/teacher-toolkit/:slug", destination: "/educators/toolkit/:slug", permanent: true },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "the-rooted-learner",

  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    // Tree-shaking options for reducing bundle size
    treeshake: {
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      removeDebugLogging: true,
    },
  },
});
