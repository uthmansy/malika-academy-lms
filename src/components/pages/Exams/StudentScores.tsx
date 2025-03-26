// src/components/pages/studentScores/StudentScores.tsx
import { Button, Modal } from "antd";
import { useState } from "react";
import AllStudentScores from "./AllStudentScores";
import AddStudentScore from "./AddStudentScore";
import { StudentClassroomsJoined } from "../../../types/db";

interface Props {
  record: StudentClassroomsJoined;
}

function StudentScores({ record }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
        <div className="mb-5 flex space-x-3">
          <AddStudentScore studentId={record.student_table.id} />
        </div>
        <AllStudentScores studentId={record.student_table.id} />
      </Modal>
    </>
  );
}

export default StudentScores;
