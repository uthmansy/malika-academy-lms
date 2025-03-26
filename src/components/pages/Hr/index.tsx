import { Tabs, TabsProps } from "antd";
import Teachers from "../Teachers";

function Hr() {
  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: "Teachers",
      children: <Teachers />,
    },
  ];
  return <Tabs size="large" defaultActiveKey="1" items={tabs} />;
}

export default Hr;
