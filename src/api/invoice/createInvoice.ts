
import { Invoice, invoiceSchema } from '../../../schema/invoiceSchema';

export async function createInvoice(invoice: Invoice): Promise<Invoice> {

    console.log('invoice', invoice)
    const response = await fetch("http://localhost:3000/invoice/create", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(invoice)
    })

    console.log('response', response)
    const data = await response.json()
    console.log('data', data)
    const validationData = invoiceSchema.safeParse(data)


    if (!validationData.success) {
        throw new Error(validationData.error.message)
    }

    return data
}