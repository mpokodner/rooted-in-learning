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
  track?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  disabled,
  onClick,
  className = "",
  track,
}: ButtonProps) {
  const cls = `ui-btn ui-btn--${variant} ${className}`.trim();
  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} className={cls} data-track={track} rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} data-track={track}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick} data-track={track}>
      {children}
    </button>
  );
}
