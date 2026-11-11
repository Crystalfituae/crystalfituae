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
      draft: z.boolean().default(false),       // on hold: page is not built at all
      size: z.enum(['half', 'quarter']).default('half'), // tile width in portfolio grid
      categories: z.array(z.enum(['commercial', 'fb', 'residential'])).default([]),
      template: z.enum(['modern', 'classic']).default('modern'),
      cover: image(),                          // grid thumbnail
      coverRatio: z.number().optional(),       // height/width of the tile (defaults to the photo's own ratio)
      hero: image().optional(),                // big photo next to description
      heroCol: z.number().optional(),
      gallery: z.array(z.object({ image: image(), size: z.enum(['half', 'quarter', 'five12', 'full']).default('half'), ratio: z.number().optional(), title: z.string().optional() })).default([]),
      gallerySpacer: z.boolean().default(false), // reproduces an empty first tile of the old site's gallery
      // unified project facts (shown on every project page in this order)
      location: z.string().optional(),         // "Area, City, Country"
      area: z.number().optional(),             // sq.m
      year: z.string().optional(),             // year completed, e.g. "2025" or "2015–2019"
      timeline: z.string().optional(),         // optional, e.g. "4 months"
      scope: z.array(z.enum(['design', 'approvals', 'fitout', 'mep', 'joinery', 'supervision'])).default([]),
      approvals: z.array(z.string()).default([]), // authorities / landlords: Emaar, TECOM, DM, DCD, DEWA…
      fields: z.array(z.object({ label: z.string(), value: z.string() })).default([]), // legacy, unused
      otherCases: z.array(z.string()).default([]),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
    }),
});

export const collections = { projects };
