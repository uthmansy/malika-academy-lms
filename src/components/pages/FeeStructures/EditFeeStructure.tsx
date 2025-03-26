// src/components/pages/feeStructures/EditFeeStructure.tsx
import useEditFeeStructure from "../../../hooks/useEditFeeStructure";
import FormBuilder from "../../utils/FormBuilder";
import { FeeStructure } from "../../../types/db";
import { MdModeEdit } from "react-icons/md";
import { Button, Modal } from "antd";

interface Props {
  feeStructure: FeeStructure;
}

function EditFeeStructure({ feeStructure }: Props) {
  const {
    handleCloseModal,
    handleOpenModal,
    isModalOpen,
    formConfig,
    handleSubmit,
    isLoading,
  } = useEditFeeStructure({ feeStructure });

  return (
    <>
      <Button onClick={handleOpenModal} type="default">
        <MdModeEdit />
      </Button>
      <Modal
        footer={null}
        title="Edit Fee Structure"
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={400}
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

export default EditFeeStructure;
