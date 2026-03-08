type ProductCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  affiliateUrl: string;
  priceRange: string;
  tags: string[];
};

export default function ProductCard({
  name,
  description,
  imageUrl,
  affiliateUrl,
  priceRange,
  tags,
}: ProductCardProps) {
  return (
    <div className="aff-card">
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="aff-card-image-link"
        aria-label={`View ${name} on Amazon`}
      >
        <div className="aff-card-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt={name} loading="lazy" />
          <span className="aff-card-price-badge">{priceRange}</span>
        </div>
      </a>
      <div className="aff-card-body">
        <div className="aff-card-tags">
          {tags.slice(0, 4).map((tag) => (
            <span key={tag} className="aff-card-tag">{tag}</span>
          ))}
        </div>
        <h3 className="aff-card-title">{name}</h3>
        <p className="aff-card-desc">{description}</p>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="aff-card-cta"
        >
          Shop on Amazon
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
