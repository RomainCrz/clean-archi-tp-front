
import { Invoice, invoiceSchema } from '../../../schema/invoiceSchema';
import { z } from 'zod';
export const getInvoicesByCustomerId = async (customerId: string): Promise<Invoice[]> => {
    const response = await fetch("http://localhost:3000/invoice/customer/" + customerId,{
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });

    console.log('response', response)
    
    const data = await response.json()

    console.log('invoiceData', data)
    const validationData = z.array(invoiceSchema).safeParse(data)

    if (!validationData.success) {
        throw new Error(validationData.error.message)
    }

    return validationData.data


}