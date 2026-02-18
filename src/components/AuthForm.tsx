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
    <form action={formAction} className="space-y-5">
      {state?.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-[0.75rem]">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-[0.75rem]">
          {state.success}
        </div>
      )}

      {children}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#5C6B4D] text-white py-3.5 rounded-[0.75rem] font-semibold text-sm hover:bg-[#4A5638] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
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
