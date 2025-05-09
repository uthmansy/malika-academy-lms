// src/components/pages/studentScores/AddStudentScore.tsx
import { Button, Modal } from "antd";
import { TerminalResultJoined } from "../../../types/db";
import DocumentViewer from "../../utils/DocumentViewer";
import ReportCard from "../../docs/ReportSheet";
import useStudentReportCard from "../../../hooks/useStudentReportCard";

interface Props {
  record: TerminalResultJoined;
}

function StudentReportCard({ record }: Props) {
  const { student_id, term_id, class_id } = record;
  const {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    scores,
    subjects,
    terminalResult,
  } = useStudentReportCard({ student_id, term_id, class_id });

  return (
    <>
      <Button onClick={handleOpenModal} type="primary">
        Report Card
      </Button>
      <Modal
        footer={null}
        title="Student Report Card"
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={700}
      >
        {scores && subjects && terminalResult ? (
          <DocumentViewer fileName="sample">
            <ReportCard
              subjects={subjects}
              scores={scores}
              record={terminalResult}
            />
          </DocumentViewer>
        ) : (
          "Loading..."
        )}
      </Modal>
    </>
  );
}

export default StudentReportCard;
