import { getAllProduct } from "@/api/product/getAllProduct";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      try {
        const products = await getAllProduct();
        return products;
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
