// useAddNewFeePayment.ts
import { useState } from "react";
import { FieldConfig, SelectOption } from "../types/comps";
import { App } from "antd";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ZodError } from "zod";
import {
  addFeePayment,
  getClassesAll,
  getTerms,
} from "../helpers/apiFunctions";
import { AddfeePaymentSchema } from "../zodSchemas/feePayments";
import { StudentClassroomsJoined } from "../types/db";
import { classesKeys } from "../constants/QUERY_KEYS";
import { PAYMENT_METHOD } from "../constants/ENUMS";

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  formConfig: FieldConfig[];
  handleSubmit: (values: any) => void;
  isLoading: boolean;
}

interface Props {
  record: StudentClassroomsJoined;
}

function useAddNewFeePayment({ record }: Props): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const { data: classes = [] } = useQuery({
    queryKey: classesKeys.getClassesAll,
    queryFn: getClassesAll,
    onError: () => message.error("Failed to load classes"),
  });

  const classOptions: SelectOption[] = classes.map((item: any) => ({
    label: item.name,
    value: item.id,
  }));

  const { data: terms } = useQuery<SelectOption[]>(
    "terms",
    async () => {
      const data = await getTerms();
      return data.map((term: any) => ({ label: term.name, value: term.id }));
    },
    { onError: () => message.error("Failed to load terms") }
  );

  // Payment method options (adjust as needed)
  const paymentMethodOptions: SelectOption[] = PAYMENT_METHOD.map((m) => ({
    label: m,
    value: m,
  }));

  const formConfig: FieldConfig[] = [
    {
      name: "p_class_id",
      label: "Class",
      type: "select",
      options: classOptions,
      required: true,
    },
    {
      name: "p_term_id",
      label: "Term",
      type: "select",
      options: terms,
      required: true,
    },
    {
      name: "p_amount",
      label: "Amount",
      type: "money",
      required: true,
    },
    {
      name: "p_payment_date",
      label: "Payment Date",
      type: "date",
      required: true,
    },
    {
      name: "p_method",
      label: "Payment Method",
      type: "select",
      options: paymentMethodOptions,
      required: true,
    },
    {
      name: "p_reference_number",
      label: "Reference Number",
      type: "text",
      required: false,
    },
  ];

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (values: any) => {
      try {
        // Validate data using zod schema
        values.p_payment_date = values.p_payment_date.format("YYYY-MM-DD");
        values.p_student_id = record.student_id;
        await AddfeePaymentSchema.parseAsync(values);
        await addFeePayment(values);
      } catch (error) {
        if (error instanceof ZodError) {
          console.error("Zod Validation failed:", error.errors);
          throw error;
        } else if (error instanceof Error) {
          console.error("An error occurred:", error.message);
          throw new Error(error.message);
        } else {
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
      message.success("Fee Payment added successfully");
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

export default useAddNewFeePayment;
