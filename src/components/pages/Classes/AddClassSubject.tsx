// src/components/pages/classSubjects/AddClassSubject.tsx
import { Button, Modal } from "antd";
import FormBuilder from "../../utils/FormBuilder";
import useAddClassSubject from "../../../hooks/useAddClassSubject";

interface Props {
  classId: string;
}

function AddClassSubject({ classId }: Props) {
  const {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    formConfig,
    handleSubmit,
    isLoading,
  } = useAddClassSubject({ classId });

  return (
    <>
      <Button onClick={handleOpenModal} type="primary">
        + Add Subject
      </Button>
      <Modal
        footer={null}
        title="Add Class Subject"
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

export default AddClassSubject;
