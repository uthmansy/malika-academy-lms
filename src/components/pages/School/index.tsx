import { Tabs, TabsProps } from "antd";
import Sections from "../Sections";
import Classes from "../Classes";
import Classrooms from "../Classrooms";
import Terms from "../Terms";
import Subjects from "../Subjects";

function School() {
  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: "Sections",
      children: <Sections />,
    },
    {
      key: "2",
      label: "Classes",
      children: <Classes />,
    },
    {
      key: "3",
      label: "Classrooms",
      children: <Classrooms />,
    },
    {
      key: "4",
      label: "Terms",
      children: <Terms />,
    },
    {
      key: "5",
      label: "Subjects",
      children: <Subjects />,
    },
  ];
  return <Tabs size="large" defaultActiveKey="1" items={tabs} />;
}

export default School;
