import { Customer } from "schema/customerSchema";
import { useGetAllInvoiceByUser } from "../hooks/useGetAllInvoiceByUser";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CustomerInvoiceTable } from "../CustomerInvoiceTable";
import { Invoice, invoiceSchema } from "schema/invoiceSchema";
import React from "react";
import { toast } from "sonner";
import { useUpdateCustomerInvoices } from "../hooks/useUpdateCustomerInvoice";
import { z } from "zod";

export type AllCustomerInvoiceProps = {
  customer: Customer;
};

export const AllCustomerInvoice = (props: AllCustomerInvoiceProps) => {
  const { customer } = props;

  const [newInvoices, setNewInvoices] = React.useState<Invoice[]>([]);

  const { data, isLoading, isError } = useGetAllInvoiceByUser(customer.id || "");
  const { mutate, isPending } = useUpdateCustomerInvoices(customer.id || "");

  const handleSaveChanges = () => {
    if (newInvoices.length === 0) {
      toast.info("No changes to save");
      return;
    }

    if (z.array(invoiceSchema).safeParse(newInvoices).success === false) {
      toast.error("Please fill all the fields");
      return;
    }

    mutate(newInvoices);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-36">
          See invoices
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Customer invoices</DialogTitle>
        </DialogHeader>
        <CustomerInvoiceTable invoices={data || []} setNewInvoices={setNewInvoices} />
        <DialogFooter>
          <Button onClick={handleSaveChanges}>{isPending ? "Saving ..." : "Save changes"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
