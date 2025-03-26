import { FeeStructure } from "../../../types/db";
import EditFeeStructure from "./EditFeeStructure";

interface Props {
  feeStructure: FeeStructure;
}

function TableActions({ feeStructure }: Props) {
  return (
    <div className="flex space-x-2">
      <EditFeeStructure feeStructure={feeStructure} />
    </div>
  );
}

export default TableActions;
