// src/tableColumns/feeStructures.ts
import { ColumnsType } from "antd/es/table";
import { FeeStructureJoined } from "../types/db";
import { formatNumber } from "../helpers/functions";
import TableActions from "../components/pages/FeeStructures/TableActions";

export const feeStructuresAdminColumns: ColumnsType<FeeStructureJoined> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "Class",
    dataIndex: "class",
    key: "class",
    render: (classData) => <span>{classData?.name || "N/A"}</span>,
  },
  {
    title: "Term",
    dataIndex: "term",
    key: "term",
    render: (termData) => <span>{termData?.name || "N/A"}</span>,
  },
  {
    title: "Total Amount",
    dataIndex: "total_amount",
    key: "total_amount",
    render: (amount) => <span>{`₦${formatNumber(amount)}`}</span>,
  },
  {
    title: "Created At",
    dataIndex: "created_at",
    key: "created_at",
    render: (text) => <span>{new Date(text).toLocaleString()}</span>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => <TableActions feeStructure={record} />,
  },
];
