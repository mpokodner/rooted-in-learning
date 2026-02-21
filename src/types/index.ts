/**
 * The Rooted Learner — Shared Type Definitions
 * These types mirror the Supabase database schema and
 * are used across both server and client code.
 */

// ═══════════════════════════════════════
// USER & AUTH
// ═══════════════════════════════════════

export type UserRole = "user" | "admin";

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  role: UserRole;
  stripe_customer_id: string | null;
  created_at: string;
  updated_at: string;
}

// ═══════════════════════════════════════
// BLOG POSTS
// ═══════════════════════════════════════

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string; // HTML or Portable Text from Sanity
  cover_image: string | null;
  category: string;
  tags: string[];
  author_id: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

// ═══════════════════════════════════════
// PRODUCTS
// ═══════════════════════════════════════

export type ProductType = "digital" | "physical" | "course" | "template";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number; // stored in cents
  compare_at_price: number | null;
  product_type: ProductType;
  category: string;
  images: string[];
  stripe_price_id: string | null;
  file_url: string | null; // for digital downloads
  active: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

// ═══════════════════════════════════════
// ORDERS
// ═══════════════════════════════════════

export type OrderStatus =
  | "pending"
  | "processing"
  | "completed"
  | "cancelled"
  | "refunded";

export interface Order {
  id: string;
  order_number: string;
  user_id: string;
  email: string;
  status: OrderStatus;
  total: number; // stored in cents
  stripe_checkout_session_id: string | null;
  stripe_payment_intent_id: string | null;
  items: OrderItem[];
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  quantity: number;
  price: number; // stored in cents
  product?: Product; // optional join
}

// ═══════════════════════════════════════
// CART
// ═══════════════════════════════════════

export interface CartItem {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  created_at: string;
  product?: Product; // optional join
}

// ═══════════════════════════════════════
// SAVED ITEMS (Favorites / Bookmarks)
// ═══════════════════════════════════════

export type SavedItemType = "blog_post" | "product" | "video";

export interface SavedItem {
  id: string;
  user_id: string;
  item_type: SavedItemType;
  item_id: string;
  created_at: string;
  // Optional joined data
  blog_post?: BlogPost;
  product?: Product;
}

// ═══════════════════════════════════════
// NEWSLETTER
// ═══════════════════════════════════════

export interface NewsletterSubscriber {
  id: string;
  email: string;
  name: string | null;
  source: string; // e.g., "homepage", "blog", "freebie"
  freebie_sent: boolean;
  subscribed: boolean;
  created_at: string;
}

// ═══════════════════════════════════════
// AFFILIATE / FAVORITES
// ═══════════════════════════════════════

export type AffiliatePlatform =
  | "amazon"
  | "pinterest"
  | "youtube"
  | "instagram"
  | "other";

export interface AffiliateLink {
  id: string;
  title: string;
  description: string | null;
  url: string;
  image_url: string | null;
  platform: AffiliatePlatform;
  category: string;
  active: boolean;
  sort_order: number;
  created_at: string;
}

// ═══════════════════════════════════════
// API RESPONSES
// ═══════════════════════════════════════

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// ═══════════════════════════════════════
// PAGINATION
// ═══════════════════════════════════════

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}
