// feePaymentsAdminColumns.ts
import { ColumnsType } from "antd/es/table";
import { FeePaymentJoined } from "../types/db";
import { formatNumber } from "../helpers/functions";

export const feePaymentsColumns: ColumnsType<FeePaymentJoined> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "Payment Date",
    dataIndex: "payment_date",
    key: "payment_date",
    render: (text) => <span className="capitalize">{text}</span>,
  },
  {
    title: "Student",
    dataIndex: "student",
    key: "student",
    render: (_, record) => (
      <span className="capitalize">
        {`${record.student.first_name} ${record.student.last_name}`}
      </span>
    ),
  },
  {
    title: "Class",
    dataIndex: "fee_structure",
    key: "class",
    render: (_, record) => (
      <span className="capitalize">{record.fee_structure.class.name}</span>
    ),
  },
  {
    title: "Term",
    dataIndex: "fee_structure",
    key: "term",
    render: (_, record) => (
      <span className="capitalize">{record.fee_structure.term.name}</span>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text) => <span>{`₦${formatNumber(text)}`}</span>,
  },
  {
    title: "Method",
    dataIndex: "method",
    key: "method",
    render: (text) => <span className="capitalize">{text}</span>,
  },
  {
    title: "Reference Number",
    dataIndex: "reference_number",
    key: "reference_number",
    render: (text) => <span>{text}</span>,
  },
  //   {
  //     title: "Action",
  //     key: "action",
  //     render: (_, record) => <TableActions feePayment={record} />,
  //   },
];
