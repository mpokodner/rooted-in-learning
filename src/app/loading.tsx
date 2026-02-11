export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated spinner */}
        <div className="w-10 h-10 border-3 border-[var(--border-beige)] border-t-[var(--earth)] rounded-full animate-spin" />
        <p className="text-[var(--text-sm)] text-[var(--text-muted)] font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}
