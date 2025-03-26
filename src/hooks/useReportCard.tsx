import { useQuery } from "react-query";
import { StudentScoreJoined, TerminalResultJoined } from "../types/db";
import { studentScoreKeys } from "../constants/QUERY_KEYS";
import { getStudentScoresAll } from "../helpers/apiFunctions";
import { App } from "antd";

interface HookReturn {
  scores: StudentScoreJoined[];
}

interface Props {
  record: TerminalResultJoined;
}
function useReportCard({
  record: { student_id, class_id, term_id },
}: Props): HookReturn {
  const { message } = App.useApp();
  const { data: scores = [] } = useQuery({
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
    onError: () => message.error("Failed to load Classes"),
  });
  return { scores };
}

export default useReportCard;
