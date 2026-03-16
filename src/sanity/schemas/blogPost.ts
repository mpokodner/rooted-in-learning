import { defineType, defineField, defineArrayMember } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'organization', title: 'Organization' },
    { name: 'meta', title: 'SEO & Metadata' },
  ],
  fields: [
    /* ── Content ── */
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'content',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Blockquote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Highlight', value: 'highlight' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (rule) =>
                      rule.uri({
                        allowRelative: true,
                        scheme: ['http', 'https', 'mailto'],
                      }),
                  }),
                  defineField({
                    name: 'openInNewTab',
                    title: 'Open in new tab',
                    type: 'boolean',
                    initialValue: false,
                  }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        }),
        defineArrayMember({
          name: 'callout',
          title: 'Callout',
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Tip', value: 'tip' },
                  { title: 'Note', value: 'note' },
                  { title: 'Warning', value: 'warning' },
                  { title: 'Spotlight', value: 'spotlight' },
                ],
              },
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: { type: 'type' },
            prepare({ type }) {
              return { title: `Callout: ${type ?? 'unknown'}` }
            },
          },
        }),
        defineArrayMember({
          name: 'youtubeEmbed',
          title: 'YouTube Embed',
          type: 'object',
          fields: [
            defineField({
              name: 'url',
              title: 'YouTube URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
          preview: {
            select: { caption: 'caption' },
            prepare({ caption }) {
              return { title: caption || 'YouTube Video' }
            },
          },
        }),
      ],
    }),

    /* ── Organization ── */
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'organization',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contentPillar',
      title: 'Content Pillar',
      type: 'reference',
      to: [{ type: 'contentPillar' }],
      group: 'organization',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      group: 'organization',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      group: 'organization',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'organization',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'organization',
      options: {
        layout: 'radio',
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'In Review', value: 'review' },
          { title: 'Published', value: 'published' },
        ],
      },
      initialValue: 'draft',
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      group: 'organization',
    }),

    /* ── SEO & Metadata ── */
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'meta',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
          validation: (rule) => rule.max(160),
        }),
        defineField({
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Published Date (Newest)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      authorName: 'author.name',
      media: 'featuredImage',
      status: 'status',
      publishedAt: 'publishedAt',
    },
    prepare({ title, authorName, media, status, publishedAt }) {
      const emoji =
        status === 'published' ? '✅' : status === 'review' ? '👀' : '📝'
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
        : ''
      return {
        title: `${emoji} ${title}`,
        subtitle: [authorName, date].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
