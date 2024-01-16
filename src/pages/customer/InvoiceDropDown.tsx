import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Customer } from "schema/customerSchema";
import { CreateInvoiceModal } from "../invoice/CreateInvoiceModal";
import { AllCustomerInvoice } from "../invoice/AllCustomerInvoice";

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
      <DropdownMenuContent className="w-40 flex justify-center">
        <DropdownMenuGroup>
          <CreateInvoiceModal customer={customer} />
          <AllCustomerInvoice customer={customer} />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
