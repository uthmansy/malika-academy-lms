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
  const { isModalOpen, handleOpenModal, handleCloseModal, scores, subjects } =
    useStudentReportCard({ record });

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
        {scores && subjects ? (
          <DocumentViewer fileName="sample">
            <ReportCard subjects={subjects} scores={scores} record={record} />
          </DocumentViewer>
        ) : (
          "Loading..."
        )}
      </Modal>
    </>
  );
}

export default StudentReportCard;
