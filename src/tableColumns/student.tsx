import { ColumnsType } from "antd/es/table";
import { Student } from "../types/db";

export const studentsAdminColumns: ColumnsType<Student> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
    sorter: (a, b) => a.first_name.localeCompare(b.first_name),
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
    sorter: (a, b) => a.last_name.localeCompare(b.last_name),
  },
  {
    title: "Date of Birth",
    dataIndex: "date_of_birth",
    key: "date_of_birth",
    render: (text) => text,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    render: (text) => text.charAt(0).toUpperCase() + text.slice(1),
  },
  {
    title: "Admission Date",
    dataIndex: "admission_date",
    key: "admission_date",
    render: (text) => text,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => text.charAt(0).toUpperCase() + text.slice(1),
  },
  {
    title: "Registration Number",
    dataIndex: "registration_number",
    key: "registration_number",
  },
];
