// src/components/terms/AddNewTerm.tsx
import { Button, Modal } from "antd";
import useAddNewTerm from "../../../hooks/useAddNewTerm"; // Custom hook for term creation
import FormBuilder from "../../utils/FormBuilder";

function AddNewTerm() {
  const {
    handleOpenModal,
    handleCloseModal,
    isModalOpen,
    formConfig,
    handleSubmit,
    isLoading,
  } = useAddNewTerm();

  return (
    <>
      <Button className="uppercase" onClick={handleOpenModal} type="default">
        + Add New
      </Button>
      <Modal
        footer={null}
        title="Add New Term"
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

export default AddNewTerm;
