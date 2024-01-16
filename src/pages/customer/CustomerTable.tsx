import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { getAllCustomer } from "../../api/customer/getAllCustomer";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "./DeleteButton";
import { CreateInvoiceModal } from "../invoice/CreateInvoiceModal";
import { InvoiceDropDown } from "./InvoiceDropDown";
import { AddOrUpdateCustomerButton } from "./AddOrUpdateCustomerButton";

export type CustomerTableProps = {};

export const CustomerTable = (props: CustomerTableProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["all-customers"],
    queryFn: async () => {
      try {
        const customers = await getAllCustomer();
        return customers;
      } catch (error) {
        throw error;
      }
    },
  });

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
