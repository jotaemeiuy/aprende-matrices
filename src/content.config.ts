import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lessons" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    module: z.string(),
    slug: z.string(),
    order: z.number(),
    kind: z.enum(["teoria", "practica"]),
  }),
});

export const collections = { lessons };
