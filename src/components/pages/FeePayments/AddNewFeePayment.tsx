// AddNewFeePayment.tsx
import { Button, Modal } from "antd";
import useAddNewFeePayment from "../../../hooks/useAddNewFeePayment";
import FormBuilder from "../../utils/FormBuilder";
import { StudentClassroomsJoined } from "../../../types/db";

interface Props {
  record: StudentClassroomsJoined;
}

function AddNewFeePayment({ record }: Props) {
  const {
    handleCloseModal,
    handleOpenModal,
    isModalOpen,
    formConfig,
    handleSubmit,
    isLoading,
  } = useAddNewFeePayment({ record });

  return (
    <>
      <Button className="uppercase" onClick={handleOpenModal} type="default">
        + Add New Payment
      </Button>
      <Modal
        footer={null}
        title="Add New Fee Payment"
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

export default AddNewFeePayment;
