"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createClient } from "@/lib/supabase";
import type { User, Session } from "@supabase/supabase-js";
import type { Profile } from "@/types";

// ═══════════════════════════════════════
// AUTH CONTEXT
// ═══════════════════════════════════════

interface AuthContextValue {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ═══════════════════════════════════════
// AUTH PROVIDER — wraps your app
// ═══════════════════════════════════════

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const supabase = useMemo(() => createClient(), []);

  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch the user's profile from the `profiles` table
  async function fetchProfile(userId: string) {
    if (!supabase) return;
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (data) {
      setProfile(data as Profile);
    }
  }

  useEffect(() => {
    // If Supabase client couldn't be created (missing env vars at build time),
    // skip auth initialization and just mark loading as done.
    if (!supabase) {
      setLoading(false);
      return;
    }

    // 1. Get the initial session on mount
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);

      if (s?.user) {
        fetchProfile(s.user.id);
      }
    });

    // 2. Listen for auth changes (sign-in, sign-out, token refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);

      if (s?.user) {
        fetchProfile(s.user.id);
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase]);

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
  }

  const value: AuthContextValue = useMemo(
    () => ({
      user,
      profile,
      session,
      loading,
      isAuthenticated: !!user,
      isAdmin: profile?.role === "admin",
      signOut,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, profile, session, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// ═══════════════════════════════════════
// HOOK — consume the auth context
// ═══════════════════════════════════════

export function useAuthContext(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error("useAuthContext must be used within an <AuthProvider>");
  }
  return ctx;
}
