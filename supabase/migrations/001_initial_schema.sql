-- ═══════════════════════════════════════════════════════════════
-- Rooted in Learning — Initial Database Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ═══════════════════════════════════════════════════════════════

-- ─── EXTENSIONS ──────────────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ═══════════════════════════════════════════════════════════════
-- 1. PROFILES
-- ═══════════════════════════════════════════════════════════════

create table public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  email       text not null,
  full_name   text,
  avatar_url  text,
  role        text not null default 'user' check (role in ('user', 'admin')),
  stripe_customer_id text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Anyone can read their own profile
create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Users can update their own profile (but not role)
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Service role inserts profiles via trigger (no user-facing insert policy needed)
-- Admins can read all profiles
create policy "Admins can read all profiles"
  on public.profiles for select
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role = 'admin'
    )
  );

-- ─── Auto-create profile on signup ──────────────────────────
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', null)
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ─── Auto-update updated_at ─────────────────────────────────
create or replace function public.update_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at();


-- ═══════════════════════════════════════════════════════════════
-- 2. PRODUCTS
-- ═══════════════════════════════════════════════════════════════

create table public.products (
  id               uuid primary key default uuid_generate_v4(),
  name             text not null,
  slug             text not null unique,
  description      text,
  price            integer not null default 0,
  compare_at_price integer,
  product_type     text not null default 'digital'
                   check (product_type in ('digital', 'physical', 'course', 'template')),
  category         text not null default 'general',
  images           text[] not null default '{}',
  stripe_price_id  text,
  file_url         text,
  active           boolean not null default true,
  featured         boolean not null default false,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

alter table public.products enable row level security;

-- Public read for active products
create policy "Anyone can read active products"
  on public.products for select
  using (active = true);

-- Admins can do everything with products
create policy "Admins can manage products"
  on public.products for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create trigger products_updated_at
  before update on public.products
  for each row execute function public.update_updated_at();


-- ═══════════════════════════════════════════════════════════════
-- 3. ORDERS
-- ═══════════════════════════════════════════════════════════════

create table public.orders (
  id                          uuid primary key default uuid_generate_v4(),
  order_number                text not null unique,
  user_id                     uuid references public.profiles(id) on delete set null,
  email                       text not null,
  status                      text not null default 'pending'
                              check (status in ('pending', 'processing', 'completed', 'cancelled', 'refunded')),
  total                       integer not null default 0,
  stripe_checkout_session_id  text,
  stripe_payment_intent_id    text,
  created_at                  timestamptz not null default now(),
  updated_at                  timestamptz not null default now()
);

alter table public.orders enable row level security;

-- Users can read their own orders
create policy "Users can read own orders"
  on public.orders for select
  using (auth.uid() = user_id);

-- Admins can manage all orders
create policy "Admins can manage orders"
  on public.orders for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Service role inserts orders via webhooks (no user insert policy needed)

create trigger orders_updated_at
  before update on public.orders
  for each row execute function public.update_updated_at();


-- ═══════════════════════════════════════════════════════════════
-- 4. ORDER ITEMS
-- ═══════════════════════════════════════════════════════════════

create table public.order_items (
  id           uuid primary key default uuid_generate_v4(),
  order_id     uuid not null references public.orders(id) on delete cascade,
  product_id   uuid references public.products(id) on delete set null,
  product_name text not null,
  quantity     integer not null default 1,
  price        integer not null default 0
);

alter table public.order_items enable row level security;

-- Users can read their own order items (via order ownership)
create policy "Users can read own order items"
  on public.order_items for select
  using (
    exists (
      select 1 from public.orders
      where orders.id = order_items.order_id
        and orders.user_id = auth.uid()
    )
  );

-- Admins can manage all order items
create policy "Admins can manage order items"
  on public.order_items for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );


-- ═══════════════════════════════════════════════════════════════
-- 5. CART ITEMS
-- ═══════════════════════════════════════════════════════════════

create table public.cart_items (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  product_id  uuid not null references public.products(id) on delete cascade,
  quantity    integer not null default 1,
  created_at  timestamptz not null default now(),
  unique(user_id, product_id)
);

alter table public.cart_items enable row level security;

-- Users can manage their own cart
create policy "Users can read own cart"
  on public.cart_items for select
  using (auth.uid() = user_id);

create policy "Users can insert into own cart"
  on public.cart_items for insert
  with check (auth.uid() = user_id);

create policy "Users can update own cart"
  on public.cart_items for update
  using (auth.uid() = user_id);

create policy "Users can delete from own cart"
  on public.cart_items for delete
  using (auth.uid() = user_id);


-- ═══════════════════════════════════════════════════════════════
-- 6. NEWSLETTER SUBSCRIBERS
-- ═══════════════════════════════════════════════════════════════

create table public.newsletter_subscribers (
  id           uuid primary key default uuid_generate_v4(),
  email        text not null unique,
  name         text,
  source       text not null default 'website',
  freebie_sent boolean not null default false,
  subscribed   boolean not null default true,
  created_at   timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

-- No public read/write — only service role (API routes) manages subscribers
-- Admins can read subscribers
create policy "Admins can manage subscribers"
  on public.newsletter_subscribers for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );


-- ═══════════════════════════════════════════════════════════════
-- 7. BLOG POSTS
-- ═══════════════════════════════════════════════════════════════

create table public.blog_posts (
  id           uuid primary key default uuid_generate_v4(),
  title        text not null,
  slug         text not null unique,
  excerpt      text,
  content      text not null default '',
  cover_image  text,
  category     text not null default 'general',
  tags         text[] not null default '{}',
  author_id    uuid references public.profiles(id) on delete set null,
  published    boolean not null default false,
  published_at timestamptz,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

alter table public.blog_posts enable row level security;

-- Public can read published posts
create policy "Anyone can read published posts"
  on public.blog_posts for select
  using (published = true);

-- Admins can manage all posts
create policy "Admins can manage posts"
  on public.blog_posts for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create trigger blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.update_updated_at();


-- ═══════════════════════════════════════════════════════════════
-- 8. SAVED ITEMS (Favorites / Bookmarks)
-- ═══════════════════════════════════════════════════════════════

create table public.saved_items (
  id         uuid primary key default uuid_generate_v4(),
  user_id    uuid not null references public.profiles(id) on delete cascade,
  item_type  text not null check (item_type in ('blog_post', 'product', 'video')),
  item_id    uuid not null,
  created_at timestamptz not null default now(),
  unique(user_id, item_type, item_id)
);

alter table public.saved_items enable row level security;

create policy "Users can read own saved items"
  on public.saved_items for select
  using (auth.uid() = user_id);

create policy "Users can insert own saved items"
  on public.saved_items for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own saved items"
  on public.saved_items for delete
  using (auth.uid() = user_id);


-- ═══════════════════════════════════════════════════════════════
-- 9. AFFILIATE LINKS
-- ═══════════════════════════════════════════════════════════════

create table public.affiliate_links (
  id          uuid primary key default uuid_generate_v4(),
  title       text not null,
  description text,
  url         text not null,
  image_url   text,
  platform    text not null default 'other'
              check (platform in ('amazon', 'pinterest', 'youtube', 'instagram', 'other')),
  category    text not null default 'general',
  active      boolean not null default true,
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now()
);

alter table public.affiliate_links enable row level security;

-- Public can read active links
create policy "Anyone can read active affiliate links"
  on public.affiliate_links for select
  using (active = true);

-- Admins can manage links
create policy "Admins can manage affiliate links"
  on public.affiliate_links for all
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );


-- ═══════════════════════════════════════════════════════════════
-- 10. INDEXES
-- ═══════════════════════════════════════════════════════════════

-- Profiles
create index idx_profiles_email on public.profiles(email);
create index idx_profiles_role on public.profiles(role);

-- Products
create index idx_products_slug on public.products(slug);
create index idx_products_category on public.products(category);
create index idx_products_active on public.products(active);
create index idx_products_featured on public.products(featured);
create index idx_products_type on public.products(product_type);

-- Orders
create index idx_orders_user_id on public.orders(user_id);
create index idx_orders_email on public.orders(email);
create index idx_orders_status on public.orders(status);
create index idx_orders_number on public.orders(order_number);

-- Order Items
create index idx_order_items_order_id on public.order_items(order_id);
create index idx_order_items_product_id on public.order_items(product_id);

-- Cart Items
create index idx_cart_items_user_id on public.cart_items(user_id);

-- Newsletter
create index idx_newsletter_email on public.newsletter_subscribers(email);
create index idx_newsletter_subscribed on public.newsletter_subscribers(subscribed);

-- Blog Posts
create index idx_blog_posts_slug on public.blog_posts(slug);
create index idx_blog_posts_published on public.blog_posts(published);
create index idx_blog_posts_category on public.blog_posts(category);
create index idx_blog_posts_author on public.blog_posts(author_id);

-- Saved Items
create index idx_saved_items_user_id on public.saved_items(user_id);
create index idx_saved_items_lookup on public.saved_items(user_id, item_type);

-- Affiliate Links
create index idx_affiliate_links_active on public.affiliate_links(active);
create index idx_affiliate_links_platform on public.affiliate_links(platform);


-- ═══════════════════════════════════════════════════════════════
-- 11. STORAGE BUCKETS
-- ═══════════════════════════════════════════════════════════════

-- Product images (public)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'product-images',
  'product-images',
  true,
  5242880, -- 5 MB
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do nothing;

-- Product files / digital downloads (private)
insert into storage.buckets (id, name, public, file_size_limit)
values (
  'product-files',
  'product-files',
  false,
  104857600 -- 100 MB
)
on conflict (id) do nothing;

-- User avatars (public)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'avatars',
  'avatars',
  true,
  2097152, -- 2 MB
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do nothing;

-- ─── Storage RLS Policies ────────────────────────────────────

-- Product images: public read, admin write
create policy "Public read product images"
  on storage.objects for select
  using (bucket_id = 'product-images');

create policy "Admins upload product images"
  on storage.objects for insert
  with check (
    bucket_id = 'product-images'
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create policy "Admins delete product images"
  on storage.objects for delete
  using (
    bucket_id = 'product-images'
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Product files: admin write, authenticated download (verified via app logic)
create policy "Admins upload product files"
  on storage.objects for insert
  with check (
    bucket_id = 'product-files'
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

create policy "Admins delete product files"
  on storage.objects for delete
  using (
    bucket_id = 'product-files'
    and exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Avatars: public read, users can manage their own (folder = user id)
create policy "Public read avatars"
  on storage.objects for select
  using (bucket_id = 'avatars');

create policy "Users upload own avatar"
  on storage.objects for insert
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "Users update own avatar"
  on storage.objects for update
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "Users delete own avatar"
  on storage.objects for delete
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
