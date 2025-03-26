// src/tableColumns/classrooms.tsx
import { ColumnsType } from "antd/es/table";
import { ClassroomJoined } from "../types/db";

export const classroomsAdminColumns: ColumnsType<ClassroomJoined> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "Class",
    dataIndex: "class_id",
    key: "class_id",
    render: (_, record) => <span>{record.class_table.name}</span>, // You might resolve and display the class name instead
  },
  {
    title: "Classroom Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Label",
    dataIndex: "label",
    key: "label",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Capacity",
    dataIndex: "capacity",
    key: "capacity",
    render: (text) => <span>{text}</span>,
  },
];
