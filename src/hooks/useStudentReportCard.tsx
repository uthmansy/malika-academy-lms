import { App } from "antd";
import {
  ClassSubjectJoined,
  StudentScoreJoined,
  TerminalResultJoined,
} from "../types/db";
import { useQuery } from "react-query";
import { useState } from "react";
import { studentScoreKeys, subjectsKeys } from "../constants/QUERY_KEYS";
import { getClassSubjects, getStudentScoresAll } from "../helpers/apiFunctions";

interface Props {
  record: TerminalResultJoined;
}

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  scores: StudentScoreJoined[] | undefined;
  subjects: ClassSubjectJoined[] | undefined;
}

function useStudentReportCard({
  record: { student_id, class_id, term_id },
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

  // Modal control
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return { isModalOpen, handleCloseModal, handleOpenModal, scores, subjects };
}

export default useStudentReportCard;
