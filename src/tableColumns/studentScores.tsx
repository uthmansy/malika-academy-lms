// src/tableColumns/studentScores.tsx
import { ColumnsType } from "antd/es/table";
import { StudentScoreJoined } from "../types/db";
import { getGrade } from "../helpers/functions";
import ScoreTableActions from "../components/pages/Exams/ScoreTableActions";
// import TableActions from "../components/pages/StudentScores/TableActions";

export const studentScoresColumns: ColumnsType<StudentScoreJoined> = [
  {
    title: "S.N",
    render: (_: any, __: any, index: number) => index + 1,
    width: 40,
    fixed: "left",
    align: "center",
  },
  {
    title: "Assessment Date",
    dataIndex: "assessment_date",
    key: "assessment_date",
    render: (date: string | Date) => (
      <span>{new Date(date).toLocaleDateString()}</span>
    ),
  },
  {
    title: "Term",
    dataIndex: "term_table",
    key: "term",
    render: (term: { session: string; term: string } | undefined) => (
      <span>{term ? `${term.session} ${term.term}` : "N/A"}</span>
    ),
  },
  {
    title: "Subject",
    dataIndex: "subject_table",
    key: "subject",
    render: (subject: { name: string } | undefined) => (
      <span>{subject ? subject.name : "N/A"}</span>
    ),
  },
  {
    title: "Class",
    dataIndex: "class_id",
    key: "class",
    render: (_, record) => <span>{record.class_table.name}</span>,
  },
  {
    title: "CA 1",
    dataIndex: "ca_1",
    key: "ca_1",
    render: (ca: number) => <span>{ca}</span>,
  },
  {
    title: "CA 2",
    dataIndex: "ca_2",
    key: "ca_2",
    render: (ca: number) => <span>{ca}</span>,
  },
  {
    title: "Total CA",
    dataIndex: "ca",
    key: "ca",
    render: (ca: number) => <span>{ca}</span>,
  },
  {
    title: "Exam",
    dataIndex: "exam",
    key: "exam",
    render: (exam: number) => <span>{exam}</span>,
  },
  {
    title: "Total Score",
    dataIndex: "score",
    key: "score",
    render: (score: number) => <span>{score}</span>,
  },
  {
    title: "Grade",
    dataIndex: "score",
    key: "grade",
    render: (score: number) => <span>{getGrade(score)}</span>,
  },

  {
    title: "Action",
    key: "action",
    render: (_: any, record: StudentScoreJoined) => (
      <ScoreTableActions score={record} />
    ),
  },
];
