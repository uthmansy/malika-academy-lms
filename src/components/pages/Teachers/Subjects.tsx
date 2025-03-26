// src/components/pages/teacherClassrooms/AddTeacherClassroom.tsx
import { Button, Modal } from "antd";
import { useState } from "react";
import AllTeacherSubjects from "./AllTeacherSubjects";
import AddTeacherSubject from "./AddTeacherSubject";

interface Props {
  teacherId: string;
}

function Subjects({ teacherId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Button onClick={handleOpenModal} type="primary">
        Subjects
      </Button>
      <Modal
        footer={null}
        title="Add Teacher Subjects"
        open={isModalOpen}
        onCancel={handleCloseModal}
      >
        <div className="mb-5">
          <AddTeacherSubject teacherId={teacherId} />
        </div>
        <AllTeacherSubjects teacherId={teacherId} />
      </Modal>
    </>
  );
}

export default Subjects;
