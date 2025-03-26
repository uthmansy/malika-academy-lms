import { Button, Form, Input, Modal } from "antd";
import useAddBlogPost from "../../../hooks/useAddBlogPost";
import TextEditor from "../../TextEditor";

function AddNew() {
  const {
    handleCloseModal,
    handleOpenModal,
    isModalOpen,
    form,
    handleSubmit,
    isLoading,
  } = useAddBlogPost(); // Updated hook

  return (
    <>
      <Button className="uppercase" onClick={handleOpenModal} type="default">
        + Add New
      </Button>
      <Modal
        footer={null}
        title="Add New Post" // Updated title
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={900}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input placeholder="Enter title here" />
          </Form.Item>
        </Form>
        <TextEditor isLoading={isLoading} onSave={handleSubmit} />
      </Modal>
    </>
  );
}

export default AddNew;
