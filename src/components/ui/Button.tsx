import Link from "next/link";
import "./ui.css";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  disabled,
  onClick,
  className = "",
}: ButtonProps) {
  const cls = `ui-btn ui-btn--${variant} ${className}`.trim();
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
