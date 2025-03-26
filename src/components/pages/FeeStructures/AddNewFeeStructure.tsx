// src/components/pages/feeStructures/AddNewFeeStructure.tsx
import { Button, Modal } from "antd";
import useAddNewFeeStructure from "../../../hooks/useAddNewFeeStructure";
import FormBuilder from "../../utils/FormBuilder";

function AddNewFeeStructure() {
  const {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    formConfig,
    handleSubmit,
    isLoading,
  } = useAddNewFeeStructure();

  return (
    <>
      <Button className="uppercase" onClick={handleOpenModal} type="default">
        + Add New
      </Button>
      <Modal
        footer={null}
        title="Add New Fee Structure"
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

export default AddNewFeeStructure;
