import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DeleteButton } from "./DeleteButton";
import { InvoiceDropDown } from "./InvoiceDropDown";
import { AddOrUpdateCustomerButton } from "./AddOrUpdateCustomerButton";
import { useGetAllCustomers } from "./hooks/useGetAllCustomers";

export type CustomerTableProps = {};

export const CustomerTable = () => {
  const { data, isLoading, isError } = useGetAllCustomers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const customers = data;

  if (!customers || customers.length === 0) {
    return <div>No customer found.</div>;
  }

  return (
    <Table>
      <TableCaption>All customers</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Customers</TableHead>
          <TableHead className="text-center">Email</TableHead>
          <TableHead className="text-center">Phone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell className="font-medium">{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell>
              <AddOrUpdateCustomerButton isForEdit={true} customer={customer} />
            </TableCell>
            <TableCell>
              <InvoiceDropDown customer={customer} />
            </TableCell>
            <TableCell>
              <DeleteButton customerId={customer.id || ""} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
