import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateCustomer } from "./hooks/useCreateCustomer";
import { SyntheticEvent, useState } from "react";
import { Customer } from "schema/customerSchema";
import { useUpdateCustomer } from "./hooks/useUpdateCustomer";

export type AddCustomerButtonProps = {
  isForEdit: boolean;
  customer?: Customer;
};

export const AddOrUpdateCustomerButton = ({ isForEdit, customer }: AddCustomerButtonProps) => {
  const [name, setName] = useState(customer?.name || "");
  const [email, setEmail] = useState(customer?.email || "");
  const [phone, setPhone] = useState(customer?.phone || "");
  const [address, setAddress] = useState(customer?.address || "");
  const [city, setCity] = useState(customer?.city || "");
  const [state, setState] = useState(customer?.state || "");
  const [country, setCountry] = useState(customer?.country || "");
  const [zip, setZip] = useState(customer?.zip || "");

  const { mutate: creationMutate, isPending: isPendingCreation } = useCreateCustomer();
  const { mutate: updateMutate, isPending: isPendingUpdate } = useUpdateCustomer();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const newCustomer: Customer = {
      name,
      email,
      phone,
      address,
      city,
      state,
      country,
      zip,
    };

    if (isForEdit) {
      newCustomer.id = customer?.id || "";
      updateMutate(newCustomer);
    } else {
      creationMutate(newCustomer);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>{isForEdit ? "Edit" : "Add customer"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isForEdit ? "Edit customer" : "Add a new customer"}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" placeholder="name@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input id="phone" placeholder="0634035685" className="col-span-3" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input id="address" placeholder="6 rue de la resistance" className="col-span-3" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="city" className="text-right">
              City
            </Label>
            <Input id="city" placeholder="Dijon" className="col-span-3" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="zip" className="text-right">
              Zip
            </Label>
            <Input id="zip" placeholder="21000" className="col-span-3" value={zip} onChange={(e) => setZip(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="state" className="text-right">
              State
            </Label>
            <Input id="state" placeholder="Cote d'or" className="col-span-3" value={state} onChange={(e) => setState(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="country" className="text-right">
              Country
            </Label>
            <Input id="country" placeholder="France" className="col-span-3" value={country} onChange={(e) => setCountry(e.target.value)} />
          </div>
        </div>
        <DialogFooter>
          {isForEdit ? <Button onClick={handleSubmit}>{isPendingUpdate ? "Updating..." : "Update"}</Button> : <Button onClick={handleSubmit}>{isPendingCreation ? "Creating..." : "Create"}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
