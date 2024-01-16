import { Button } from "@/components/ui/button";
import { useDeleteCustomer } from "./hooks/useDeleteCustomer";

export type DeleteButtonProps = {
  customerId: string;
};

export const DeleteButton = (props: DeleteButtonProps) => {
  const { customerId } = props;
  const { mutate, isPending } = useDeleteCustomer();
  return (
    <Button variant="destructive" onClick={() => mutate(customerId)}>
      {isPending ? "Deleting..." : "Delete"}
    </Button>
  );
};
