"use client";

import { useState } from "react";

export type FilterConfig = {
  id: string;
  label: string;
  options: readonly string[];
};

type FilterBarProps = {
  filters: FilterConfig[];
  activeFilters: Record<string, Set<string>>;
  onFilterChange: (filterId: string, value: string) => void;
  onClearAll: () => void;
};

export default function FilterBar({
  filters,
  activeFilters,
  onFilterChange,
  onClearAll,
}: FilterBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const hasActive = Object.values(activeFilters).some((s) => s.size > 0);

  return (
    <div className="aff-filter-bar">
      <div className="aff-container">
        {/* Mobile toggle */}
        <button
          className="aff-filter-mobile-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="aff-filter-panel"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
          {hasActive && <span className="aff-filter-count">{Object.values(activeFilters).reduce((n, s) => n + s.size, 0)}</span>}
          <svg className={`aff-filter-chevron${mobileOpen ? " aff-filter-chevron--open" : ""}`} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Filter panel */}
        <div
          id="aff-filter-panel"
          className={`aff-filter-panel${mobileOpen ? " aff-filter-panel--open" : ""}`}
        >
          {filters.map((filter) => (
            <div key={filter.id} className="aff-filter-group">
              <span className="aff-filter-group-label">{filter.label}</span>
              <div className="aff-filter-pills">
                {filter.options.map((opt) => {
                  const isActive = activeFilters[filter.id]?.has(opt);
                  return (
                    <button
                      key={opt}
                      className={`aff-filter-pill${isActive ? " aff-filter-pill--active" : ""}`}
                      onClick={() => onFilterChange(filter.id, opt)}
                      aria-pressed={isActive}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {hasActive && (
            <button className="aff-filter-clear" onClick={onClearAll}>
              Clear All
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
