import { z } from "zod";

export const customerSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    zip: z.string(),
 })

 export const customerWithIdSchema = customerSchema.extend({
    id: z.string()
})

export type Customer = z.infer<typeof customerSchema>