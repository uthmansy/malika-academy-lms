import { useState } from "react";
import { App } from "antd";
import { useMutation, useQueryClient } from "react-query";

import useAuthStore from "../store/auth";
import { Payrolls, UpdatePayrolls } from "../types/db"; // Assuming these types exist
import { payPayroll } from "../helpers/apiFunctions"; // Assuming this is the API function for payroll payment

interface Props {
  payroll: Payrolls;
}

interface HookReturn {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleSubmit: (resolve: (value: unknown) => void) => void;
  isLoading: boolean;
}

function usePayPayroll({ payroll }: Props): HookReturn {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { userProfile } = useAuthStore();

  const { mutate: handleSubmit, isLoading } = useMutation({
    mutationFn: async (resolve: (value: unknown) => void) => {
      try {
        const payload: UpdatePayrolls = {
          paid_by: userProfile?.username,
          status: "paid",
          id: payroll.id,
        };
        await payPayroll(payload);
        resolve("paid");
      } catch (error) {
        if (error instanceof Error) {
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
      message.success("Payroll paid successfully");
      handleCloseModal();
      queryClient.invalidateQueries();
    },
  });

  return {
    isModalOpen,
    handleCloseModal,
    handleOpenModal,
    handleSubmit,
    isLoading,
  };
}

export default usePayPayroll;
