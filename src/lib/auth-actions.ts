"use server";

import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export type AuthResult = {
  error?: string;
  success?: string;
};

export async function signIn(
  _prev: AuthResult,
  formData: FormData
): Promise<AuthResult> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const redirectTo = (formData.get("redirect") as string) || "/account";

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { error: "Unable to connect. Please try again later." };
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    if (error.message.includes("Invalid login")) {
      return { error: "Invalid email or password." };
    }
    if (error.message.includes("Email not confirmed")) {
      return {
        error: "Please check your email and confirm your account first.",
      };
    }
    return { error: error.message };
  }

  redirect(redirectTo);
}

export async function signUp(
  _prev: AuthResult,
  formData: FormData
): Promise<AuthResult> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm") as string;
  const fullName = formData.get("name") as string;

  if (!email || !password || !fullName) {
    return { error: "All fields are required." };
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters." };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { error: "Unable to connect. Please try again later." };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
      emailRedirectTo: `${siteUrl}/api/auth/callback`,
    },
  });

  if (error) {
    if (error.message.includes("already registered")) {
      return { error: "An account with this email already exists." };
    }
    return { error: error.message };
  }

  return {
    success:
      "Check your email! We sent you a confirmation link to verify your account.",
  };
}

export async function forgotPassword(
  _prev: AuthResult,
  formData: FormData
): Promise<AuthResult> {
  const email = formData.get("email") as string;

  if (!email) {
    return { error: "Email is required." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { error: "Unable to connect. Please try again later." };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${siteUrl}/api/auth/callback?next=/reset-password`,
  });

  if (error) {
    return { error: error.message };
  }

  return {
    success:
      "If an account exists with that email, you'll receive a reset link shortly.",
  };
}

export async function resetPassword(
  _prev: AuthResult,
  formData: FormData
): Promise<AuthResult> {
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm") as string;

  if (!password) {
    return { error: "Password is required." };
  }

  if (password.length < 6) {
    return { error: "Password must be at least 6 characters." };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { error: "Unable to connect. Please try again later." };
  }

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    return { error: error.message };
  }

  redirect("/login?message=Password updated successfully. Please sign in.");
}
