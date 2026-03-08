"use client";

import { useState, useCallback, useMemo } from "react";
import FilterBar, { type FilterConfig } from "./FilterBar";
import ProductCard from "./ProductCard";
import WeeklyLearningSupportCard from "./WeeklyLearningSupportCard";
import {
  parentResourceProducts,
  weeklyFeature,
  PARENT_SKILLS,
  PARENT_CATEGORIES,
  PARENT_GOALS,
  PARENT_PRICE_RANGES,
} from "@/data/parentResourceProducts";
import "./affiliate-products.css";

const FILTER_CONFIGS: FilterConfig[] = [
  { id: "skill", label: "Skill", options: PARENT_SKILLS },
  { id: "category", label: "Category", options: PARENT_CATEGORIES },
  { id: "goal", label: "Goal", options: PARENT_GOALS },
  { id: "priceRange", label: "Price Range", options: PARENT_PRICE_RANGES },
];

function createEmptyFilters(): Record<string, Set<string>> {
  return Object.fromEntries(FILTER_CONFIGS.map((f) => [f.id, new Set<string>()]));
}

export default function ParentResourcesAffiliateSection() {
  const [activeFilters, setActiveFilters] = useState<Record<string, Set<string>>>(createEmptyFilters);

  const handleFilterChange = useCallback((filterId: string, value: string) => {
    setActiveFilters((prev) => {
      const next = { ...prev };
      const set = new Set(prev[filterId]);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      next[filterId] = set;
      return next;
    });
  }, []);

  const handleClearAll = useCallback(() => {
    setActiveFilters(createEmptyFilters());
  }, []);

  const filtered = useMemo(() => {
    return parentResourceProducts.filter((p) => {
      const sk = activeFilters.skill;
      if (sk.size > 0 && !p.skill.some((s) => sk.has(s))) return false;

      const cat = activeFilters.category;
      if (cat.size > 0 && !p.category.some((c) => cat.has(c))) return false;

      const gl = activeFilters.goal;
      if (gl.size > 0 && !p.goal.some((g) => gl.has(g))) return false;

      const pr = activeFilters.priceRange;
      if (pr.size > 0 && !pr.has(p.priceRange)) return false;

      return true;
    });
  }, [activeFilters]);

  return (
    <>
      {/* Disclosure */}
      <div className="aff-disclosure">
        This section contains affiliate links. I may earn a small commission at no extra cost to you.
      </div>

      {/* Weekly Learning Support */}
      <section className="aff-section aff-section--alt" aria-labelledby="pr-weekly-heading">
        <div className="aff-container">
          <h2 id="pr-weekly-heading" className="sr-only">Weekly Learning Support</h2>
          <WeeklyLearningSupportCard feature={weeklyFeature} />
        </div>
      </section>

      {/* Filter Bar */}
      <FilterBar
        filters={FILTER_CONFIGS}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearAll={handleClearAll}
      />

      {/* Product Grid */}
      <section className="aff-section" aria-labelledby="pr-aff-heading">
        <div className="aff-container">
          <div className="aff-section-header">
            <p className="aff-section-label">Picked for Families</p>
            <h2 id="pr-aff-heading" className="aff-section-title">
              Resources to Support Learning at Home
            </h2>
          </div>

          <div className="aff-grid">
            {filtered.length > 0 ? (
              filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  affiliateUrl={product.affiliateUrl}
                  priceRange={product.priceRange}
                  tags={[
                    ...product.skill.slice(0, 2),
                    ...product.goal.slice(0, 1),
                  ]}
                />
              ))
            ) : (
              <div className="aff-empty">
                <svg className="aff-empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <h3 className="aff-empty-title">No products match your filters</h3>
                <p className="aff-empty-desc">
                  Try removing some filters or clearing all to see the full collection.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
