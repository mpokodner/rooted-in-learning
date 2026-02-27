-- ═══════════════════════════════════════════════════════════════
-- Migration 002: Add micro-learning series fields to products
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ═══════════════════════════════════════════════════════════════

alter table public.products
  add column if not exists series        text,
  add column if not exists series_week   integer,
  add column if not exists focus_area    text
    check (focus_area in ('ela', 'math', 'sel', 'multimedia', 'bundle')),
  add column if not exists grade_min     integer,
  add column if not exists grade_max     integer,
  add column if not exists has_digital   boolean not null default true,
  add column if not exists has_printable boolean not null default true,
  add column if not exists ml_support    boolean not null default true;

-- Grade sanity: min must be <= max when both are set
alter table public.products
  add constraint products_grade_range_valid
    check (grade_min is null or grade_max is null or grade_min <= grade_max);

-- ─── Indexes for common query patterns ─────────────────────
create index if not exists idx_products_series
  on public.products(series);

create index if not exists idx_products_focus_area
  on public.products(focus_area);

create index if not exists idx_products_grade_range
  on public.products(grade_min, grade_max);
