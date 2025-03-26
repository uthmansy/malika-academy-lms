// hooks/useAddNewSection.ts
import { useState } from "react";
import { FieldConfig } from "../types/comps";
import { App } from "antd";
import { useMutation, useQueryClient } from "react-query";
import SectionSchema from "../zodSchemas/sections";
import { addSection } from "../helpers/apiFunctions";
import { sectionKeys } from "../constants/QUERY_KEYS";

function useAddNewSection() {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const formConfig: FieldConfig[] = [
    {
      name: "name",
      label: "Section Name",
      type: "text",
      required: true,
    },
  ];

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        await SectionSchema.parseAsync(values);
        await addSection(values);
      } catch (error) {
        // Error handling similar to enrollment
      }
    },
    onSuccess: () => {
      message.success("Section added successfully");
      setIsModalOpen(false);
      queryClient.invalidateQueries(sectionKeys.getSections);
    },
    onError: () => {
      message.error("Failed to add section");
    },
  });

  return {
    isModalOpen,
    handleCloseModal: () => setIsModalOpen(false),
    handleOpenModal: () => setIsModalOpen(true),
    formConfig,
    handleSubmit,
    isLoading,
  };
}

export default useAddNewSection;
