import { deleteProduct } from "@/api/product/deleteProduct";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      toast.success("Product deleted");
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
