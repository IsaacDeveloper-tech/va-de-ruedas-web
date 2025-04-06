import { defineCollection, z } from "astro:content";

const curves = defineCollection({
    schema: z.object({
        order: z.number(),
        title: z.string(),
        description: z.string(),
        img: z.string(),
        video: z.string()
    }),
});

export const collections = { curves };