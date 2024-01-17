import { TableCaption, TableHeader, TableRow, TableHead, TableBody, Table } from "@/components/ui/table";
import { Invoice } from "schema/invoiceSchema";
import React from "react";
import { InvoiceRow } from "./InvoiceRow";

export type CustomerInvoiceTableProps = {
  invoices: Invoice[];
  setNewInvoices: React.Dispatch<React.SetStateAction<Invoice[]>>;
};

export const CustomerInvoiceTable = (props: CustomerInvoiceTableProps) => {
  const { invoices, setNewInvoices } = props;

  if (invoices.length === 0) {
    return <div>No invoices</div>;
  }

  console.log("invoices", invoices);

  const handleChangeInvoiceStatus = (status: "draft" | "sent" | "paid" | "cancelled" | "overdue", invoiceId: string) => {
    const newInvoices = invoices.map((invoice) => {
      if (invoice.id === invoiceId) {
        return {
          ...invoice,
          status: status,
        };
      }
      return invoice;
    });
    setNewInvoices(newInvoices);
  };

  return (
    <Table>
      <TableCaption>Invoice</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice n°</TableHead>
          <TableHead className="text-center">Total amount</TableHead>
          <TableHead className="text-center">Created at</TableHead>
          <TableHead className="text-center">Due date</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <InvoiceRow invoice={invoice} handleChangeInvoiceStatus={handleChangeInvoiceStatus} key={invoice.id} />
        ))}
      </TableBody>
    </Table>
  );
};
