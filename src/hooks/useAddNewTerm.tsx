// src/hooks/useAddNewTerm.ts
import { useState } from "react";
import { FieldConfig, SelectOption } from "../types/comps";
import { App } from "antd";
import { useMutation, useQueryClient } from "react-query";
import TermSchema from "../zodSchemas/terms"; // Zod schema for terms
import { ZodError } from "zod";
import { addTerm } from "../helpers/apiFunctions"; // API function for adding a term
import { TERMS } from "../constants/ENUMS";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  formConfig: FieldConfig[];
  handleSubmit: (values: any) => void;
  isLoading: boolean;
}

function useAddNewTerm(): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const termOptions: SelectOption[] = TERMS.map((term) => ({
    label: term,
    value: term,
  }));

  const formConfig: FieldConfig[] = [
    {
      name: "name",
      label: "Term Name",
      type: "text",
      required: true,
    },
    {
      name: "term",
      label: "Term",
      type: "select",
      options: termOptions,
      required: true,
    },
    {
      name: "year",
      label: "Year",
      type: "number",
      required: true,
    },
    {
      name: "session",
      label: "Session",
      type: "text",
      required: true,
    },
    {
      name: "start_date",
      label: "Start Date",
      type: "date",
      required: true,
    },
    {
      name: "end_date",
      label: "End Date",
      type: "date",
      required: false,
    },
  ];

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        if (values.start_date)
          values.start_date = values.start_date.format("YYYY-MM-DD");
        if (values.end_date)
          values.end_date = values.end_date.format("YYYY-MM-DD");
        await TermSchema.parseAsync(values);
        await addTerm(values);
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
      message.success("Term added successfully");
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

export default useAddNewTerm;
