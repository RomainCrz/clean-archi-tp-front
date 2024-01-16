import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Product } from "schema/productSchema";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

type InvoiceProductsTableProps = {
  products: Product[];
  setInvoiceProducts: (products: Product[]) => void;
};
export const InvoiceProductsTable = ({ products, setInvoiceProducts }: InvoiceProductsTableProps) => {
  return (
    <Table>
      <TableCaption>Invoice</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Tax</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.tax}</TableCell>
            <TableCell className="text-right">{product.price + product.tax}</TableCell>
            <TableCell>
              <Button variant={"destructive"} onClick={() => setInvoiceProducts(products.filter((p) => p.id !== product.id))}>
                <Trash className="w-3 h-3" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{products.reduce((acc, product) => acc + product.price + product.tax, 0)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
