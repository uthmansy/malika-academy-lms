// src/components/pages/teachers/ScoreTableActions.tsx
import { StudentScoreJoined } from "../../../types/db";
import EditStudentScore from "./EditStudentScore";

interface Props {
  score: StudentScoreJoined;
}

function ScoreTableActions({ score }: Props) {
  return (
    <div className="flex space-x-2">
      <EditStudentScore studentScore={score} />
    </div>
  );
}

export default ScoreTableActions;
