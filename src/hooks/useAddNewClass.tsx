// src/hooks/useAddNewClass.ts
import { useState } from "react";
import { FieldConfig, SelectOption } from "../types/comps";
import { App } from "antd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ZodError } from "zod";
import { addClass, getSections, getTeachersAll } from "../helpers/apiFunctions";
import { sectionKeys, teachersKeys } from "../constants/QUERY_KEYS";
import ClassSchema from "../zodSchemas/classes";
import { STREAMS } from "../constants/ENUMS";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  formConfig: FieldConfig[];
  handleSubmit: (values: any) => void;
  isLoading: boolean;
}

function useAddNewClass(): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Fetch sections for the select options
  const { data: sectionsOptions } = useQuery({
    queryKey: sectionKeys.getSectionsAll,
    queryFn: async (): Promise<SelectOption[]> => {
      const sections = await getSections();
      return sections.map((section) => ({
        label: section.name,
        value: section.id,
      }));
    },
    onError: () => {
      message.error("Failed to load sections");
    },
  });

  // Fetch teachers for the form master select options
  const { data: teachersOptions } = useQuery({
    queryKey: teachersKeys.getTeachersAll,
    queryFn: async (): Promise<SelectOption[]> => {
      const teachers = await getTeachersAll();
      return teachers.map((teacher) => ({
        label: `${teacher.first_name} ${teacher.last_name}`,
        value: teacher.id,
      }));
    },
    onError: () => {
      message.error("Failed to load teachers");
    },
  });

  const formConfig: FieldConfig[] = [
    {
      name: "name",
      label: "Class Name",
      type: "text",
      required: true,
    },
    {
      name: "section_id",
      label: "Section",
      type: "select",
      required: true,
      options: sectionsOptions || [],
    },
    {
      name: "stream",
      label: "Stream",
      type: "select",
      required: true,
      options: STREAMS.map((item) => ({ label: item, value: item })) || [],
    },
    {
      name: "form_master_id",
      label: "Form Master",
      type: "select",
      required: false,
      options: teachersOptions || [],
    },
    {
      name: "rank",
      label: "rank (lowest class 1)",
      type: "number",
      required: true,
    },
  ];

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        await ClassSchema.parseAsync(values);
        await addClass(values);
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
      message.success("Class added successfully");
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

export default useAddNewClass;
