// src/components/pages/studentScores/AddStudentScore.tsx
import { Button, Modal } from "antd";
import FormBuilder from "../../utils/FormBuilder";
import useAddStudentScore from "../../../hooks/useAddStudentScore";

interface Props {
  studentId: string;
}

function AddStudentScore({ studentId }: Props) {
  const {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    formConfig,
    handleSubmit,
    isLoading,
  } = useAddStudentScore({ studentId });

  return (
    <>
      <Button onClick={handleOpenModal} type="primary">
        + Add Score
      </Button>
      <Modal
        footer={null}
        title="Add Student Score"
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

export default AddStudentScore;
