// src/components/classrooms/Classrooms.tsx
import RefreshButton from "../../RefreshButton";
import { classroomsKeys } from "../../../constants/QUERY_KEYS"; // Define classroomsKeys in your QUERY_KEYS
import AddNewClassroom from "./AddNewClassroom";
import AllClassrooms from "./AllClassrooms";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

function Classrooms() {
  return (
    <>
      <Breadcrumb
        className="mb-5"
        items={[
          { href: "", title: <HomeOutlined /> },
          {
            href: "",
            title: <span className="uppercase">Classrooms Management</span>,
          },
        ]}
      />
      <div className="mb-5 flex space-x-3">
        <RefreshButton queryKey={classroomsKeys.getClassrooms} />
        <AddNewClassroom />
      </div>
      <AllClassrooms />
    </>
  );
}

export default Classrooms;
