import { getInvoicesByCustomerId } from "@/api/invoice/getInvoicesByCustomerId";
import { useQuery } from "@tanstack/react-query";

export const useGetAllInvoiceByUser = (customerId: string) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['invoice', customerId],
        queryFn: async () => {
          try {
            const invoices = await getInvoicesByCustomerId(customerId);
            return invoices;
          } catch (error) {
            throw error;
          }
        },
      });

    return { data, isLoading, isError };
}