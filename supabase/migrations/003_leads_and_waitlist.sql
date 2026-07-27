-- ═══════════════════════════════════════════════════════════════
-- LEADS — Contact form inquiries stored for follow-up
-- ═══════════════════════════════════════════════════════════════

create table public.leads (
  id           uuid primary key default uuid_generate_v4(),
  email        text not null,
  name         text not null,
  subject      text,
  message      text,
  organization text,
  source       text not null default 'contact-page',
  status       text not null default 'new' check (status in ('new', 'contacted', 'closed')),
  subscribe_newsletter boolean not null default false,
  created_at   timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "Admins can manage leads"
  on public.leads for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create index idx_leads_email on public.leads(email);
create index idx_leads_status on public.leads(status);
create index idx_leads_source on public.leads(source);
create index idx_leads_created on public.leads(created_at);


-- ═══════════════════════════════════════════════════════════════
-- WAITLIST — Product early access signups (AssessAlign, etc.)
-- ═══════════════════════════════════════════════════════════════

create table public.waitlist (
  id             uuid primary key default uuid_generate_v4(),
  email          text not null,
  name           text,
  role           text,
  organization   text,
  district_size  text,
  product        text not null default 'assessalign',
  source         text not null default 'assessalign-page',
  subscribe_newsletter boolean not null default false,
  created_at     timestamptz not null default now(),
  unique(email, product)
);

alter table public.waitlist enable row level security;

create policy "Admins can manage waitlist"
  on public.waitlist for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create index idx_waitlist_email on public.waitlist(email);
create index idx_waitlist_product on public.waitlist(product);
create index idx_waitlist_created on public.waitlist(created_at);
