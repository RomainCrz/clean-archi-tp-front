import { z } from "zod"

export const productSchema = z.object({
    id: z.string().optional(),
    baseProductId: z.string(),
    name: z.string(),
    price: z.number(),
    tax: z.number(),
    description: z.string(),
    active: z.boolean()
})

export type Product = z.infer<typeof productSchema>