// src/components/pages/teacherClassrooms/AddTeacherClassroom.tsx
import { Button, Modal } from "antd";
import FormBuilder from "../../utils/FormBuilder";
import useAddTeacherClassroom from "../../../hooks/useAddTeacherClassroom";

interface Props {
  teacherId: string;
}

function AddTeacherClassroom({ teacherId }: Props) {
  const {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    formConfig,
    handleSubmit,
    isLoading,
  } = useAddTeacherClassroom({ teacherId });

  return (
    <>
      <Button onClick={handleOpenModal} type="default">
        Add Classroom Assignment
      </Button>
      <Modal
        footer={null}
        title="Add Classroom Assignment"
        open={isModalOpen}
        onCancel={handleCloseModal}
      >
        <FormBuilder
          columns={2}
          formConfig={formConfig}
          onSubmit={handleSubmit}
          loading={isLoading}
        />
      </Modal>
    </>
  );
}

export default AddTeacherClassroom;
