"use client";

/**
 * Hook to access the current auth state on the client.
 * Re-exports `useAuthContext` from AuthProvider so existing
 * imports of `useAuth` keep working without changes.
 */
export { useAuthContext as useAuth } from "@/components/AuthProvider";
