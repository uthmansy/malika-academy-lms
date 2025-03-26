// src/components/pages/teachers/TableActions.tsx
import { StudentClassroomsJoined } from "../../../types/db";
import StudentScores from "./StudentScores";

interface Props {
  record: StudentClassroomsJoined;
}

function TableActions({ record }: Props) {
  return (
    <div className="flex space-x-2">
      {/* <Subjects teacherId={teacher.id} />
      <TeacherClassrooms teacherId={teacher.id} /> */}
      <StudentScores record={record} />
    </div>
  );
}

export default TableActions;
