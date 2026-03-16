'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import type { StructureBuilder } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'the-rooted-learner',
  title: 'The Rooted Learner',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S: StructureBuilder) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .schemaType('blogPost')
              .child(S.documentTypeList('blogPost').title('Blog Posts')),
            S.listItem()
              .title('Toolkit Resources')
              .schemaType('toolkitResource')
              .child(
                S.documentTypeList('toolkitResource').title('Toolkit Resources'),
              ),
            S.divider(),
            S.listItem()
              .title('Authors')
              .schemaType('author')
              .child(S.documentTypeList('author').title('Authors')),
            S.listItem()
              .title('Content Pillars')
              .schemaType('contentPillar')
              .child(
                S.documentTypeList('contentPillar').title('Content Pillars'),
              ),
            S.listItem()
              .title('Categories')
              .schemaType('category')
              .child(S.documentTypeList('category').title('Categories')),
            S.listItem()
              .title('Tags')
              .schemaType('tag')
              .child(S.documentTypeList('tag').title('Tags')),
          ]),
    }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],

  schema: {
    types: schemaTypes,
  },
})
