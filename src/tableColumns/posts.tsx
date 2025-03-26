// src/tableColumns/classes.tsx
import { ColumnsType } from "antd/es/table";
import { Post } from "../types/db";
import TableActions from "../components/pages/Blog/TableActions";

export const postsColumns: ColumnsType<Post> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => <TableActions record={record} />,
  },
];
