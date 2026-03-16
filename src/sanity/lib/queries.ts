import { groq } from 'next-sanity'

const authorFragment = `author->{name, slug, image, role}`
const pillarFragment = `contentPillar->{title, slug, color}`
const categoryFragment = `categories[]->{title, slug}`
const tagFragment = `tags[]->{title, slug}`

/* ── Content Pillars ── */

export const allPillarsQuery = groq`
  *[_type == "contentPillar"] | order(order asc) {
    _id, title, slug, description, color, order
  }
`

/* ── Blog Posts ── */

export const blogPostsQuery = groq`
  *[_type == "blogPost" && status == "published"] | order(publishedAt desc) {
    _id, title, slug, subtitle, excerpt,
    featuredImage { asset->, alt },
    publishedAt, readingTime,
    ${authorFragment},
    ${pillarFragment},
    ${categoryFragment}
  }
`

export const blogPostsByPillarQuery = groq`
  *[_type == "blogPost" && status == "published" && contentPillar->slug.current == $pillarSlug] | order(publishedAt desc) {
    _id, title, slug, subtitle, excerpt,
    featuredImage { asset->, alt },
    publishedAt, readingTime,
    ${authorFragment},
    ${pillarFragment},
    ${categoryFragment}
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id, title, slug, subtitle, excerpt,
    featuredImage { asset->, alt, caption },
    publishedAt, readingTime,
    body[] {
      ...,
      _type == "image" => { ..., asset-> }
    },
    ${authorFragment},
    ${pillarFragment},
    ${categoryFragment},
    ${tagFragment},
    seo { metaTitle, metaDescription, ogImage },
    "relatedPosts": *[
      _type == "blogPost"
      && status == "published"
      && slug.current != $slug
      && contentPillar._ref == ^.contentPillar._ref
    ] | order(publishedAt desc) [0...3] {
      _id, title, slug, subtitle, excerpt,
      featuredImage { asset->, alt },
      publishedAt, readingTime,
      ${authorFragment},
      ${pillarFragment},
      ${categoryFragment}
    }
  }
`

/* ── Toolkit Resources ── */

export const toolkitResourcesQuery = groq`
  *[_type == "toolkitResource" && status == "published"] | order(publishedAt desc) {
    _id, title, slug, resourceType, excerpt,
    featuredImage { asset->, alt },
    publishedAt, gradeLevel, difficultyLevel,
    videoDuration, toolRating,
    ${authorFragment},
    ${pillarFragment},
    ${categoryFragment}
  }
`

export const toolkitByTypeQuery = groq`
  *[_type == "toolkitResource" && status == "published" && resourceType == $resourceType] | order(publishedAt desc) {
    _id, title, slug, resourceType, excerpt,
    featuredImage { asset->, alt },
    publishedAt, gradeLevel, difficultyLevel,
    videoDuration, toolRating,
    ${authorFragment},
    ${pillarFragment},
    ${categoryFragment}
  }
`

export const toolkitByPillarQuery = groq`
  *[_type == "toolkitResource" && status == "published" && contentPillar->slug.current == $pillarSlug] | order(publishedAt desc) {
    _id, title, slug, resourceType, excerpt,
    featuredImage { asset->, alt },
    publishedAt, gradeLevel, difficultyLevel,
    videoDuration, toolRating,
    ${authorFragment},
    ${pillarFragment},
    ${categoryFragment}
  }
`

export const toolkitResourceBySlugQuery = groq`
  *[_type == "toolkitResource" && slug.current == $slug][0] {
    _id, title, slug, resourceType, excerpt,
    featuredImage { asset->, alt, caption },
    publishedAt,
    body[] {
      ...,
      _type == "image" => { ..., asset-> }
    },
    videoUrl, videoDuration,
    downloadableFile { asset->{ url, originalFilename, size } },
    fileDescription,
    toolName, toolUrl, toolRating,
    gradeLevel, difficultyLevel,
    ${authorFragment},
    ${pillarFragment},
    ${categoryFragment},
    ${tagFragment},
    seo { metaTitle, metaDescription },
    "relatedResources": *[
      _type == "toolkitResource"
      && status == "published"
      && slug.current != $slug
      && resourceType == ^.resourceType
    ] | order(publishedAt desc) [0...3] {
      _id, title, slug, resourceType, excerpt,
      featuredImage { asset->, alt },
      publishedAt, gradeLevel, difficultyLevel,
      videoDuration, toolRating,
      ${authorFragment},
      ${pillarFragment},
      ${categoryFragment}
    }
  }
`

/* ── Cross-type queries ── */

export const latestContentQuery = groq`
  *[_type in ["blogPost", "toolkitResource"] && status == "published"] | order(publishedAt desc) [0...$limit] {
    _id, _type, title, slug, excerpt,
    featuredImage { asset->, alt },
    publishedAt,
    ${pillarFragment},
    _type == "blogPost" => { readingTime },
    _type == "toolkitResource" => { resourceType, videoDuration }
  }
`

export const searchContentQuery = groq`
  *[
    _type in ["blogPost", "toolkitResource"]
    && status == "published"
    && (title match $searchTerm || excerpt match $searchTerm)
  ] | order(publishedAt desc) [0...20] {
    _id, _type, title, slug, excerpt,
    featuredImage { asset->, alt },
    publishedAt,
    ${pillarFragment},
    _type == "blogPost" => { readingTime },
    _type == "toolkitResource" => { resourceType, videoDuration }
  }
`
