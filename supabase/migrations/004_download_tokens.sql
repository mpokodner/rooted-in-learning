-- ═══════════════════════════════════════════════════════════════
-- Download Tokens — allow file downloads without an account
-- ═══════════════════════════════════════════════════════════════

create table public.download_tokens (
  id          uuid primary key default uuid_generate_v4(),
  token       text not null unique,
  order_id    uuid not null references public.orders(id) on delete cascade,
  product_id  uuid not null references public.products(id) on delete cascade,
  email       text not null,
  downloads   int not null default 0,
  max_downloads int not null default 5,
  expires_at  timestamptz not null,
  created_at  timestamptz not null default now()
);

alter table public.download_tokens enable row level security;

-- No public access — only service role (webhooks, API routes) can read/write
-- Admins can view tokens
create policy "Admins can view download tokens"
  on public.download_tokens for select
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role = 'admin'
    )
  );

create index idx_download_tokens_token on public.download_tokens(token);
create index idx_download_tokens_order on public.download_tokens(order_id);
