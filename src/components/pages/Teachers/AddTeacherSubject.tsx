// src/components/pages/teacherSubjects/AddTeacherSubject.tsx
import { Button, Modal } from "antd";
import FormBuilder from "../../utils/FormBuilder";
import useAddTeacherSubject from "../../../hooks/useAddTeacherSubject";

interface Props {
  teacherId: string;
}

function AddTeacherSubject({ teacherId }: Props) {
  const {
    handleCloseModal,
    handleOpenModal,
    isModalOpen,
    formConfig,
    handleSubmit,
    isLoading,
  } = useAddTeacherSubject({ teacherId });

  return (
    <>
      <Button onClick={handleOpenModal} type="primary">
        + Add Subject
      </Button>
      <Modal
        footer={null}
        title="Add Teacher Subject"
        open={isModalOpen}
        onCancel={handleCloseModal}
      >
        <FormBuilder
          formConfig={formConfig}
          onSubmit={handleSubmit}
          loading={isLoading}
        />
      </Modal>
    </>
  );
}

export default AddTeacherSubject;
