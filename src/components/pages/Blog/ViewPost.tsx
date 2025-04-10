import { Button, Empty, Modal, Spin } from "antd";
import useViewPost from "../../../hooks/useViewPost";

interface Props {
  postId: string;
}

function ViewPost({ postId }: Props) {
  const { handleCloseModal, handleOpenModal, isLoading, isModalOpen, post } =
    useViewPost({ postId });
  return (
    <>
      <Button className="uppercase" onClick={handleOpenModal} type="default">
        View Post
      </Button>
      <Modal
        footer={null}
        title="Add New Post" // Updated title
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={900}
      >
        {isLoading ? (
          <div className="flex h-96 items-center justify-center">
            <Spin />
          </div>
        ) : post ? (
          <>
            {post.feature_image_url && (
              <img
                src={post.feature_image_url}
                className="aspect-video object-cover"
              />
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </>
        ) : (
          <Empty />
        )}
      </Modal>
    </>
  );
}

export default ViewPost;
