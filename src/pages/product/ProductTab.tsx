import { AddOrEditProductButton } from "./AddOrEditProductButton";
import { ProductTable } from "./ProductTable";

export type CustomerTabProps = {};

export const ProductTab = (props: CustomerTabProps) => {
  return (
    <div>
      <div className="w-full flex justify-end mt-5">
        <AddOrEditProductButton isForEdit={false} />
      </div>
      <div className="w-full flex justify-center mt-5">
        <ProductTable />
      </div>
    </div>
  );
};
