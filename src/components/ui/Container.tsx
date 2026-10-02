import "./ui.css";

export default function Container({
  children,
  narrow = false,
  className = "",
}: {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return (
    <div className={`ui-container${narrow ? " ui-container--narrow" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}
