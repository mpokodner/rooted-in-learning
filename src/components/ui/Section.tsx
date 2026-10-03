export default function Section({
  children,
  alt = false,
  ink = false,
  className = "",
  id,
  labelledBy,
}: {
  children: React.ReactNode;
  alt?: boolean;
  ink?: boolean;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  const tone = alt ? " ui-section--alt" : ink ? " ui-section--ink" : "";
  return (
    <section
      id={id}
      className={`ui-section${tone} ${className}`.trim()}
      aria-labelledby={labelledBy}
    >
      {children}
    </section>
  );
}
