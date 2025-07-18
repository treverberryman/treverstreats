import { defineCollection, z } from 'astro:content';

export const collections = {
	recipes: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			cookingTime: z.string().optional(),
			servings: z.number().optional(),
			difficulty: z.enum(['Easy', 'Medium', 'Hard']).optional(),
			category: z.enum(['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Appetizer']).optional(),
			prepTime: z.string().optional(),
			totalTime: z.string().optional(),
		}),
	}),
	howTos: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
			category: z.enum(['Techniques', 'Tips', 'Guides', 'Tutorials']).optional(),
			estimatedTime: z.string().optional(),
		}),
	}),
	gear: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			category: z.enum(['Cookware', 'Appliances', 'Utensils', 'Gadgets', 'Storage']).optional(),
			price: z.string().optional(),
			rating: z.number().min(1).max(5).optional(),
			pros: z.array(z.string()).optional(),
			cons: z.array(z.string()).optional(),
		}),
	}),
};
