export type TeacherShopProduct = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  affiliateUrl: string;
  gradeLevel: string[];
  subject: string[];
  skill: string[];
  priceRange: string;
  timeOfYear: string[];
};

export const TEACHER_GRADE_LEVELS = ["Pre-K", "K-2", "3-5", "6-8"] as const;
export const TEACHER_SUBJECTS = ["Reading", "Math", "Science", "ELA", "SEL"] as const;
export const TEACHER_SKILLS = [
  "Phonics", "Fluency", "Comprehension", "Writing", "Vocabulary",
  "Critical Thinking", "Problem Solving", "Collaboration", "Self-Regulation",
] as const;
export const TEACHER_PRICE_RANGES = ["Under $10", "Under $25", "Under $50", "$50+"] as const;
export const TEACHER_TIME_OF_YEAR = ["Back to School", "Testing Season", "End of Year", "Anytime"] as const;

export const teacherShopProducts: TeacherShopProduct[] = [
  {
    id: "ts-001",
    name: "Decodable Readers Variety Pack",
    description: "A set of engaging decodable readers perfect for small group instruction and independent practice. Covers CVC through blends.",
    imageUrl: "/images/products/placeholder-book.jpg",
    affiliateUrl: "https://www.amazon.com/dp/example1?tag=rootedinlearning-20",
    gradeLevel: ["K-2"],
    subject: ["Reading", "ELA"],
    skill: ["Phonics", "Fluency"],
    priceRange: "Under $25",
    timeOfYear: ["Back to School", "Anytime"],
  },
  {
    id: "ts-002",
    name: "Math Manipulatives Starter Kit",
    description: "Hands-on counters, base-ten blocks, and fraction tiles. Durable classroom set that lasts all year.",
    imageUrl: "/images/products/placeholder-math.jpg",
    affiliateUrl: "https://www.amazon.com/dp/example2?tag=rootedinlearning-20",
    gradeLevel: ["K-2", "3-5"],
    subject: ["Math"],
    skill: ["Problem Solving", "Critical Thinking"],
    priceRange: "Under $25",
    timeOfYear: ["Back to School", "Anytime"],
  },
  {
    id: "ts-003",
    name: "SEL Discussion Cards",
    description: "150 conversation starters for morning meetings, restorative circles, and advisory. Builds empathy and self-regulation skills.",
    imageUrl: "/images/products/placeholder-sel.jpg",
    affiliateUrl: "https://www.amazon.com/dp/example3?tag=rootedinlearning-20",
    gradeLevel: ["3-5", "6-8"],
    subject: ["SEL"],
    skill: ["Self-Regulation", "Collaboration"],
    priceRange: "Under $10",
    timeOfYear: ["Back to School", "Anytime"],
  },
  {
    id: "ts-004",
    name: "Science Inquiry Journal Set",
    description: "Student lab journals with guided experiment templates, vocabulary builders, and reflection prompts aligned to NGSS.",
    imageUrl: "/images/products/placeholder-science.jpg",
    affiliateUrl: "https://www.amazon.com/dp/example4?tag=rootedinlearning-20",
    gradeLevel: ["3-5", "6-8"],
    subject: ["Science"],
    skill: ["Critical Thinking", "Writing", "Vocabulary"],
    priceRange: "Under $10",
    timeOfYear: ["Testing Season", "Anytime"],
  },
];
