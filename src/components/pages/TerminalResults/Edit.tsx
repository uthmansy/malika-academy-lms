// components/Studentrecords/Edit.tsx
import useEditTerminalResult from "../../../hooks/useEditTerminalResult";
import FormBuilder from "../../utils/FormBuilder";
import { TerminalResultJoined } from "../../../types/db";
import { MdModeEdit } from "react-icons/md";
import { Button, Modal } from "antd";

interface Props {
  record: TerminalResultJoined;
}

function Edit({ record }: Props) {
  const {
    handleCloseModal,
    handleOpenModal,
    isModalOpen,
    formConfig,
    handleSubmit,
    isLoading,
  } = useEditTerminalResult({ record });

  return (
    <>
      <Button onClick={handleOpenModal} type="default">
        <MdModeEdit />
      </Button>
      <Modal
        footer={null}
        title="Edit Student record"
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={800}
      >
        <FormBuilder
          formConfig={formConfig}
          onSubmit={handleSubmit}
          loading={isLoading}
          columns={2}
        />
      </Modal>
    </>
  );
}

export default Edit;
