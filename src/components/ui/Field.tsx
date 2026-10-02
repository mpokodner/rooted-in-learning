export default function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="ui-field">
      <label htmlFor={id}>{label}</label>
      {children}
      {hint ? <p className="ui-hint">{hint}</p> : null}
    </div>
  );
}
