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
  content: string;
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

export type FocusArea = "ela" | "math" | "sel" | "multimedia" | "bundle";

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
  series: string | null;
  series_week: number | null;
  focus_area: FocusArea | null;
  grade_min: number | null;
  grade_max: number | null;
  has_digital: boolean;
  has_printable: boolean;
  ml_support: boolean;
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
// IDEAS (Idea Engine / Vault)
// ═══════════════════════════════════════

export type IdeaStatus = "draft" | "researched" | "routed" | "complete" | "archived";

export type IdeaChannel = "tpt" | "rooted-learner" | "both";

export type SourceReputability = "official" | "industry" | "seller-anecdote" | "inferred";

export interface IdeaSource {
  url: string;
  title?: string;
  access_date: string;
  reputability: SourceReputability;
  snippet?: string;
}

export interface SourcedClaim {
  claim: string;
  sources: IdeaSource[];
}

export interface TptResearch {
  demand_signals?: SourcedClaim[];
  seasonal_timing?: SourcedClaim[];
  competitor_saturation?: SourcedClaim;
  pricing_bands?: SourcedClaim;
  trending_keywords?: string[];
  summary?: string;
  research_date?: string;
}

export interface BrandResearch {
  brand_alignment_score?: number;
  brand_alignment_rationale?: string;
  business_fit?: string;
  design_considerations?: string;
  audience_match?: string;
  product_ladder_position?: string;
  summary?: string;
  research_date?: string;
}

export interface IdeaRouting {
  decision?: IdeaChannel;
  confidence?: number;
  rationale?: string;
  boundary_factors?: string[];
}

export interface IdeaOptimized {
  title?: string;
  positioning?: string;
  pricing_recommendation?: string;
  differentiation?: string;
  product_ladder_placement?: string;
  channel?: IdeaChannel;
  next_steps?: string[];
}

export interface Idea {
  id: string;
  title: string | null;
  original_idea: string;
  status: IdeaStatus;
  tpt_research: TptResearch | null;
  brand_research: BrandResearch | null;
  routing: IdeaRouting | null;
  optimized: IdeaOptimized | null;
  channel: IdeaChannel | null;
  sources: IdeaSource[];
  created_at: string;
  updated_at: string;
}

// ═══════════════════════════════════════
// ARCHITECT SESSIONS (Idea Architect)
// ═══════════════════════════════════════

export type ArchitectStatus = "draft" | "generating" | "complete" | "error";

export interface ArchitectConstraints {
  stack?: string;
  timeline?: string;
  rag_requirements?: string;
  data_sources?: string[];
  scale?: "prototype" | "production" | "enterprise";
}

export interface ArchitectureOutput {
  title: string;
  summary: string;
  systems_design: string;
  folder_structure: string;
  frontend_pieces: string[];
  backend_pieces: string[];
  relevant_skills: Array<{
    slug: string;
    category: string;
    how_it_applies: string;
  }>;
  key_decisions: Array<{
    decision: string;
    recommendation: string;
    tradeoff: string;
  }>;
  implementation_phases: Array<{
    phase: number;
    title: string;
    tasks: string[];
  }>;
}

export interface ArchitectSession {
  id: string;
  idea_id: string | null;
  title: string;
  input_idea: string;
  constraints: ArchitectConstraints;
  selected_skills: string[];
  architecture: ArchitectureOutput | null;
  implementation_prompt: string | null;
  status: ArchitectStatus;
  created_at: string;
  updated_at: string;
}

export interface SkillManifest {
  slug: string;
  category: string;
  description: string;
  when_to_use: string;
  related_references: string[];
  file_path: string;
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
