import { Button } from "@/components/ui/button";
import { useDeleteProduct } from "./hooks/useDeleteProduct";

export type DeleteButtonProps = {
  productId: string;
};

export const DeleteButton = (props: DeleteButtonProps) => {
  const { productId } = props;
  const { mutate, isPending } = useDeleteProduct();
  return (
    <Button variant="destructive" onClick={() => mutate(productId)}>
      {isPending ? "Deleting..." : "Delete"}
    </Button>
  );
};
