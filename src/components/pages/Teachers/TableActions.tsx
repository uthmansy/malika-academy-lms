// src/components/pages/teachers/TableActions.tsx
import { Teacher } from "../../../types/db";
import Subjects from "./Subjects";
import TeacherClassrooms from "./TeacherClassrooms";

interface TableActionsProps {
  teacher: Teacher;
}

function TableActions({ teacher }: TableActionsProps) {
  return (
    <div className="flex space-x-2">
      <Subjects teacherId={teacher.id} />
      <TeacherClassrooms teacherId={teacher.id} />
    </div>
  );
}

export default TableActions;
