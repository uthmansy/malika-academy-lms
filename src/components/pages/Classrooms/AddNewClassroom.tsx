// src/components/classrooms/AddNewClassroom.tsx
import { Button, Modal } from "antd";
import useAddNewClassroom from "../../../hooks/useAddNewClassroom";
import FormBuilder from "../../utils/FormBuilder";

function AddNewClassroom() {
  const {
    handleOpenModal,
    handleCloseModal,
    isModalOpen,
    formConfig,
    handleSubmit,
    isLoading,
  } = useAddNewClassroom();

  return (
    <>
      <Button className="uppercase" onClick={handleOpenModal} type="default">
        + Add New
      </Button>
      <Modal
        footer={null}
        title="Add New Classroom"
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

export default AddNewClassroom;
