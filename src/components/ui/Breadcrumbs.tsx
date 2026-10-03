import Link from "next/link";

export type Crumb = { href?: string; label: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="ui-crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            {i < items.length - 1 ? <span aria-hidden="true"> / </span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
