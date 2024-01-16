import { getAllProduct } from "@/api/product/getAllProduct";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { Customer } from "schema/customerSchema";
import { useGetAllProducts } from "./hooks/useGetAllProducts";
import { ProductsCombo } from "./ProductsCombo";
import { Product } from "schema/productSchema";
import React from "react";
import { InvoiceProductsTable } from "./InvoiceProductsTable";
import { useCreateInvoice } from "./hooks/useCreateInvoice";
import { Invoice } from "schema/invoiceSchema";

export type CreateInvoiceModalProps = {
  customer: Customer;
};

export const CreateInvoiceModal = (props: CreateInvoiceModalProps) => {
  const { customer } = props;

  const { data, isLoading, isError } = useGetAllProducts();
  const { mutate, isPending } = useCreateInvoice();

  const [invoiceProducts, setInvoiceProducts] = React.useState<Product[]>([]);

  const handleSelectProduct = (product: Product) => {
    setInvoiceProducts([...invoiceProducts, product]);
  };

  const handleCreateInvoice = () => {
    const today = new Date();
    const dueDate = new Date();
    dueDate.setDate(today.getDate() + 30);

    const totalAmount = invoiceProducts.reduce((acc, product) => acc + product.price, 0);

    const totalTax = invoiceProducts.reduce((acc, product) => acc + product.tax, 0);

    const invoice: Invoice = {
      customer: customer,
      products: invoiceProducts,
      invoiceNumber: "INV-" + Math.floor(Math.random() * 1000000),
      invoiceDate: today,
      dueDate: dueDate,
      status: "sent",
      totalAmount: totalAmount,
      totalTax: totalTax,
      totalAmountWithTax: totalAmount + totalTax,
    };

    mutate(invoice);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="w-36">
          Create invoice
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Create invoice for {customer.name}</DialogTitle>
        </DialogHeader>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}

        <div>
          <ProductsCombo products={data || []} handleSelectProduct={handleSelectProduct} />
          <InvoiceProductsTable products={invoiceProducts} setInvoiceProducts={setInvoiceProducts} />
        </div>
        <DialogFooter>
          <Button onClick={handleCreateInvoice}>{isPending ? "Creating..." : "Create"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
