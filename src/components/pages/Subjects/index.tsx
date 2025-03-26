// src/components/subjects/Subjects.tsx
import RefreshButton from "../../RefreshButton";
import { subjectsKeys } from "../../../constants/QUERY_KEYS"; // Define subjectsKeys (e.g., getSubjects) in your constants
import AddNewSubject from "./AddNewSubject"; // Component to add a new subject
import AllSubjects from "./AllSubjects"; // Component displaying all subjects
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

function Subjects() {
  return (
    <>
      <Breadcrumb
        className="mb-5"
        items={[
          { href: "", title: <HomeOutlined /> },
          {
            href: "",
            title: <span className="uppercase">Subject Management</span>,
          },
        ]}
      />
      <div className="mb-5 flex space-x-3">
        <RefreshButton queryKey={subjectsKeys.getSubjects} />
        <AddNewSubject />
      </div>
      <AllSubjects />
    </>
  );
}

export default Subjects;
