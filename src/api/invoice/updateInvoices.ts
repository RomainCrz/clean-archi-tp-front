import { Invoice, invoiceSchema } from "../../../schema/invoiceSchema";
import { z } from "zod";

export const updateInvoices = async (invoices: Invoice[]): Promise<Invoice[]> => {
    const allNewInvoices: Invoice[] = await Promise.all(invoices.map(async (invoice) => {
        const response = await fetch("http://localhost:3000/invoice/update", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(invoice)
        })

        const data = await response.json()

        return data
    }))

    const allNewInvoicesValidation = z.array(invoiceSchema).safeParse(allNewInvoices)

    if (!allNewInvoicesValidation.success) {
        throw new Error(allNewInvoicesValidation.error.message)
    }

    return allNewInvoices
}