// src/hooks/useAddTeacherSubject.ts
import { useState } from "react";
import { FieldConfig, SelectOption } from "../types/comps";
import { App } from "antd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ZodError } from "zod";
import { addTeacherSubjects, getAllSubjects } from "../helpers/apiFunctions";
import { TeacherSubjectSchema } from "../zodSchemas/teacherSubjects";
import { subjectsKeys } from "../constants/QUERY_KEYS";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  formConfig: FieldConfig[];
  handleSubmit: (values: any) => void;
  isLoading: boolean;
}

interface Props {
  teacherId: string;
}

function useAddTeacherSubject({ teacherId }: Props): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  // Modal control
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Fetch subject options
  const { data: subjectData = [] } = useQuery({
    queryKey: subjectsKeys.getSubjectsAll,
    queryFn: getAllSubjects,
    onError: () => {
      message.error("Failed to load subjects");
    },
  });
  const subjectOptions: SelectOption[] = subjectData.map((subject: any) => ({
    label: subject.name,
    value: subject.id,
  }));

  // Form configuration
  // The dynamic field "subjects" will allow adding many subjects at once.
  const formConfig: FieldConfig[] = [
    {
      name: "subjects",
      label: "Subjects",
      type: "dynamic",
      subFields: [
        {
          name: "subject_id",
          label: "Subject",
          type: "select",
          options: subjectOptions,
          required: true,
        },
      ],
      required: true,
    },
  ];

  // Mutation for bulk inserting teacher subject assignments
  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        // Transform the array of subjects into the desired payload
        const payload = values.subjects.map((item: any) => ({
          teacher_id: teacherId,
          subject_id: item.subject_id,
        }));

        // Validate the payload array
        await TeacherSubjectSchema.array().parseAsync(payload);

        // Call the API helper to insert the payload array
        await addTeacherSubjects(payload);
      } catch (error) {
        if (error instanceof ZodError) {
          console.error("Zod Validation failed:", error.errors);
          throw error;
        } else if (error instanceof Error) {
          console.error("An unexpected error occurred:", error.message);
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
      message.success("Teacher subject(s) added successfully");
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

export default useAddTeacherSubject;
