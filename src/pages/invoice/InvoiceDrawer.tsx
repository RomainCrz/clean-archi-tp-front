import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Invoice } from "schema/invoiceSchema";
import { ArrowUpRightSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InvoiceProductDescription } from "./InvoiceProductDescription";

type InvoiceDrawerProps = {
  invoice: Invoice;
};
export const InvoiceDrawer = ({ invoice }: InvoiceDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <ArrowUpRightSquare className="w-3 h-3" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Invoice</DrawerTitle>
            <DrawerDescription>Invoice informations.</DrawerDescription>
          </DrawerHeader>
          <InvoiceProductDescription products={invoice.products} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
