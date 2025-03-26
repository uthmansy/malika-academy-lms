// FeePayments.tsx
import { HomeOutlined } from "@ant-design/icons";
import { feePaymentsKeys } from "../../../constants/QUERY_KEYS";
import RefreshButton from "../../RefreshButton";
import AllFeePayments from "./AllFeePayments";
import { Breadcrumb } from "antd";

function FeePayments() {
  return (
    <>
      <Breadcrumb
        className="mb-5"
        items={[
          { href: "", title: <HomeOutlined /> },
          { href: "", title: <span className="uppercase">Fee Payments</span> },
        ]}
      />
      <div className="mb-5 flex space-x-3">
        <RefreshButton queryKey={feePaymentsKeys.getPayments} />
      </div>
      <AllFeePayments />
    </>
  );
}

export default FeePayments;
