import { createProduct } from "@/api/product/createProduct";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success("Product created");
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
    },
    onError: () => {
      toast.error("An error occured");
    },
  });

  return {
    mutate,
    isPending,
  };
};
