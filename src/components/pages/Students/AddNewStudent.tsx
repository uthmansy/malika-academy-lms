import { Button, Modal } from "antd";
import useAddNewStudent from "../../../hooks/useAddNewStudent";
import FormBuilder from "../../utils/FormBuilder";

function AddNewStudent() {
  const {
    handleCloseModal,
    handleOpenModal,
    isModalOpen,
    formConfig,
    handleSubmit,
    isLoading,
  } = useAddNewStudent();

  return (
    <>
      <Button className="uppercase" onClick={handleOpenModal} type="default">
        + Add New Student
      </Button>
      <Modal
        footer={null}
        title="Add New Student"
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={600}
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

export default AddNewStudent;
