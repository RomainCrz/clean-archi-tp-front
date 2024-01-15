import { z } from 'zod';
import { Customer, customerSchema } from '../../../schema/customerSchema';
export const getAllCustomer = async (): Promise<Customer[]> => {
    const response = await fetch("http://localhost:3000/customer", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    })
    const data = await response.json()
    console.log('data', data)
    const validationData = z.array(customerSchema).safeParse(data)

    if (!validationData.success) {
        throw new Error(validationData.error.message)
    }

    return data
}