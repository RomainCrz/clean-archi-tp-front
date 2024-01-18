import { createInvoice } from "@/api/invoice/createInvoice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateInvoice = (customerId: string) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createInvoice,
    onSuccess: () => {
      toast.success("Invoice created");
      queryClient.invalidateQueries({ queryKey: ["all-invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoice", customerId] });
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
