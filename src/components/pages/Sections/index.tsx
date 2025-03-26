// components/Sections/Sections.tsx
import { sectionKeys } from "../../../constants/QUERY_KEYS";
import RefreshButton from "../../RefreshButton";
import AddNewSection from "./AddNewSection";
import AllSections from "./AllSections";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

function Sections() {
  return (
    <>
      <Breadcrumb
        className="mb-5"
        items={[
          { href: "", title: <HomeOutlined /> },
          {
            href: "",
            title: <span className="uppercase">School Sections</span>,
          },
        ]}
      />
      <div className="mb-5 flex space-x-3">
        <RefreshButton queryKey={sectionKeys.getSections} />
        <AddNewSection />
      </div>
      <AllSections />
    </>
  );
}

export default Sections;
