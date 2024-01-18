import { getAllCustomer } from "@/api/customer/getAllCustomer";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCustomers = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["all-customers"],
    queryFn: async () => {
      try {
        const customers = await getAllCustomer();
        return customers;
      } catch (error) {
        throw error;
      }
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
};
