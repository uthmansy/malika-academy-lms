// src/hooks/useEditClass.ts
import { useState } from "react";
import { FieldConfig, SelectOption } from "../types/comps"; // your custom form field config type
import { App, Form, FormInstance } from "antd";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { ZodError } from "zod";
import {
  getSections,
  getTeachersAll,
  getClassesAll,
} from "../helpers/apiFunctions";
import {
  classesKeys,
  sectionKeys,
  teachersKeys,
} from "../constants/QUERY_KEYS";
import { UpdateClassSchema } from "../zodSchemas/classes";
import { STREAMS } from "../constants/ENUMS";
import { updateClass } from "../helpers/apiFunctions";
import { ClassJoined } from "../types/db";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  formConfig: FieldConfig[];
  handleSubmit: (values: any) => void;
  isLoading: boolean;
  form: FormInstance<any>;
}

interface Props {
  classRecord: ClassJoined;
}

function useEditClass({ classRecord }: Props): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Fetch sections for the select options
  const { data: sectionsOptions } = useQuery({
    queryKey: sectionKeys.getSectionsAll,
    queryFn: async (): Promise<SelectOption[]> => {
      const sections = await getSections();
      return sections.map((section) => ({
        label: section.name,
        value: section.id,
      }));
    },
    onError: () => {
      message.error("Failed to load sections");
    },
  });

  const { data: classes = [] } = useQuery({
    queryKey: classesKeys.getClassesAll,
    queryFn: getClassesAll,
    onError: () => message.error("Failed to load classes"),
  });

  const classesOptions = classes.map((cls: any) => ({
    label: cls.name,
    value: cls.id,
  }));

  // Fetch teachers for the form master select options
  const { data: teachersOptions } = useQuery({
    queryKey: teachersKeys.getTeachersAll,
    queryFn: async (): Promise<SelectOption[]> => {
      const teachers = await getTeachersAll();
      return teachers.map((teacher) => ({
        label: `${teacher.first_name} ${teacher.last_name}`,
        value: teacher.id,
      }));
    },
    onError: () => {
      message.error("Failed to load teachers");
    },
  });

  // Configure form fields – adjust field types, labels, and rules as needed
  const formConfig: FieldConfig[] = [
    {
      name: "name",
      label: "Class Name",
      type: "text",
      required: false,
      defaultValue: classRecord.name,
    },
    {
      name: "section_id",
      label: "Section",
      type: "select",
      required: false,
      options: sectionsOptions || [],
      defaultValue: classRecord.section_id,
    },
    {
      name: "next_class_id",
      label: "Next Class",
      type: "select",
      required: false,
      options: classesOptions || [],
      defaultValue: classRecord.next_class_id,
    },
    {
      name: "stream",
      label: "Stream",
      type: "select",
      required: false,
      options: STREAMS.map((item) => ({ label: item, value: item })) || [],
      defaultValue: classRecord.stream,
    },
    {
      name: "form_master_id",
      label: "Form Master",
      type: "select",
      required: false,
      options: teachersOptions || [],
      defaultValue: classRecord.form_master_id,
    },
    {
      name: "rank",
      label: "rank (lowest class 1)",
      type: "number",
      required: false,
      defaultValue: classRecord.rank,
    },
  ];

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        // Ensure we include the record's id
        values.id = classRecord.id;
        const payload = await UpdateClassSchema.parseAsync(values);
        await updateClass(payload);
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
      message.error(error.message || "Failed to update Class");
    },
    onSuccess: () => {
      message.success("Class updated successfully");
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

export default useEditClass;
