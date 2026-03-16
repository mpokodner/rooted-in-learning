import type { PortableTextBlock } from '@portabletext/types'

export interface ContentPillar {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  color?: string
  order?: number
}

export interface Category {
  _id?: string
  title: string
  slug: { current: string }
}

export interface Tag {
  _id?: string
  title: string
  slug: { current: string }
}

export interface Author {
  name: string
  slug: { current: string }
  image?: any
  role?: string
  bio?: string
  social?: {
    website?: string
    linkedin?: string
    instagram?: string
  }
}

export interface SanityImage {
  asset: { _ref?: string; url?: string }
  alt?: string
  caption?: string
}

export interface BlogPostCard {
  _id: string
  title: string
  slug: { current: string }
  subtitle?: string
  excerpt?: string
  featuredImage?: SanityImage
  publishedAt: string
  readingTime?: number
  author?: Author
  contentPillar?: ContentPillar
  categories?: Category[]
}

export interface BlogPost extends BlogPostCard {
  body?: PortableTextBlock[]
  tags?: Tag[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: any
  }
  relatedPosts?: BlogPostCard[]
}

export type ResourceType = 'video' | 'howto' | 'download' | 'review'

export interface ToolkitResourceCard {
  _id: string
  title: string
  slug: { current: string }
  resourceType: ResourceType
  excerpt?: string
  featuredImage?: SanityImage
  publishedAt: string
  gradeLevel?: string[]
  difficultyLevel?: string
  videoDuration?: string
  toolRating?: number
  author?: Author
  contentPillar?: ContentPillar
  categories?: Category[]
}

export interface ToolkitResource extends ToolkitResourceCard {
  body?: PortableTextBlock[]
  videoUrl?: string
  downloadableFile?: {
    asset: {
      url: string
      originalFilename: string
      size: number
    }
  }
  fileDescription?: string
  toolName?: string
  toolUrl?: string
  tags?: Tag[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
  relatedResources?: ToolkitResourceCard[]
}

export interface ContentItem {
  _id: string
  _type: 'blogPost' | 'toolkitResource'
  title: string
  slug: { current: string }
  excerpt?: string
  featuredImage?: SanityImage
  publishedAt: string
  contentPillar?: ContentPillar
  readingTime?: number
  resourceType?: ResourceType
  videoDuration?: string
}
