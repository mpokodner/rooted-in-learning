import "./ui.css";

export default function Notice({ children }: { children: React.ReactNode }) {
  return (
    <div className="ui-notice" role="note">
      {children}
    </div>
  );
}
