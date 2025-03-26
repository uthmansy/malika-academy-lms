import { Tabs, TabsProps } from "antd";
import FeeStructures from "../FeeStructures";
import FeePayments from "../FeePayments";

function Accounting() {
  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: "Fee Structures",
      children: <FeeStructures />,
    },
    {
      key: "2",
      label: "Payments",
      children: <FeePayments />,
    },
  ];
  return <Tabs size="large" defaultActiveKey="1" items={tabs} />;
}

export default Accounting;
