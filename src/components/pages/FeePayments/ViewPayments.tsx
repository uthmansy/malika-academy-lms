// FeePayments.tsx
import { HomeOutlined } from "@ant-design/icons";
import { feePaymentsKeys } from "../../../constants/QUERY_KEYS";
import RefreshButton from "../../RefreshButton";
import AddNewFeePayment from "./AddNewFeePayment";
import { Breadcrumb, Button, Modal } from "antd";
import { StudentClassroomsJoined } from "../../../types/db";
import { useState } from "react";
import AllStudentFeePayments from "./AllStudentPayments";

interface Props {
  record: StudentClassroomsJoined;
}

function ViewPayments({ record }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button className="uppercase" onClick={handleOpenModal} type="default">
        Payments
      </Button>
      <Modal
        footer={null}
        title={`Payments for ${record.student_table.first_name} ${record.student_table.last_name}`} // Updated title
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={800}
      >
        <Breadcrumb
          className="mb-5"
          items={[
            { href: "", title: <HomeOutlined /> },
            {
              href: "",
              title: <span className="uppercase">Fee Payments</span>,
            },
          ]}
        />
        <div className="mb-5 flex space-x-3">
          <RefreshButton queryKey={feePaymentsKeys.getPayments} />
          <AddNewFeePayment record={record} />
        </div>
        <AllStudentFeePayments record={record} />
      </Modal>
    </>
  );
}

export default ViewPayments;
