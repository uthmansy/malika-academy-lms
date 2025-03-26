import { Tabs, TabsProps } from "antd";
import Enrollment from "../enrollment/index.tsx";

function Users() {
  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: "User Enrollment",
      children: <Enrollment />,
    },
  ];
  return <Tabs size="large" defaultActiveKey="1" items={tabs} />;
}

export default Users;
