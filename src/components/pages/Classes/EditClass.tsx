// src/components/studentScores/EditClass.tsx
import useEditClass from "../../../hooks/useEditClass";
import FormBuilder from "../../utils/FormBuilder";
import { MdModeEdit } from "react-icons/md";
import { Button, Modal } from "antd";
import { ClassJoined } from "../../../types/db";

interface Props {
  classRecord: ClassJoined;
}

function EditClass({ classRecord }: Props) {
  const {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    formConfig,
    handleSubmit,
    isLoading,
    form,
  } = useEditClass({ classRecord });

  return (
    <>
      <Button onClick={handleOpenModal} type="default">
        <MdModeEdit />
      </Button>
      <Modal
        footer={null}
        title={`Edit Class`}
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

export default EditClass;
