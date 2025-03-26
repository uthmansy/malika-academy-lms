// src/components/subjects/AddNewSubject.tsx
import { Button, Modal } from "antd";
import useAddNewSubject from "../../../hooks/useAddNewSubject"; // Custom hook for adding a subject
import FormBuilder from "../../utils/FormBuilder";

function AddNewSubject() {
  const {
    handleOpenModal,
    handleCloseModal,
    isModalOpen,
    formConfig,
    handleSubmit,
    isLoading,
  } = useAddNewSubject();

  return (
    <>
      <Button className="uppercase" onClick={handleOpenModal} type="default">
        + Add New
      </Button>
      <Modal
        footer={null}
        title="Add New Subject"
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

export default AddNewSubject;
