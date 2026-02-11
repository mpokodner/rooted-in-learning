export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)] flex flex-col">
      {children}
    </div>
  );
}
