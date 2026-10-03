export default function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.therootedlearner.com";
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site}${item.path}`,
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
