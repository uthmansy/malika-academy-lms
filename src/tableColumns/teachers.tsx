// src/tableColumns/teachers.tsx
import { ColumnsType } from "antd/es/table";
import { Teacher } from "../types/db";
import { formatNumber } from "../helpers/functions";
import TableActions from "../components/pages/Teachers/TableActions";

export const teachersAdminColumns: ColumnsType<Teacher> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1, // Row number
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
    render: (text) => <span className="capitalize">{text}</span>,
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
    render: (text) => <span className="capitalize">{text}</span>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Hire Date",
    dataIndex: "hire_date",
    key: "hire_date",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Termination Date",
    dataIndex: "termination_date",
    key: "termination_date",
    render: (text) => <span>{text || "-"}</span>,
  },
  {
    title: "Service Years",
    dataIndex: "service_years",
    key: "service_years",
    render: (text) => <span>{text ? formatNumber(text) : "-"}</span>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => <TableActions teacher={record} />,
  },
];
