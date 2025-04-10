// src/tableColumns/classes.tsx
import { ColumnsType } from "antd/es/table";
import { ClassJoined } from "../types/db";
import TableActions from "../components/pages/Classes/TableActions";

export const classesAdminColumns: ColumnsType<ClassJoined> = [
  {
    title: "S.N",
    render: (_, __, index) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "Class Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Class Rank",
    dataIndex: "rank",
    key: "rank",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Section",
    dataIndex: "section",
    key: "section_table",
    render: (_, record) => <span>{record.section_table.name}</span>,
  },
  {
    title: "Next Class",
    dataIndex: "next_class_id",
    key: "next_class_id",
    render: (_, record) => <span>{record.next_class?.name}</span>,
  },
  {
    title: "Form Master",
    dataIndex: "form_master_id",
    key: "form_master_id",
    render: (_, record) => (
      <span>
        {record.form_master.first_name} {record.form_master.last_name}
      </span>
    ),
  },
  // {
  //   title: "Academic Year",
  //   dataIndex: "academic_year",
  //   key: "academic_year",
  //   render: (text) => <span>{text}</span>,
  // },
  {
    title: "Action",
    key: "action",
    render: (_, record) => <TableActions classRecord={record} />,
  },
];
