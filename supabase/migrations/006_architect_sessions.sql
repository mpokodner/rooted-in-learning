-- ═══════════════════════════════════════════════════════════════
-- The Rooted Learner — Architect Sessions (Idea Architect)
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ═══════════════════════════════════════════════════════════════

create table public.architect_sessions (
  id                   uuid primary key default uuid_generate_v4(),
  idea_id              uuid references public.ideas(id) on delete set null,
  title                text not null,
  input_idea           text not null,
  constraints          jsonb not null default '{}'::jsonb,
  selected_skills      jsonb not null default '[]'::jsonb,
  architecture         jsonb not null default '{}'::jsonb,
  implementation_prompt text,
  status               text not null default 'draft'
                       check (status in ('draft','generating','complete','error')),
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

alter table public.architect_sessions enable row level security;

create policy "Admins can manage architect sessions"
  on public.architect_sessions for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create trigger architect_sessions_updated_at
  before update on public.architect_sessions
  for each row execute function public.update_updated_at();

create index idx_architect_sessions_idea on public.architect_sessions(idea_id);
create index idx_architect_sessions_status on public.architect_sessions(status);
create index idx_architect_sessions_created on public.architect_sessions(created_at desc);
