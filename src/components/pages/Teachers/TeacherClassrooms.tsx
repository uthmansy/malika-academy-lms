// src/components/pages/teacherClassrooms/AddTeacherClassroom.tsx
import { Button, Modal } from "antd";
import { useState } from "react";
import AddTeacherClassroom from "./AddTeacherClassroom";
import AllTeacherClassrooms from "./AllTeacherClassrooms";

interface Props {
  teacherId: string;
}

function TeacherClassrooms({ teacherId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Button onClick={handleOpenModal} type="primary">
        Classrooms
      </Button>
      <Modal
        footer={null}
        title="Add Teacher Classroom"
        open={isModalOpen}
        onCancel={handleCloseModal}
      >
        <div className="mb-5">
          <AddTeacherClassroom teacherId={teacherId} />
        </div>
        <AllTeacherClassrooms teacherId={teacherId} />
      </Modal>
    </>
  );
}

export default TeacherClassrooms;
