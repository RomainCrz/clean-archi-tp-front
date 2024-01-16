import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateProduct } from "./hooks/useCreateProduct";
import { SyntheticEvent, useState } from "react";
import { Product } from "schema/productSchema";

export const AddProductButton = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [tax, setTax] = useState(0);

  const { mutate, isPending } = useCreateProduct();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const product: Product = {
      name,
      description,
      price,
      tax,
      baseProductId: "",
    };
    mutate(product);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new product</DialogTitle>
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
          <Button onClick={handleSubmit}>{isPending ? "Creating..." : "Create"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
