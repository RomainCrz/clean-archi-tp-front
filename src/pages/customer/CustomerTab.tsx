import { AddOrUpdateCustomerButton } from "./AddOrUpdateCustomerButton";
import { CustomerTable } from "./CustomerTable";

export type CustomerTabProps = {};

export const CustomerTab = (props: CustomerTabProps) => {
  return (
    <div>
      <div className="w-full flex justify-end mt-5">
        <AddOrUpdateCustomerButton isForEdit={false} />
      </div>
      <div className="w-full flex justify-center mt-5">
        <CustomerTable />
      </div>
    </div>
  );
};
