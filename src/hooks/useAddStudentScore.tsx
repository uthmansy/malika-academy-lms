// src/hooks/useAddStudentScore.ts
import { useState } from "react";
import { FieldConfig, SelectOption } from "../types/comps";
import { App } from "antd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ZodError } from "zod";
import {
  addStudentScores,
  getAllClasses,
  getAllSubjects,
  getAllTerms,
} from "../helpers/apiFunctions";
import { StudentScoreSchema } from "../zodSchemas/studentScores";
import { classesKeys, subjectsKeys, termsKeys } from "../constants/QUERY_KEYS";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  formConfig: FieldConfig[];
  handleSubmit: (values: any) => void;
  isLoading: boolean;
}

interface Props {
  studentId: string;
}

function useAddStudentScore({ studentId }: Props): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  // Modal control
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Fetch subject options for the select field
  const { data: subjectData = [] } = useQuery({
    queryKey: [subjectsKeys.getStudentSubjects, studentId],
    queryFn: () => getAllSubjects(),
    onError: () => {
      message.error("Failed to load subjects");
    },
  });
  const { data: classData = [] } = useQuery({
    queryKey: classesKeys.getClassesAll,
    queryFn: getAllClasses,
    onError: () => {
      message.error("Failed to load classes");
    },
  });

  const { data: termData = [] } = useQuery({
    queryKey: termsKeys.getTermsAll,
    queryFn: getAllTerms,
    onError: () => {
      message.error("Failed to load terms");
    },
  });

  const subjectOptions: SelectOption[] = subjectData.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  const classOptions: SelectOption[] = classData.map((item: any) => ({
    label: item.name,
    value: item.id,
  }));
  const termOptions: SelectOption[] = termData.map((term) => ({
    label: `${term.session} ${term.term}`,
    value: term.id,
  }));

  // Build the form configuration using a dynamic field
  const formConfig: FieldConfig[] = [
    {
      name: "class_id",
      label: "Class",
      type: "select",
      options: classOptions,
      required: true,
    },
    {
      name: "term_id",
      label: "Term",
      type: "select",
      options: termOptions,
      required: true,
    },
    {
      name: "assessment_date",
      label: "Assessment Date",
      type: "date",
      required: true,
    },
    {
      name: "scores",
      label: "Scores",
      type: "dynamic",
      subFields: [
        {
          name: "subject_id",
          label: "Subject",
          type: "select",
          options: subjectOptions,
          required: true,
        },
        {
          name: "ca_1",
          label: "CA 1",
          type: "number",
          min: 0,
          max: 20,
        },
        {
          name: "ca_2",
          label: "CA 2",
          type: "number",
          min: 0,
          max: 20,
        },
        {
          name: "exam",
          label: "Exam",
          type: "number",
          min: 0,
          max: 60,
        },
      ],
      required: true,
    },
  ];

  // Mutation for bulk inserting student scores
  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        // Transform dynamic form values into the expected payload array
        const payload = values.scores.map((item: any) => ({
          student_id: studentId,
          term_id: values.term_id,
          subject_id: item.subject_id,
          class_id: values.class_id,
          ca_1: item.ca_1,
          ca_2: item.ca_2,
          exam: item.exam,
          assessment_date: values.assessment_date.format("YYYY-MM-DD"),
        }));

        // Validate the payload as an array using Zod
        await StudentScoreSchema.array().parseAsync(payload);

        // Call the API helper to insert the student scores
        await addStudentScores(payload);
      } catch (error) {
        if (error instanceof ZodError) {
          console.error("Zod Validation failed:", error.errors);
          throw error;
        } else if (error instanceof Error) {
          console.error("An unexpected error occurred:", error.message);
          throw new Error(error.message);
        } else {
          console.error("An unexpected error occurred:", error);
          throw new Error(error as string | undefined);
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
      message.success("Student score(s) added successfully");
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

export default useAddStudentScore;
