// src/components/classes/Classes.tsx
import RefreshButton from "../../RefreshButton";
import { classesKeys } from "../../../constants/QUERY_KEYS"; // e.g., { getClasses: 'getClasses' }
import AddNewClass from "./AddNewClass";
import AllClasses from "./AllClasses";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

function Classes() {
  return (
    <>
      <Breadcrumb
        className="mb-5"
        items={[
          {
            href: "",
            title: <HomeOutlined />,
          },
          {
            href: "",
            title: <span className="uppercase">Classes Management</span>,
          },
        ]}
      />
      <div className="mb-5 flex space-x-3">
        <RefreshButton queryKey={classesKeys.getClasses} />
        <AddNewClass />
      </div>
      <AllClasses />
    </>
  );
}

export default Classes;
