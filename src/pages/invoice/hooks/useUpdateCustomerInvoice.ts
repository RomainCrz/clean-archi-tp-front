import { updateInvoices } from "@/api/invoice/updateInvoices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateCustomerInvoices = (customerId: string) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: updateInvoices,
    onSuccess: () => {
      toast.success("Invoices updated");
      queryClient.invalidateQueries({ queryKey: ['invoice', customerId] });
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
