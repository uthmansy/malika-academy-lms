// src/components/pages/teachers/TableActions.tsx
import { ClassJoined } from "../../../types/db";
import ClassSubjects from "./ClassSubjects";
import EditClass from "./EditClass";

interface Props {
  classRecord: ClassJoined;
}

function TableActions({ classRecord }: Props) {
  return (
    <div className="flex space-x-2">
      {/* <Subjects teacherId={teacher.id} />
      <TeacherClassrooms teacherId={teacher.id} /> */}
      <EditClass classRecord={classRecord} />
      <ClassSubjects classId={classRecord.id} />
    </div>
  );
}

export default TableActions;
