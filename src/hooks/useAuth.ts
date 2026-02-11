"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { User, Session } from "@supabase/supabase-js";
import type { Profile } from "@/types";

interface AuthState {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
}

/**
 * Hook to access the current auth state on the client.
 * Subscribes to Supabase auth changes so the UI updates in real time.
 */
export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    profile: null,
    session: null,
    loading: true,
  });

  useEffect(() => {
    // Get the initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthState((prev) => ({
        ...prev,
        user: session?.user ?? null,
        session,
        loading: false,
      }));

      if (session?.user) {
        fetchProfile(session.user.id);
      }
    });

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthState((prev) => ({
        ...prev,
        user: session?.user ?? null,
        session,
        loading: false,
      }));

      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setAuthState((prev) => ({ ...prev, profile: null }));
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function fetchProfile(userId: string) {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (data) {
      setAuthState((prev) => ({ ...prev, profile: data as Profile }));
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    setAuthState({ user: null, profile: null, session: null, loading: false });
  }

  return {
    ...authState,
    signOut,
    isAuthenticated: !!authState.user,
    isAdmin: authState.profile?.role === "admin",
  };
}
