export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <div style={{ height: "56px" }} />
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ height: "2rem", width: "40%", backgroundColor: "var(--border-beige, #E8DED0)", borderRadius: "0.5rem", animation: "pulse 2s ease-in-out infinite" }} />
          <div style={{ height: "1rem", width: "70%", backgroundColor: "var(--border-beige, #E8DED0)", borderRadius: "0.375rem", animation: "pulse 2s ease-in-out infinite", animationDelay: "0.1s" }} />
          <div style={{ height: "1rem", width: "55%", backgroundColor: "var(--border-beige, #E8DED0)", borderRadius: "0.375rem", animation: "pulse 2s ease-in-out infinite", animationDelay: "0.2s" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))", gap: "1.5rem", marginTop: "1rem" }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ height: "12rem", backgroundColor: "var(--border-beige, #E8DED0)", borderRadius: "0.75rem", animation: "pulse 2s ease-in-out infinite", animationDelay: `${0.1 * i}s` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
