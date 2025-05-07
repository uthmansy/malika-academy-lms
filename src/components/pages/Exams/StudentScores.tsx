// src/components/pages/studentScores/StudentScores.tsx
import { Button, Modal, Tabs, TabsProps } from "antd";
import { useState } from "react";
import AllStudentScores from "./AllStudentScores";
import AddStudentScore from "./AddStudentScore";
import { StudentClassroomsJoined } from "../../../types/db";
import useEditTerminalResult from "../../../hooks/useEditTerminalResult";
import FormBuilder from "../../utils/FormBuilder";
import useStudentReportCard from "../../../hooks/useStudentReportCard";
import DocumentViewer from "../../utils/DocumentViewer";
import ReportCard from "../../docs/ReportSheet";

interface Props {
  record: StudentClassroomsJoined;
}

function StudentScores({ record }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const { class_id, term_id, student_id } = record;

  const { terminalResult, scores, subjects } = useStudentReportCard({
    student_id,
    term_id,
    class_id,
  });

  const { formConfig, handleSubmit, isLoading } = useEditTerminalResult({
    record: terminalResult,
  });

  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: "Subjects Scores",
      children: (
        <>
          <div className="mb-5 flex space-x-3">
            <AddStudentScore studentId={record.student_table.id} />
          </div>
          <AllStudentScores studentId={record.student_table.id} />
        </>
      ),
    },
    {
      key: "2",
      label: "Other Scores",
      children: (
        <>
          <FormBuilder
            formConfig={formConfig}
            onSubmit={handleSubmit}
            loading={isLoading}
            columns={2}
          />
        </>
      ),
    },
    {
      key: "3",
      label: "Terminal Result",
      children:
        scores && subjects && terminalResult ? (
          <DocumentViewer fileName="sample">
            <ReportCard
              subjects={subjects}
              scores={scores}
              record={terminalResult}
            />
          </DocumentViewer>
        ) : (
          "Loading..."
        ),
    },
  ];

  return (
    <>
      <Button onClick={handleOpenModal} type="primary">
        Scores
      </Button>
      <Modal
        footer={null}
        title={`Student Scores for ${record.student_table.first_name} ${record.student_table.last_name}`}
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={800}
      >
        <Tabs size="large" defaultActiveKey="1" items={tabs} />
      </Modal>
    </>
  );
}

export default StudentScores;
