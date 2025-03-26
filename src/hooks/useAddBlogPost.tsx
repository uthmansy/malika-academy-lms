// src/hooks/useAddBlogPost.ts
import { useState } from "react";
import { App, Form, FormInstance } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { ZodError } from "zod";
import useAuthStore from "../store/auth";
import { PostSchema } from "../zodSchemas/post";
import { addPost } from "../helpers/apiFunctions";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  form: FormInstance<any>;
  handleSubmit: (content: string) => void;
  isLoading: boolean;
}

function useAddBlogPost(): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const { userProfile } = useAuthStore();

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (content: string) => {
      try {
        const title = form.getFieldValue("title");
        if (!title) {
          form.setFields([
            {
              name: "title",
              errors: ["Title is required!"],
            },
          ]);
          throw new Error("Title is required");
        } else {
          // Clear any existing error if title is not empty
          form.setFields([
            {
              name: "title",
              errors: [],
            },
          ]);
          const values = form.getFieldsValue();
          values.content = content;
          values.author = userProfile?.username;
          const payload = await PostSchema.parseAsync(values);
          await addPost(payload);
        }
      } catch (error) {
        if (error instanceof ZodError) {
          console.error("Validation failed:", error.errors);
          throw error;
        } else if (error instanceof Error) {
          console.error("Unexpected error:", error.message);
          throw new Error(error.message);
        } else {
          console.error("An unexpected error occurred:", error);
          throw new Error("An unexpected error occurred");
        }
      }
    },
    onError: (error) => {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error("An unexpected error occurred");
      }
    },
    onSuccess: () => {
      message.success("Post added successfully");
      handleCloseModal();
      queryClient.invalidateQueries();
    },
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Fetch sections for the select options

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    form,
    handleSubmit,
    isLoading,
  };
}

export default useAddBlogPost;
