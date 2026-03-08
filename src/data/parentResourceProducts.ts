export type ParentResourceProduct = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  affiliateUrl: string;
  skill: string[];
  category: string[];
  goal: string[];
  priceRange: string;
};

export type WeeklyFeature = {
  id: string;
  name: string;
  description: string;
  personalNote: string;
  imageUrl: string;
  affiliateUrl: string;
  weekOf: string;
  skill: string[];
  category: string;
  goal: string[];
};

export const PARENT_SKILLS = [
  "Phonics", "Fluency", "Comprehension", "Writing", "Vocabulary",
  "Critical Thinking", "Problem Solving", "Creativity", "Focus & Attention",
] as const;
export const PARENT_CATEGORIES = [
  "Learning at Home", "Books", "Tech & Apps", "Organization", "Wellness", "STEM",
] as const;
export const PARENT_GOALS = [
  "Homework Help", "Screen-Free Fun", "Reading Support",
  "STEM Exploration", "Building Confidence", "Summer Learning",
] as const;
export const PARENT_PRICE_RANGES = ["Under $10", "Under $25", "Under $50", "$50+"] as const;

export const weeklyFeature: WeeklyFeature = {
  id: "wf-001",
  name: "Bob Books Set 1: Beginning Readers",
  description: "The classic first reader set that builds phonics confidence one page at a time. Simple CVC words, adorable illustrations, and stories kids can actually finish on their own.",
  personalNote: "This is the set I hand to every parent who asks 'Where do I start?' My students light up when they finish a Bob Book by themselves — there's nothing like that first 'I read it!' moment.",
  imageUrl: "/images/products/placeholder-bob-books.jpg",
  affiliateUrl: "https://www.amazon.com/dp/example-weekly?tag=rootedinlearning-20",
  weekOf: "2026-03-09",
  skill: ["Phonics", "Fluency"],
  category: "Books",
  goal: ["Reading Support", "Building Confidence"],
};

export const parentResourceProducts: ParentResourceProduct[] = [
  {
    id: "pr-001",
    name: "Magnetic Poetry Kids Kit",
    description: "Fridge-friendly word tiles that turn snack time into writing practice. Perfect for building sentences and sparking creativity.",
    imageUrl: "/images/products/placeholder-poetry.jpg",
    affiliateUrl: "https://www.amazon.com/dp/example5?tag=rootedinlearning-20",
    skill: ["Writing", "Vocabulary", "Creativity"],
    category: ["Learning at Home"],
    goal: ["Screen-Free Fun", "Building Confidence"],
    priceRange: "Under $10",
  },
  {
    id: "pr-002",
    name: "Reading Comprehension Card Game",
    description: "A family-friendly card game that builds comprehension skills through story retelling, prediction, and character analysis.",
    imageUrl: "/images/products/placeholder-card-game.jpg",
    affiliateUrl: "https://www.amazon.com/dp/example6?tag=rootedinlearning-20",
    skill: ["Comprehension", "Critical Thinking"],
    category: ["Learning at Home", "Books"],
    goal: ["Reading Support", "Screen-Free Fun"],
    priceRange: "Under $25",
  },
  {
    id: "pr-003",
    name: "Kids' Daily Planner & Homework Tracker",
    description: "A colorful planner designed for kids to track assignments, set goals, and build organizational habits with parent check-in prompts.",
    imageUrl: "/images/products/placeholder-planner.jpg",
    affiliateUrl: "https://www.amazon.com/dp/example7?tag=rootedinlearning-20",
    skill: ["Focus & Attention"],
    category: ["Organization"],
    goal: ["Homework Help", "Building Confidence"],
    priceRange: "Under $10",
  },
  {
    id: "pr-004",
    name: "STEM Building Blocks Set",
    description: "Engineering-focused building set with challenge cards. Great for independent play that quietly teaches spatial reasoning and problem solving.",
    imageUrl: "/images/products/placeholder-stem.jpg",
    affiliateUrl: "https://www.amazon.com/dp/example8?tag=rootedinlearning-20",
    skill: ["Problem Solving", "Critical Thinking", "Creativity"],
    category: ["STEM"],
    goal: ["STEM Exploration", "Screen-Free Fun"],
    priceRange: "Under $50",
  },
];
