import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            tags: z.array(z.string()),
            image: image(),
            repoUrl: z.url(),
            liveUrl: z.url().optional(),
            order: z.number().default(0),
            draft: z.boolean().default(false),
        }),
});

export const collections = { projects };
