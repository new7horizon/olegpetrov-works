import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    subtitle: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    scope: z.string().optional(),
    site: z.string().optional(),
    period: z.string().optional(),
    result: z.string().optional(),
    cover: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().default(''),
          caption: z.string().default(''),
          group: z.string().default('Gallery'),
          // Magazine weight in the reportage flow. 'closing' lifts a frame
          // beside the result text. Defaults to a paired half-width plate.
          layout: z.enum(['full', 'wide', 'half', 'duo', 'third', 'closing']).default('half'),
        })
      )
      .default([]),
  }),
});

export const collections = { cases };
