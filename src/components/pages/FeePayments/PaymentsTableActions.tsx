// src/components/pages/teachers/TableActions.tsx
import { StudentClassroomsJoined } from "../../../types/db";
import ViewPayments from "./ViewPayments";

interface Props {
  record: StudentClassroomsJoined;
}

function PaymentsTableActions({ record }: Props) {
  return (
    <div className="flex space-x-2">
      <ViewPayments record={record} />
    </div>
  );
}

export default PaymentsTableActions;
