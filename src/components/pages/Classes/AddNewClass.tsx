// src/components/classes/AddNewClass.tsx
import { Button, Modal } from "antd";
import useAddNewClass from "../../../hooks/useAddNewClass";
import FormBuilder from "../../utils/FormBuilder";

function AddNewClass() {
  const {
    handleOpenModal,
    handleCloseModal,
    isModalOpen,
    formConfig,
    handleSubmit,
    isLoading,
  } = useAddNewClass();

  return (
    <>
      <Button className="uppercase" onClick={handleOpenModal} type="default">
        + Add New
      </Button>
      <Modal
        footer={null}
        title="Add New Class"
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

export default AddNewClass;
