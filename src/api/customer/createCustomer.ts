
import { Customer, customerSchema } from '../../../schema/customerSchema';

export async function createCustomer(customer: Customer): Promise<Customer> {
    const response = await fetch("http://localhost:3000/customer/create", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(customer)
    })
    const data = await response.json()
    console.log('data', data)
    const validationData = customerSchema.safeParse(data)


    if (!validationData.success) {
        throw new Error(validationData.error.message)
    }

    return data
}