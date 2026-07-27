import { defineType, defineField } from 'sanity'
import { FolderIcon } from '@sanity/icons'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pillar',
      title: 'Content Pillar',
      type: 'reference',
      to: [{ type: 'contentPillar' }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: { title: 'title', pillarTitle: 'pillar.title' },
    prepare({ title, pillarTitle }) {
      return {
        title,
        subtitle: pillarTitle ? `Pillar: ${pillarTitle}` : undefined,
      }
    },
  },
})
