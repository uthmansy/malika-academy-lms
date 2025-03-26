// teacherSubjectsAdminColumns.ts
import { ColumnsType } from "antd/es/table";
import { TeacherSubjectJoined } from "../types/db";

export const teacherSubjectsAdminColumns: ColumnsType<TeacherSubjectJoined> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "Subject ID",
    dataIndex: "subject_id",
    key: "subject_id",
    render: (_, record) => <span>{record.subject_table.name}</span>,
  },
];
