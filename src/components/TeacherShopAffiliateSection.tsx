"use client";

import { useState, useCallback, useMemo } from "react";
import FilterBar, { type FilterConfig } from "./FilterBar";
import ProductCard from "./ProductCard";
import {
  teacherShopProducts,
  TEACHER_GRADE_LEVELS,
  TEACHER_SUBJECTS,
  TEACHER_SKILLS,
  TEACHER_PRICE_RANGES,
  TEACHER_TIME_OF_YEAR,
} from "@/data/teacherShopProducts";
import "./affiliate-products.css";

const FILTER_CONFIGS: FilterConfig[] = [
  { id: "gradeLevel", label: "Grade Level", options: TEACHER_GRADE_LEVELS },
  { id: "subject", label: "Subject", options: TEACHER_SUBJECTS },
  { id: "skill", label: "Skill", options: TEACHER_SKILLS },
  { id: "priceRange", label: "Price Range", options: TEACHER_PRICE_RANGES },
  { id: "timeOfYear", label: "Time of Year", options: TEACHER_TIME_OF_YEAR },
];

function createEmptyFilters(): Record<string, Set<string>> {
  return Object.fromEntries(FILTER_CONFIGS.map((f) => [f.id, new Set<string>()]));
}

export default function TeacherShopAffiliateSection() {
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
    return teacherShopProducts.filter((p) => {
      const gl = activeFilters.gradeLevel;
      if (gl.size > 0 && !p.gradeLevel.some((g) => gl.has(g))) return false;

      const subj = activeFilters.subject;
      if (subj.size > 0 && !p.subject.some((s) => subj.has(s))) return false;

      const sk = activeFilters.skill;
      if (sk.size > 0 && !p.skill.some((s) => sk.has(s))) return false;

      const pr = activeFilters.priceRange;
      if (pr.size > 0 && !pr.has(p.priceRange)) return false;

      const toy = activeFilters.timeOfYear;
      if (toy.size > 0 && !p.timeOfYear.some((t) => toy.has(t))) return false;

      return true;
    });
  }, [activeFilters]);

  return (
    <>
      {/* Disclosure */}
      <div className="aff-disclosure">
        This section contains affiliate links. I may earn a small commission at no extra cost to you.
      </div>

      {/* Filter Bar */}
      <FilterBar
        filters={FILTER_CONFIGS}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearAll={handleClearAll}
      />

      {/* Product Grid */}
      <section className="aff-section" aria-labelledby="ts-aff-heading">
        <div className="aff-container">
          <div className="aff-section-header">
            <p className="aff-section-label">Classroom-Tested Picks</p>
            <h2 id="ts-aff-heading" className="aff-section-title">
              Teacher-Recommended Products
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
                    ...product.gradeLevel,
                    ...product.subject.slice(0, 1),
                    ...product.skill.slice(0, 1),
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
