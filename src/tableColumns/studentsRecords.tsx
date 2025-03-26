import { ColumnsType } from "antd/es/table";
import { StudentClassroomsJoined } from "../types/db";
import TableActions from "../components/pages/Exams/TableActions";
import PaymentsTableActions from "../components/pages/FeePayments/PaymentsTableActions";
import RecordCompleteStatus from "../components/pages/Exams/RecordCompleteStatus";

interface HookReturn {
  studentsRecordsColumns: ColumnsType<StudentClassroomsJoined>;
}

interface Props {
  ActionType: "Teacher" | "Accountant";
}

export const useStudentsRecordsColumns = ({
  ActionType,
}: Props): HookReturn => {
  const studentsRecordsColumns: ColumnsType<StudentClassroomsJoined> = [
    {
      title: "S.N",
      render: (_, __, index) => index + 1,
      width: 40,
      fixed: "left",
      align: "center",
    },
    {
      title: "First Name",
      dataIndex: "student_table",
      key: "first_name",
      render: (_: any, record: StudentClassroomsJoined) =>
        record.student_table.first_name,
    },
    {
      title: "Last Name",
      dataIndex: "student_table",
      key: "last_name",
      render: (_: any, record: StudentClassroomsJoined) =>
        record.student_table.last_name,
    },
    {
      title: "Registration Number",
      dataIndex: "student_table",
      key: "reg",
      render: (_: any, record: StudentClassroomsJoined) =>
        record.student_table.registration_number,
    },
    ...(ActionType === "Teacher"
      ? [
          {
            title: "Recording Status",
            key: "status",
            render: (_: any, record: StudentClassroomsJoined) => (
              <RecordCompleteStatus record={record} />
            ),
          },
          {
            title: "Action",
            key: "action",
            render: (_: any, record: StudentClassroomsJoined) => (
              <TableActions record={record} />
            ),
          },
        ]
      : []),
    ...(ActionType === "Accountant"
      ? [
          {
            title: "Action",
            key: "action",
            render: (_: any, record: StudentClassroomsJoined) => (
              <PaymentsTableActions record={record} />
            ),
          },
        ]
      : []),
  ];

  return { studentsRecordsColumns };
};
