import { Customer } from "schema/customerSchema";
import { useGetAllInvoiceByUser } from "./hooks/useGetAllInvoiceByUser";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CustomerInvoiceTable } from "./CustomerInvoiceTable";
import { Invoice } from "schema/invoiceSchema";
import React from "react";

export type AllCustomerInvoiceProps = {
  customer: Customer;
};

export const AllCustomerInvoice = (props: AllCustomerInvoiceProps) => {
  const { customer } = props;

  const [newInvoices, setNewInvoices] = React.useState<Invoice[]>([]);

  const { data, isLoading, isError } = useGetAllInvoiceByUser(customer.id || "");

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
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
