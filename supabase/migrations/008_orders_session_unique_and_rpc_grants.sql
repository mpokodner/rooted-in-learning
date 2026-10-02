-- Unique Stripe checkout session (webhook idempotency at the database)
create unique index if not exists orders_stripe_checkout_session_id_uidx
  on public.orders (stripe_checkout_session_id)
  where stripe_checkout_session_id is not null;

-- Trigger functions should not be callable via PostgREST
revoke execute on function public.handle_new_user() from public, anon, authenticated;

-- is_admin() is used by RLS; keep it for signed-in users only
revoke execute on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;
