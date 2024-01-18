import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DeleteButton } from "./DeleteButton";
import { AddOrEditProductButton } from "./AddOrEditProductButton";
import { useGetAllProducts } from "./hooks/useGetAllProducts";

export type ProductTableProps = {};

export const ProductTable = () => {
  const { data, isLoading, isError } = useGetAllProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const products = data;

  if (!products || products.length === 0) {
    return <div>No product found.</div>;
  }

  return (
    <Table>
      <TableCaption>All products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Products</TableHead>
          <TableHead className="text-center">Descriptions</TableHead>
          <TableHead className="text-center">Prices</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <AddOrEditProductButton isForEdit={true} product={product} />
            </TableCell>
            <TableCell>
              <DeleteButton productId={product.id || ""} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
