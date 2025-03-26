// tableColumns/terminalResults.tsx
import { ColumnsType } from "antd/es/table";
import { TerminalResultJoined } from "../types/db";
import TableActions from "../components/pages/TerminalResults/TableActions";
import { formatNumber } from "../helpers/functions";

export const terminalResultsColumns: ColumnsType<TerminalResultJoined> = [
  {
    title: "S.N",
    render: (_: any, __: any, index: number) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "Student Name",
    key: "student_name",
    render: (_: any, record: TerminalResultJoined) => {
      const { student } = record;
      return `${student?.first_name || ""} ${student?.last_name || ""}`;
    },
  },
  {
    title: "Term",
    key: "term",
    render: (_: any, record: TerminalResultJoined) => record.term?.name || "-",
  },
  {
    title: "Total Score",
    dataIndex: "total_score",
    key: "total_score",
  },
  {
    title: "Average Score",
    dataIndex: "average_score",
    key: "average_score",
    render: (_, record) => formatNumber(record.average_score),
  },
  {
    title: "Grade",
    dataIndex: "grade",
    key: "grade",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Published Date",
    dataIndex: "published_date",
    key: "published_date",
    render: (date: string) =>
      date ? new Date(date).toLocaleDateString() : "-",
  },
  // New numeric columns with underscore naming
  {
    title: "Attentiveness",
    dataIndex: "attentiveness",
    key: "attentiveness",
  },
  {
    title: "Honesty",
    dataIndex: "honesty",
    key: "honesty",
  },
  {
    title: "Neatness",
    dataIndex: "neatness",
    key: "neatness",
  },
  {
    title: "Politeness",
    dataIndex: "politeness",
    key: "politeness",
  },
  {
    title: "Punctuality",
    dataIndex: "punctuality",
    key: "punctuality",
  },
  {
    title: "Relationship with Others",
    dataIndex: "relationship_with_others",
    key: "relationship_with_others",
  },
  {
    title: "Club / Society",
    dataIndex: "club_society",
    key: "club_society",
  },
  {
    title: "Drawing and Painting",
    dataIndex: "drawing_and_painting",
    key: "drawing_and_painting",
  },
  {
    title: "Hand Writing",
    dataIndex: "hand_writing",
    key: "hand_writing",
  },
  {
    title: "Hobbies",
    dataIndex: "hobbies",
    key: "hobbies",
  },
  {
    title: "Speech Fluency",
    dataIndex: "speech_fluency",
    key: "speech_fluency",
  },
  {
    title: "Sport and Game",
    dataIndex: "sport_and_game",
    key: "sport_and_game",
  },
  // New remarks columns
  {
    title: "Class Teacher Remarks",
    dataIndex: "class_teacher_remarks",
    key: "class_teacher_remarks",
  },
  {
    title: "Head Teacher Remarks",
    dataIndex: "head_teacher_remarks",
    key: "head_teacher_remarks",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => <TableActions record={record} />,
  },
];
