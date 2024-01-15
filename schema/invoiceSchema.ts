import { z } from "zod"
import { customerSchema } from "./customerSchema"
import { productSchema } from "./productSchema"

export const invoiceSchema = z.object({
    id: z.string().optional(),
    invoiceNumber: z.string(),
    invoiceDate: z.date(),
    dueDate: z.date(),
    status: z.enum(['draft', 'sent', 'paid', 'cancelled', 'overdue']),
    totalAmount: z.number(),
    totalTax: z.number(),
    totalAmountWithTax: z.number(),
    customer: customerSchema,
    products: z.array(productSchema)

})

export type Invoice = z.infer<typeof invoiceSchema>