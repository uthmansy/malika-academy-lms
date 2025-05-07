// src/components/pages/TerminalResult/TerminalResult.tsx
import { Button, Modal } from "antd";
import { StudentClassroomsJoined } from "../../../types/db";
import useStudentReportCard from "../../../hooks/useStudentReportCard";
import DocumentViewer from "../../utils/DocumentViewer";
import ReportCard from "../../docs/ReportSheet";

interface Props {
  record: StudentClassroomsJoined;
}

function TerminalResult({ record }: Props) {
  const { class_id, term_id, student_id } = record;
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
      <Button onClick={handleOpenModal} type="default">
        Terminal Result
      </Button>
      <Modal
        footer={null}
        title={`Terminal Results for ${record.student_table.first_name} ${record.student_table.last_name}`}
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={800}
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

export default TerminalResult;
