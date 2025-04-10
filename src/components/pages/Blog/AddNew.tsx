import { Button, Form, Input, Modal } from "antd";
import useAddBlogPost from "../../../hooks/useAddBlogPost";
import TextEditor from "../../TextEditor";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";

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
          <Form.Item
            label="Feature Image"
            name="featured_image"
            rules={[{ required: true, message: "Please upload an image" }]}
          >
            <Dragger
              name="featured_image"
              multiple={false}
              beforeUpload={() => {
                return false;
              }}
              listType="picture"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </Form.Item>
        </Form>
        <TextEditor isLoading={isLoading} onSave={handleSubmit} />
      </Modal>
    </>
  );
}

export default AddNew;
