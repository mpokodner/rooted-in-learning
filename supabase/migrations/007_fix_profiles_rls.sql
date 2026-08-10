-- ═══════════════════════════════════════════════════════════════
-- Fix: Profiles RLS infinite recursion
-- The "Admins can read all profiles" policy sub-selects on
-- profiles itself, triggering the same policy → infinite loop.
-- Fix: a SECURITY DEFINER function that bypasses RLS.
-- ═══════════════════════════════════════════════════════════════

-- Helper: check admin status without going through RLS
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- Replace the recursive policy on profiles
drop policy if exists "Admins can read all profiles" on public.profiles;

create policy "Admins can read all profiles"
  on public.profiles for select
  using (public.is_admin());
