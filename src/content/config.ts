import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keyword: z.string(),
    vertical: z.string(),
    pillar_url: z.string(),
    pillar_label: z.string(),
    related_service: z.string(),
    published: z.string(),
    updated: z.string(),
    hero_image: z.string().optional(),
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .optional(),
  }),
});

export const collections = { guides };
