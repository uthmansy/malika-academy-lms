import { Tabs, TabsProps } from "antd";
import Students from "../Students";
import StudentsRecords from "../studentsRecords";
import TerminalResults from "../TerminalResults";

function StudentsSection() {
  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: "Students",
      children: <Students />,
    },
    // {
    //   key: "2",
    //   label: "Exams",
    //   children: <Exams />,
    // },
    {
      key: "2",
      label: "Students Records",
      children: <StudentsRecords />,
    },
    {
      key: "3",
      label: "Terminal Results",
      children: <TerminalResults />,
    },
  ];
  return <Tabs size="large" defaultActiveKey="1" items={tabs} />;
}

export default StudentsSection;
