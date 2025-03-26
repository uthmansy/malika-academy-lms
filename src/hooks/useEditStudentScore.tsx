// src/hooks/useEditStudentScore.ts
import { useState } from "react";
import { FieldConfig } from "../types/comps"; // your custom form field config type
import { App, Form, FormInstance } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { ZodError } from "zod";

// Import the Zod schema and API function
import { updateStudentScore } from "../helpers/apiFunctions";

// Import the StudentScore type (adjust the import as needed)
import { StudentScore } from "../types/db";
import { UpdateStudentScoreSchema } from "../zodSchemas/sttudentScore";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  formConfig: FieldConfig[];
  handleSubmit: (values: any) => void;
  isLoading: boolean;
  form: FormInstance<any>;
}

interface Prop {
  studentScore: StudentScore;
}

function useEditStudentScore({ studentScore }: Prop): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Configure form fields – adjust field types, labels, and rules as needed
  const formConfig: FieldConfig[] = [
    {
      name: "ca_1",
      label: "Ca 1",
      type: "number",
      required: false,
      defaultValue: studentScore.ca_1,
      rules: [
        {
          type: "number",
          min: 0,
          max: 20,
          message: "CA must be between 0 and 20",
        },
      ],
    },
    {
      name: "ca_2",
      label: "Ca 2",
      type: "number",
      required: false,
      defaultValue: studentScore.ca_2,
      rules: [
        {
          type: "number",
          min: 0,
          max: 20,
          message: "CA must be between 0 and 20",
        },
      ],
    },
    {
      name: "exam",
      label: "Exam",
      type: "number",
      required: false,
      defaultValue: studentScore.exam,
      rules: [
        {
          type: "number",
          min: 0,
          max: 60,
          message: "Exam must be between 0 and 100",
        },
      ],
    },
  ];

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        // Ensure we include the record's id
        values.id = studentScore.id;
        const payload = await UpdateStudentScoreSchema.parseAsync(values);
        await updateStudentScore(payload);
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
      message.error(error.message || "Failed to update student score");
    },
    onSuccess: () => {
      message.success("Student score updated successfully");
      handleCloseModal();
      form.resetFields();
      queryClient.invalidateQueries(); // refresh data queries
    },
  });

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    formConfig,
    handleSubmit,
    isLoading,
    form,
  };
}

export default useEditStudentScore;
