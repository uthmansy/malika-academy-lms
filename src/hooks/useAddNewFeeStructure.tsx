// src/hooks/useAddNewFeeStructure.ts
import { useState } from "react";
import { FieldConfig, SelectOption } from "../types/comps";
import { App } from "antd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addFeeStructure, getClasses, getTerms } from "../helpers/apiFunctions";
import { FeeStructureSchema } from "../zodSchemas/feeStructures";

interface FeeStructureFormValues {
  class_id: string;
  term_id: string;
  total_amount: number;
}

function useAddNewFeeStructure() {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Fetch classes for the select field
  const { data: classes } = useQuery<SelectOption[]>(
    "classes",
    async () => {
      const data = await getClasses();
      return data.map((cls: any) => ({ label: cls.name, value: cls.id }));
    },
    { onError: () => message.error("Failed to load classes") }
  );

  // Fetch terms for the select field
  const { data: terms } = useQuery<SelectOption[]>(
    "terms",
    async () => {
      const data = await getTerms();
      return data.map((term: any) => ({ label: term.name, value: term.id }));
    },
    { onError: () => message.error("Failed to load terms") }
  );

  const formConfig: FieldConfig[] = [
    {
      name: "class_id",
      label: "Class",
      type: "select",
      options: classes || [],
      required: true,
    },
    {
      name: "term_id",
      label: "Term",
      type: "select",
      options: terms || [],
      required: true,
    },
    {
      name: "total_amount",
      label: "Total Amount",
      type: "money",
      required: true,
    },
  ];

  const { mutate: handleSubmit, isLoading } = useMutation(
    async (values: FeeStructureFormValues) => {
      // Validate using Zod schema
      await FeeStructureSchema.parseAsync(values);
      await addFeeStructure(values);
    },
    {
      onError: (error) => {
        if (error instanceof Error) message.error(error.message);
        else message.error("An error occurred");
      },
      onSuccess: () => {
        message.success("Fee Structure added successfully");
        queryClient.invalidateQueries();
        handleCloseModal();
      },
    }
  );

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    formConfig,
    handleSubmit,
    isLoading,
  };
}

export default useAddNewFeeStructure;
