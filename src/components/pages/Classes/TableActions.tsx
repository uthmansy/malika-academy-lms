// src/components/pages/teachers/TableActions.tsx
import { ClassJoined } from "../../../types/db";
import ClassSubjects from "./ClassSubjects";

interface Props {
  classRecord: ClassJoined;
}

function TableActions({ classRecord }: Props) {
  return (
    <div className="flex space-x-2">
      {/* <Subjects teacherId={teacher.id} />
      <TeacherClassrooms teacherId={teacher.id} /> */}
      <ClassSubjects classId={classRecord.id} />
    </div>
  );
}

export default TableActions;
