import { useState } from "react";
import { FieldConfig, SelectOption } from "../types/comps";
import { App } from "antd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addStudent,
  getAllClassrooms,
  getClassesAll,
} from "../helpers/apiFunctions";
import { classesKeys, classroomsKeys } from "../constants/QUERY_KEYS";
import { StudentsSchema } from "../zodSchemas/students";
import { ZodError } from "zod";
import { STREAMS } from "../constants/ENUMS";

function useAddNewStudent() {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: classrooms = [] } = useQuery({
    queryKey: classroomsKeys.getClassroomsAll,
    queryFn: getAllClassrooms,
    onError: () => message.error("Failed to load classrooms"),
  });
  const { data: classes = [] } = useQuery({
    queryKey: classesKeys.getClassesAll,
    queryFn: getClassesAll,
    onError: () => message.error("Failed to load classes"),
  });

  const classOptions: SelectOption[] = classes.map((item: any) => ({
    label: item.name,
    value: item.id,
  }));
  const classroomOptions: SelectOption[] = classrooms.map((item: any) => ({
    label: item.name,
    value: item.id,
  }));

  const formConfig: FieldConfig[] = [
    { name: "first_name", label: "First Name", type: "text", required: true },
    { name: "last_name", label: "Last Name", type: "text", required: true },
    {
      name: "date_of_birth",
      label: "Date of Birth",
      type: "date",
      required: true,
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
      ],
      required: true,
    },
    {
      name: "fee_discount",
      label: "Fee Discount (%)",
      type: "number",
      suffix: "%",
      required: true,
    },
    {
      name: "s_class_id",
      label: "Class",
      type: "select",
      options: classOptions,
      required: true,
    },
    {
      name: "classroom_id",
      label: "Classroom",
      type: "select",
      options: classroomOptions,
      required: false,
    },
    {
      name: "stream",
      label: "Stream",
      type: "select",
      required: true,
      options: STREAMS.map((item) => ({ label: item, value: item })) || [],
    },
    {
      name: "admission_date",
      label: "Admission Date",
      type: "date",
      required: true,
    },
    { name: "nationality", label: "Nationality", type: "text" },
    { name: "state_of_origin", label: "State of Origin", type: "text" },
    { name: "lga", label: "Local Government Area", type: "text" },
    { name: "medical_history", label: "Medical History", type: "textarea" },
  ];

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        values.date_of_birth = values.date_of_birth.format("YYYY-MM-DD");
        values.admission_date = values.admission_date.format("YYYY-MM-DD");
        values.status = "Active";
        await StudentsSchema.parseAsync(values);
        await addStudent(values);
      } catch (error) {
        if (error instanceof ZodError) {
          // Handle ZodError separately to extract and display validation errors
          console.error("Zod Validation failed:", error.errors);
          throw error; // Re-throw the ZodError to be caught by the onError handler
        } else if (error instanceof Error) {
          // Handle other types of errors
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
      message.success("Student added successfully");
      setIsModalOpen(false);
      queryClient.invalidateQueries();
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

export default useAddNewStudent;
