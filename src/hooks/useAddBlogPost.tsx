// src/hooks/useAddBlogPost.ts
import { useState } from "react";
import { App, Form, FormInstance } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { ZodError } from "zod";
import useAuthStore from "../store/auth";
import { PostSchema } from "../zodSchemas/post";
import { addPost, uploadImage } from "../helpers/apiFunctions";

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
        const featured_image = form.getFieldValue("featured_image");
        const isLt300KB = featured_image?.file.size / 1024 < 300;

        if (!title) {
          form.setFields([
            {
              name: "title",
              errors: ["Title is required!"],
            },
          ]);
          throw new Error("Title is required");
        } else if (!featured_image) {
          form.setFields([
            {
              name: "featured_image",
              errors: ["Feature Image is required!"],
            },
          ]);
          throw new Error("Feature Image is required");
        } else if (!isLt300KB) {
          form.setFields([
            {
              name: "featured_image",
              errors: ["Image Must be less than 300kb"],
            },
          ]);
          throw new Error("Feature Image cannot be more than 300kb");
        } else {
          // Clear any existing error if title is not empty
          form.setFields([
            {
              name: "title",
              errors: [],
            },
            {
              name: "featured_image",
              errors: [],
            },
          ]);
          const values = form.getFieldsValue();
          values.content = content;
          if (!content) throw new Error("Content is Required");
          values.author = userProfile?.username;
          if (values.featured_image) {
            const data = await uploadImage(
              values.featured_image.file,
              "featured-post-images"
            );
            values.feature_image_path = data.filePath;
            values.feature_image_url = data.publicUrl;
          }
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
      if (error instanceof ZodError) {
        message.error(error.errors[0].message);
      } else if (error instanceof Error) {
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
