-- Additive lead routing fields. Skip if they already exist.

alter table public.leads add column if not exists audience text;
alter table public.leads add column if not exists utm_source text;
alter table public.leads add column if not exists utm_medium text;
alter table public.leads add column if not exists utm_campaign text;

create index if not exists idx_leads_audience on public.leads(audience);
