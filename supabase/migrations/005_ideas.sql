-- ═══════════════════════════════════════════════════════════════
-- The Rooted Learner — Ideas (Idea Engine / Vault)
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ═══════════════════════════════════════════════════════════════

create table public.ideas (
  id               uuid primary key default uuid_generate_v4(),
  title            text,
  original_idea    text not null,
  status           text not null default 'draft'
                   check (status in ('draft','researched','routed','complete','archived')),
  tpt_research     jsonb,
  brand_research   jsonb,
  routing          jsonb,
  optimized        jsonb,
  channel          text check (channel in ('tpt','rooted-learner','both')),
  sources          jsonb not null default '[]'::jsonb,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

alter table public.ideas enable row level security;

create policy "Admins can manage ideas"
  on public.ideas for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create trigger ideas_updated_at
  before update on public.ideas
  for each row execute function public.update_updated_at();

create index idx_ideas_channel on public.ideas(channel);
create index idx_ideas_status on public.ideas(status);
create index idx_ideas_created on public.ideas(created_at desc);
