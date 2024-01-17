import { TableCell, TableRow } from "@/components/ui/table";
import { StatusCombo } from "./components/StatusCombo";
import { Invoice } from "schema/invoiceSchema";
import { InvoiceDrawer } from "./InvoiceDrawer";

export type InvoiceRowProps = {
  invoice: Invoice;
  handleChangeInvoiceStatus: (status: "draft" | "sent" | "paid" | "cancelled" | "overdue", invoiceId: string) => void;
};

export const InvoiceRow = (props: InvoiceRowProps) => {
  const { invoice, handleChangeInvoiceStatus } = props;
  return (
    <TableRow key={invoice.id} className="cursor-pointer">
      <TableCell className="font-medium text-center">{invoice.invoiceNumber}</TableCell>
      <TableCell className="text-center">{invoice.totalAmountWithTax}</TableCell>
      <TableCell className="text-center">{invoice.invoiceDate.toISOString().split("T")[0]}</TableCell>
      <TableCell className="text-center">{invoice.dueDate.toISOString().split("T")[0]}</TableCell>
      <TableCell className="text-center">
        <StatusCombo initialValue={invoice.status} invoiceId={invoice.id || ""} onChange={handleChangeInvoiceStatus} />
      </TableCell>
      <TableCell>
        <InvoiceDrawer invoice={invoice} />
      </TableCell>
    </TableRow>
  );
};
