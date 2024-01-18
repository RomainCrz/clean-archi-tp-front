import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateProduct } from "./hooks/useCreateProduct";
import { SyntheticEvent, useState } from "react";
import { Product, productSchema } from "../../../schema/productSchema";
import { useUpdateProduct } from "./hooks/useUpdateProduct";
import { toast } from "sonner";

type AddOrEditProductButtonProps = {
  isForEdit: boolean;
  product?: Product;
};

export const AddOrEditProductButton = ({ isForEdit, product }: AddOrEditProductButtonProps) => {
  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price || 0);
  const [tax, setTax] = useState(product?.tax || 0);

  const { mutate: creationMutate, isPending: creationPending } = useCreateProduct();
  const { mutate: updateMutate, isPending: updatePending } = useUpdateProduct();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const newProduct: Product = {
      name,
      description,
      price,
      tax,
      baseProductId: "",
      active: true,
    };

    if (productSchema.safeParse(newProduct).success === false) {
      toast.error("Please fill all the fields");
      return;
    }

    if (isForEdit) {
      newProduct.id = product?.id || "";
      updateMutate(newProduct);
    } else {
      creationMutate(newProduct);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>{isForEdit ? "Edit product" : "Add product"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isForEdit ? "Edit product" : "Add a new product"}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="email" placeholder="Ceci est un produit" value={description} onChange={(e) => setDescription(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Price
            </Label>
            <Input type="number" id="phone" placeholder="10" className="col-span-3" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tax" className="text-right">
              Tax
            </Label>
            <Input type="number" id="tax" placeholder="2" className="col-span-3" value={tax} onChange={(e) => setTax(Number(e.target.value))} />
          </div>
        </div>
        <DialogFooter>
          {isForEdit ? <Button onClick={handleSubmit}>{updatePending ? "Updating..." : "Update"}</Button> : <Button onClick={handleSubmit}>{creationPending ? "Creating..." : "Create"}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
