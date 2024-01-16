import { updateCustomer } from "@/api/customer/updateCustomer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: updateCustomer,
    onSuccess: () => {
      toast.success("Customer updated");
      queryClient.invalidateQueries({ queryKey: ["all-customers"] });
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
