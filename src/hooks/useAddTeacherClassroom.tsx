// src/hooks/useAddTeacherClassroom.ts
import { useState } from "react";
import { FieldConfig, SelectOption } from "../types/comps";
import { App } from "antd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ZodError } from "zod";
import { addTeacherClassroom, getAllClassrooms } from "../helpers/apiFunctions";
import { TeacherClassroomSchema } from "../zodSchemas/teacherClassroom";
import { classroomsKeys } from "../constants/QUERY_KEYS";

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

function useAddTeacherClassroom({ teacherId }: Props): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  // Modal control
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Fetch classroom options
  const { data: classroomData = [] } = useQuery({
    queryKey: classroomsKeys.getClassroomsAll,
    queryFn: getAllClassrooms,
    onError: () => {
      message.error("Failed to load classrooms");
    },
  });
  const classroomOptions: SelectOption[] = classroomData.map(
    (classroom: any) => ({
      label: classroom.name,
      value: classroom.id,
    })
  );

  const formConfig: FieldConfig[] = [
    {
      name: "assignments",
      label: "Classroom Assignments",
      type: "dynamic",
      subFields: [
        {
          name: "classroom_id",
          label: "Classroom",
          type: "select",
          options: classroomOptions,
          required: true,
        },
      ],
      required: true,
    },
  ];

  // Mutation for bulk inserting teacher classroom assignments
  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        // Transform the dynamic field array into the desired payload array.
        const payload = values.assignments.map((item: any) => ({
          teacher_id: teacherId,
          classroom_id: item.classroom_id,
        }));

        // Validate each record using an array schema.
        await TeacherClassroomSchema.array().parseAsync(payload);

        // Call the API helper to insert the payload.
        await addTeacherClassroom(payload);
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
      message.success("Teacher classroom assignment(s) added successfully");
      handleCloseModal();
      queryClient.invalidateQueries(["teacherClassrooms"]);
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

export default useAddTeacherClassroom;
