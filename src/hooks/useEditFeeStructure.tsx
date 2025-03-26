// src/hooks/useEditFeeStructure.ts
import { useState } from "react";
import { FieldConfig } from "../types/comps";
import { App } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { ZodError } from "zod";
import { UpdateFeeStructureSchema } from "../zodSchemas/feeStructures";
import { updateFeeStructure } from "../helpers/apiFunctions";
import { FeeStructure } from "../types/db";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  formConfig: FieldConfig[];
  handleSubmit: (values: any) => void;
  isLoading: boolean;
}

interface Props {
  feeStructure: FeeStructure;
}

function useEditFeeStructure({ feeStructure }: Props): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Form configuration – you may choose to populate select options dynamically.
  const formConfig: FieldConfig[] = [
    {
      name: "total_amount",
      label: "Total Amount",
      type: "money",
      required: false,
      defaultValue: feeStructure.total_amount,
    },
  ];

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        // Ensure the record ID is included
        values.id = feeStructure.id;
        const payload = await UpdateFeeStructureSchema.parseAsync(values);
        await updateFeeStructure(payload);
      } catch (error) {
        if (error instanceof ZodError) {
          console.error("Validation failed:", error.errors);
          throw error;
        }
        throw new Error(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    },
    onError: (error: Error) => {
      message.error(error.message || "Failed to update fee structure");
    },
    onSuccess: () => {
      message.success("Fee structure updated successfully");
      handleCloseModal();
      queryClient.invalidateQueries();
    },
  });

  return {
    isModalOpen,
    handleCloseModal,
    handleOpenModal,
    formConfig,
    handleSubmit,
    isLoading,
  };
}

export default useEditFeeStructure;
