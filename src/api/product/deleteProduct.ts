

export async function deleteProduct(productId: string): Promise<void> {
    const response = await fetch("http://localhost:3000/product/"+productId, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        },
    })
    
    if (!response.ok) {
        throw new Error("Something went wrong")
    }

    return 
}