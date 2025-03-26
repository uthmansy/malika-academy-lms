// src/components/terms/Terms.tsx
import RefreshButton from "../../RefreshButton";
import { termsKeys } from "../../../constants/QUERY_KEYS"; // Ensure you define termsKeys in your QUERY_KEYS
import AddNewTerm from "./AddNewTerm";
import AllTerms from "./AllTerms";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

function Terms() {
  return (
    <>
      <Breadcrumb
        className="mb-5"
        items={[
          { href: "", title: <HomeOutlined /> },
          {
            href: "",
            title: <span className="uppercase">Term Management</span>,
          },
        ]}
      />
      <div className="mb-5 flex space-x-3">
        <RefreshButton queryKey={termsKeys.getTerms} />
        <AddNewTerm />
      </div>
      <AllTerms />
    </>
  );
}

export default Terms;
