// src/components/pages/classSubjects/ClassSubjects.tsx
import { Button, Modal } from "antd";
import { useState } from "react";
import AllClassSubjects from "./AllClassSubjects";
import AddClassSubject from "./AddClassSubject";

interface Props {
  classId: string;
}

function ClassSubjects({ classId }: Props) {
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
        title="Add Class Subjects"
        open={isModalOpen}
        onCancel={handleCloseModal}
      >
        <div className="mb-5">
          <AddClassSubject classId={classId} />
        </div>
        <AllClassSubjects classId={classId} />
      </Modal>
    </>
  );
}

export default ClassSubjects;
