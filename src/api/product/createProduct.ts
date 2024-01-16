
import { Product, productSchema } from '../../../schema/productSchema';

export async function createProduct(product: Product): Promise<Product> {
    const response = await fetch("http://localhost:3000/product/create", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    })
    const data = await response.json()
    console.log('data', data)
    const validationData = productSchema.safeParse(data)


    if (!validationData.success) {
        throw new Error(validationData.error.message)
    }

    return data
}