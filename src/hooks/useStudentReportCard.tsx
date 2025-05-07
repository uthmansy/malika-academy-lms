import { App } from "antd";
import {
  ClassSubjectJoined,
  StudentScoreJoined,
  TerminalResultJoined,
} from "../types/db";
import { useQuery } from "react-query";
import { useState } from "react";
import {
  studentScoreKeys,
  subjectsKeys,
  terminalResultsKeys,
} from "../constants/QUERY_KEYS";
import {
  getClassSubjects,
  getStudentScoresAll,
  getStudentTerminalResult,
} from "../helpers/apiFunctions";

interface Props {
  student_id: string;
  class_id: string;
  term_id: string;
}

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  scores: StudentScoreJoined[] | undefined;
  subjects: ClassSubjectJoined[] | undefined;
  terminalResult: TerminalResultJoined | undefined;
}

function useStudentReportCard({
  student_id,
  class_id,
  term_id,
}: Props): HookReturn {
  const { message } = App.useApp();
  // const queryClient = useQueryClient();

  const { data: scores } = useQuery({
    queryKey: [
      studentScoreKeys.getStudentScoresAll,
      student_id,
      class_id,
      term_id,
    ],
    queryFn: async () => {
      const data = await getStudentScoresAll({
        studentId: student_id,
        termId: term_id,
        classFilter: class_id,
      });
      return data;
    },
    onError: () => message.error("Failed to load Scores"),
  });
  const { data: subjects } = useQuery({
    queryKey: [subjectsKeys.getClassSubjects, class_id],
    queryFn: async () => {
      const data = await getClassSubjects({
        classId: class_id,
      });
      return data;
    },
    onError: () => message.error("Failed to load Subjects"),
  });
  const { data: terminalResult } = useQuery({
    queryKey: [
      terminalResultsKeys.getStudentReport,
      class_id,
      student_id,
      term_id,
    ],
    queryFn: async () => {
      const data = await getStudentTerminalResult({
        classId: class_id,
        studentId: student_id,
        termId: term_id,
      });
      return data;
    },
    onError: () => message.error("Failed to Terminal Result"),
  });

  // Modal control
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return {
    isModalOpen,
    handleCloseModal,
    handleOpenModal,
    scores,
    subjects,
    terminalResult,
  };
}

export default useStudentReportCard;
