import { Product, productSchema } from "../../../schema/productSchema";

export const updateProduct = async (product: Product): Promise<Product> => {
    const reponse = await fetch("http://localhost:3000/product/update", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })

    const data = await reponse.json()

    const productValidation = productSchema.safeParse(data)

    if (!productValidation.success) {
        throw new Error(productValidation.error.message)
    }

    return productValidation.data
}
