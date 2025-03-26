// src/components/pages/teachers/TableActions.tsx
import { TerminalResultJoined } from "../../../types/db";
import Edit from "./Edit";
import StudentReportCard from "./StudentReportCard";

interface Props {
  record: TerminalResultJoined;
}

function TableActions({ record }: Props) {
  return (
    <div className="flex space-x-2">
      <Edit record={record} />
      <StudentReportCard record={record} />
    </div>
  );
}

export default TableActions;
