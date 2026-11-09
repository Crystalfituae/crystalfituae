import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),                       // card title in portfolio grid
      heading: z.string().optional(),          // title on project page
      order: z.number().default(999),          // position in portfolio grid
      listed: z.boolean().default(true),       // show in portfolio grid
      size: z.enum(['half', 'quarter']).default('half'), // tile width in portfolio grid
      categories: z.array(z.enum(['commercial', 'fb', 'residential'])).default([]),
      template: z.enum(['modern', 'classic']).default('modern'),
      cover: image(),                          // grid thumbnail
      coverRatio: z.number().optional(),       // height/width of the tile (defaults to the photo's own ratio)
      hero: image().optional(),                // big photo next to description
      heroCol: z.number().optional(),
      gallery: z.array(z.object({ image: image(), size: z.enum(['half', 'quarter', 'fifth', 'full']).default('half'), title: z.string().optional() })).default([]),
      fields: z.array(z.object({ label: z.string(), value: z.string() })).default([]), // classic template info rows
      otherCases: z.array(z.string()).default([]),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
    }),
});

export const collections = { projects };
