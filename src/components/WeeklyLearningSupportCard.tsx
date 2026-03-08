import type { WeeklyFeature } from "@/data/parentResourceProducts";

type WeeklyLearningSupportCardProps = {
  feature: WeeklyFeature;
};

export default function WeeklyLearningSupportCard({
  feature,
}: WeeklyLearningSupportCardProps) {
  return (
    <div className="aff-weekly-card">
      <div className="aff-weekly-badge">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        Weekly Learning Support
      </div>
      <div className="aff-weekly-inner">
        <div className="aff-weekly-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={feature.imageUrl} alt={feature.name} loading="lazy" />
        </div>
        <div className="aff-weekly-content">
          <div className="aff-weekly-tags">
            {feature.goal.map((g) => (
              <span key={g} className="aff-card-tag">{g}</span>
            ))}
            <span className="aff-card-tag">{feature.category}</span>
          </div>
          <h3 className="aff-weekly-title">{feature.name}</h3>
          <p className="aff-weekly-desc">{feature.description}</p>
          <blockquote className="aff-weekly-note">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>
            {feature.personalNote}
          </blockquote>
          <a
            href={feature.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="aff-card-cta aff-weekly-cta"
          >
            Shop This Pick on Amazon
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
