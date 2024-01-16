

export async function deleteCustomer(customerId: string): Promise<void> {
    const response = await fetch("http://localhost:3000/customer/"+customerId, {
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