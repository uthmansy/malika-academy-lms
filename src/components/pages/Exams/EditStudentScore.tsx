// src/components/studentScores/EditStudentScore.tsx
import useEditStudentScore from "../../../hooks/useEditStudentScore";
import FormBuilder from "../../utils/FormBuilder";
import { StudentScoreJoined } from "../../../types/db"; // adjust the path & name as needed
import { MdModeEdit } from "react-icons/md";
import { Button, Modal } from "antd";

interface Props {
  studentScore: StudentScoreJoined;
}

function EditStudentScore({ studentScore }: Props) {
  const {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    formConfig,
    handleSubmit,
    isLoading,
    form,
  } = useEditStudentScore({ studentScore });

  return (
    <>
      <Button onClick={handleOpenModal} type="default">
        <MdModeEdit />
      </Button>
      <Modal
        footer={null}
        title={`Edit ${studentScore.subject_table.name} score`}
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={400}
      >
        <FormBuilder
          formConfig={formConfig}
          onSubmit={handleSubmit}
          loading={isLoading}
          form={form}
        />
      </Modal>
    </>
  );
}

export default EditStudentScore;
