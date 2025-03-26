// teacherClassroomsAdminColumns.ts
import { ColumnsType } from "antd/es/table";
import { TeacherClassroomJoined } from "../types/db";

export const teacherClassroomsAdminColumns: ColumnsType<TeacherClassroomJoined> =
  [
    {
      title: "S.N",
      render: (_, __, index) => index + 1,
      width: 40,
      fixed: "left",
      align: "center",
    },
    {
      title: "Classroom",
      dataIndex: "classroom_id",
      key: "classroom_id",
      render: (_, record) => <span>{record.classroom_table.name}</span>,
    },
  ];
