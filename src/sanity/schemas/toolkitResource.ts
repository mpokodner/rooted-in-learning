import { defineType, defineField, defineArrayMember } from 'sanity'
import { RocketIcon } from '@sanity/icons'

export default defineType({
  name: 'toolkitResource',
  title: 'Toolkit Resource',
  type: 'document',
  icon: RocketIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'resource', title: 'Resource Details' },
    { name: 'meta', title: 'SEO & Metadata' },
    { name: 'organization', title: 'Organization' },
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
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      group: 'content',
      options: {
        layout: 'radio',
        list: [
          { title: 'Video Tutorial', value: 'video' },
          { title: 'How-To Guide', value: 'howto' },
          { title: 'Downloadable Resource', value: 'download' },
          { title: 'Tool Review', value: 'review' },
        ],
      },
      validation: (rule) => rule.required(),
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
        defineArrayMember({
          name: 'stepBlock',
          title: 'Step Block',
          type: 'object',
          fields: [
            defineField({
              name: 'stepNumber',
              title: 'Step Number',
              type: 'number',
            }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'instructions',
              title: 'Instructions',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { stepNumber: 'stepNumber', heading: 'heading' },
            prepare({ stepNumber, heading }) {
              return {
                title: `Step ${stepNumber ?? '?'}: ${heading ?? ''}`,
              }
            },
          },
        }),
      ],
    }),

    /* ── Resource Details ── */
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      group: 'resource',
      hidden: ({ document }) => document?.resourceType !== 'video',
    }),
    defineField({
      name: 'videoDuration',
      title: 'Video Duration',
      type: 'string',
      group: 'resource',
      description: 'e.g. "12:30"',
      hidden: ({ document }) => document?.resourceType !== 'video',
    }),
    defineField({
      name: 'downloadableFile',
      title: 'Downloadable File',
      type: 'file',
      group: 'resource',
      options: { accept: '.pdf,.docx,.xlsx,.pptx,.zip,.csv' },
      hidden: ({ document }) => document?.resourceType !== 'download',
    }),
    defineField({
      name: 'fileDescription',
      title: 'File Description',
      type: 'string',
      group: 'resource',
      hidden: ({ document }) => document?.resourceType !== 'download',
    }),
    defineField({
      name: 'toolName',
      title: 'Tool Name',
      type: 'string',
      group: 'resource',
      hidden: ({ document }) => document?.resourceType !== 'review',
    }),
    defineField({
      name: 'toolUrl',
      title: 'Tool URL',
      type: 'url',
      group: 'resource',
      hidden: ({ document }) => document?.resourceType !== 'review',
    }),
    defineField({
      name: 'toolRating',
      title: 'Tool Rating',
      type: 'number',
      group: 'resource',
      validation: (rule) => rule.min(1).max(5),
      hidden: ({ document }) => document?.resourceType !== 'review',
    }),
    defineField({
      name: 'gradeLevel',
      title: 'Grade Level',
      type: 'array',
      group: 'resource',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'K–2', value: 'k-2' },
          { title: '3–5', value: '3-5' },
          { title: '6–8', value: '6-8' },
          { title: 'All Grades', value: 'all' },
        ],
      },
    }),
    defineField({
      name: 'difficultyLevel',
      title: 'Difficulty Level',
      type: 'string',
      group: 'resource',
      options: {
        layout: 'radio',
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
      },
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
      resourceType: 'resourceType',
      media: 'featuredImage',
      status: 'status',
    },
    prepare({ title, resourceType, media, status }) {
      const statusEmoji =
        status === 'published' ? '✅' : status === 'review' ? '👀' : '📝'
      const typeEmoji: Record<string, string> = {
        video: '🎬',
        howto: '📋',
        download: '📥',
        review: '⭐',
      }
      return {
        title: `${statusEmoji} ${title}`,
        subtitle: `${typeEmoji[resourceType] ?? ''} ${resourceType ?? ''}`,
        media,
      }
    },
  },
})
