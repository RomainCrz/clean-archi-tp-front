import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Product } from "schema/productSchema";

export type InvoiceProductDescriptionProps = {
  products: Product[];
};

export const InvoiceProductDescription = (props: InvoiceProductDescriptionProps) => {
  const { products } = props;

  return (
    <Table>
      <TableCaption>All products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Products</TableHead>
          <TableHead className="text-center">Descriptions</TableHead>
          <TableHead className="text-center">Prices</TableHead>
          <TableHead className="text-center">Tax</TableHead>
          <TableHead className="text-center">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell className="text-center">{product.description}</TableCell>
            <TableCell className="text-center">{product.price}</TableCell>
            <TableCell className="text-center">{product.tax}</TableCell>
            <TableCell className="text-center">{product.price + product.tax}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-center">{products.reduce((acc, product) => acc + product.price + product.tax, 0)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
