import { useState } from "react";
import { App } from "antd";
import { useQuery } from "react-query";
import { getPostById } from "../helpers/apiFunctions"; // API function for adding a term
import { postsKeys } from "../constants/QUERY_KEYS";
import { Post } from "../types/db";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isLoading: boolean;
  post: Post | undefined;
}

interface Props {
  postId: string;
}

function useViewPost({ postId }: Props): HookReturn {
  const { message } = App.useApp();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const { data: post, isLoading } = useQuery(
    [postsKeys.getSinglePost, postId],
    {
      queryFn: async () => getPostById(postId),
      onError: () => {
        message.error("Error getting Post");
      },
    }
  );

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    isLoading,
    post,
  };
}

export default useViewPost;
