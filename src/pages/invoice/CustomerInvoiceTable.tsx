import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { Invoice } from "schema/invoiceSchema";

export type CustomerInvoiceTableProps = {
  invoices: Invoice[];
};

export const CustomerInvoiceTable = (props: CustomerInvoiceTableProps) => {
  const { invoices } = props;

  if (invoices.length === 0) {
    return <div>No invoices</div>;
  }

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
            <TableCell className="text-center">{invoice.invoiceDate.toISOString()}</TableCell>
            <TableCell className="text-center">{invoice.dueDate.toISOString()}</TableCell>
            <TableCell className="text-center">{invoice.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
