import { z } from 'zod';
import { Product, productSchema } from '../../../schema/productSchema';
export const getAllProduct = async (): Promise<Product[]> => {
    const response = await fetch("http://localhost:3000/product", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    })
    const data = await response.json()
    console.log('data', data)
    const validationData = z.array(productSchema).safeParse(data)

    if (!validationData.success) {
        throw new Error(validationData.error.message)
    }

    return data
}