// src/tableColumns/terms.tsx
import { ColumnsType } from "antd/es/table";
import { Term } from "../types/db";

export const termsAdminColumns: ColumnsType<Term> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "Term Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Start Date",
    dataIndex: "start_date",
    key: "start_date",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "End Date",
    dataIndex: "end_date",
    key: "end_date",
    render: (text) => <span>{text || "-"}</span>,
  },
];
