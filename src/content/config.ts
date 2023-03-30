import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		pubDate: z
		.string()
		.or(z.date())
		.transform((val) => new Date(val)),
		heroImage: z.string(),
	
	}),
});

export const collections = { blog };
