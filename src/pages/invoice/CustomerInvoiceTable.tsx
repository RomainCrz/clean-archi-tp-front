import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { Invoice } from "schema/invoiceSchema";
import { StatusCombo } from "./components/StatusCombo";
import React from "react";

export type CustomerInvoiceTableProps = {
  invoices: Invoice[];
  setNewInvoices: React.Dispatch<React.SetStateAction<Invoice[]>>;
};

export const CustomerInvoiceTable = (props: CustomerInvoiceTableProps) => {
  const { invoices, setNewInvoices } = props;

  if (invoices.length === 0) {
    return <div>No invoices</div>;
  }

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
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium text-center">{invoice.invoiceNumber}</TableCell>
            <TableCell className="text-center">{invoice.totalAmountWithTax}</TableCell>
            <TableCell className="text-center">{invoice.invoiceDate.toISOString().split("T")[0]}</TableCell>
            <TableCell className="text-center">{invoice.dueDate.toISOString().split("T")[0]}</TableCell>
            <TableCell className="text-center">
              <StatusCombo initialValue={invoice.status} invoiceId={invoice.id || ""} onChange={handleChangeInvoiceStatus} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
