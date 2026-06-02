import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    page_type: z.string().optional(),
    meta_title: z.string(),
    meta_description: z.string(),
    primary_keyword: z.string().optional(),
    secondary_keywords: z.array(z.string()).optional(),
    target_persona: z.string().optional(),
    word_count_target: z.number().optional(),
    schema_type: z.string().optional(),
    canonical_url: z.string().optional(),
    parent_hub: z.string().optional(),
  }),
});

export const collections = { writing };
