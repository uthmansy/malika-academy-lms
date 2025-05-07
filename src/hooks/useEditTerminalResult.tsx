// hooks/useEditTerminalResult.ts
import { useState } from "react";
import { FieldConfig } from "../types/comps";
import { App } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { ZodError } from "zod";
import { updateTerminalResult } from "../helpers/apiFunctions";
import { TerminalResultJoined } from "../types/db";
import { UpdateTerminalResultSchema } from "../zodSchemas/terminalResult";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  formConfig: FieldConfig[];
  handleSubmit: (values: any) => void;
  isLoading: boolean;
}

interface Prop {
  record: TerminalResultJoined | undefined;
}

function useEditTerminalResult({ record }: Prop): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const formConfig: FieldConfig[] = [
    {
      name: "attentiveness",
      label: "Attentiveness",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.attentiveness,
    },
    {
      name: "honesty",
      label: "Honesty",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.honesty,
    },
    {
      name: "neatness",
      label: "Neatness",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.neatness,
    },
    {
      name: "politeness",
      label: "Politeness",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.politeness,
    },
    {
      name: "punctuality",
      label: "Punctuality",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.punctuality,
    },
    {
      name: "relationship_with_others",
      label: "Relationship with Others",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.relationship_with_others,
    },
    {
      name: "club_society",
      label: "Club / Society",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.club_society,
    },
    {
      name: "drawing_and_painting",
      label: "Drawing and Painting",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.drawing_and_painting,
    },
    {
      name: "hand_writing",
      label: "Hand Writing",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.hand_writing,
    },
    {
      name: "hobbies",
      label: "Hobbies",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.hobbies,
    },
    {
      name: "speech_fluency",
      label: "Speech Fluency",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.speech_fluency,
    },
    {
      name: "sport_and_game",
      label: "Sport and Game",
      type: "number",
      max: 5,
      required: false,
      defaultValue: record?.sport_and_game,
    },
    {
      name: "class_teacher_remarks",
      label: "Class Teacher Remarks",
      type: "text",
      required: false,
      defaultValue: record?.class_teacher_remarks,
    },
    {
      name: "head_teacher_remarks",
      label: "Head Teacher Remarks",
      type: "text",
      required: false,
      defaultValue: record?.head_teacher_remarks,
    },
  ];

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        values.id = record?.id;
        const payload = await UpdateTerminalResultSchema.parseAsync(values);
        await updateTerminalResult(payload);
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
      message.error(error.message || "Failed to update student record");
    },
    onSuccess: () => {
      message.success("Student record updated successfully");
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

export default useEditTerminalResult;
