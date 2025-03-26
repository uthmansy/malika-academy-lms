// src/tableColumns/subjects.tsx
import { ColumnsType } from "antd/es/table";
import { Subject } from "../types/db";

export const subjectsAdminColumns: ColumnsType<Subject> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "Subject Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    render: (text) => <span>{text || "-"}</span>,
  },
];
