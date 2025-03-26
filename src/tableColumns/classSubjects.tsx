// src/tableColumns/classSubjects.tsx
import { ColumnsType } from "antd/es/table";
import { ClassSubjectJoined } from "../types/db";

export const classSubjectsAdminColumns: ColumnsType<ClassSubjectJoined> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "Subject",
    dataIndex: "subject_id",
    key: "subject_id",
    render: (_, record) => <span>{record.subject_table.name}</span>,
  },
];
