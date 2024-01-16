import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Customer } from "schema/customerSchema";
import { CreateInvoiceModal } from "../invoice/CreateInvoiceModal";

export type InvoiceDropDownProps = {
  customer: Customer;
};

export const InvoiceDropDown = (props: InvoiceDropDownProps) => {
  const { customer } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Invoices</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <CreateInvoiceModal customer={customer} />
          <DropdownMenuItem>See Invoices</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
