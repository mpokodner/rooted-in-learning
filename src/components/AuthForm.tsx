"use client";

import { useActionState } from "react";
import type { AuthResult } from "@/lib/auth-actions";

interface AuthFormProps {
  action: (prevState: AuthResult, formData: FormData) => Promise<AuthResult>;
  children: React.ReactNode;
  submitLabel: string;
}

export function AuthForm({ action, children, submitLabel }: AuthFormProps) {
  const [state, formAction, isPending] = useActionState(
    action,
    {} as AuthResult
  );

  return (
    <form action={formAction}>
      {state?.error && (
        <div className="auth-alert auth-alert--error">{state.error}</div>
      )}
      {state?.success && (
        <div className="auth-alert auth-alert--success">{state.success}</div>
      )}

      {children}

      <button type="submit" disabled={isPending} className="auth-submit">
        {isPending ? (
          <span className="auth-submit-loading">
            <svg className="auth-spinner" viewBox="0 0 24 24" fill="none">
              <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Please wait...
          </span>
        ) : (
          submitLabel
        )}
      </button>
    </form>
  );
}
