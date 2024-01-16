import { AddProductButton } from "./AddProductButton";
import { ProductTable } from "./ProductTable";

export type CustomerTabProps = {};

export const ProductTab = (props: CustomerTabProps) => {
  return (
    <div>
      <div className="w-full flex justify-end mt-5">
        <AddProductButton />
      </div>
      <div className="w-full flex justify-center mt-5">
        <ProductTable />
      </div>
    </div>
  );
};
