// src/hooks/useAddNewClassroom.ts
import { useState } from "react";
import { FieldConfig } from "../types/comps";
import { App } from "antd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ZodError } from "zod";
import { addClassroom, getClassesAll } from "../helpers/apiFunctions";
import { classesKeys } from "../constants/QUERY_KEYS";
import ClassroomSchema from "../zodSchemas/classrooms";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  formConfig: FieldConfig[];
  handleSubmit: (values: any) => void;
  isLoading: boolean;
}

function useAddNewClassroom(): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Fetch classes for the select options (for the "class_id" field)
  const { data: classes = [] } = useQuery({
    queryKey: classesKeys.getClassesAll,
    queryFn: getClassesAll,
    onError: () => message.error("Failed to load classes"),
  });

  const classesOptions = classes.map((cls: any) => ({
    label: cls.name,
    value: cls.id,
  }));

  const formConfig: FieldConfig[] = [
    {
      name: "class_id",
      label: "Class",
      type: "select",
      required: true,
      options: classesOptions || [],
    },
    {
      name: "name",
      label: "Classroom Name",
      type: "text",
      required: true,
    },
    {
      name: "label",
      label: "Label",
      type: "select",
      options: ["A", "B", "C", "D", "E", "F", "G", "H"].map((i) => ({
        label: i,
        value: i,
      })),
      required: true,
    },
    {
      name: "capacity",
      label: "Capacity",
      type: "number",
      required: true,
    },
  ];

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        await ClassroomSchema.parseAsync(values);
        await addClassroom(values);
      } catch (error) {
        if (error instanceof ZodError) {
          console.error("Validation failed:", error.errors);
          throw error;
        } else if (error instanceof Error) {
          console.error("Unexpected error:", error.message);
          throw new Error(error.message);
        } else {
          console.error("An unexpected error occurred:", error);
          //@ts-ignore
          throw new Error(error);
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
      message.success("Classroom added successfully");
      handleCloseModal();
      queryClient.invalidateQueries();
    },
  });

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    formConfig,
    handleSubmit,
    isLoading,
  };
}

export default useAddNewClassroom;
