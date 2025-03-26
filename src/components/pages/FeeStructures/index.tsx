// src/components/pages/feeStructures/FeeStructures.tsx
import { BorderInnerOutlined, HomeOutlined } from "@ant-design/icons";
import { feeStructuresKeys } from "../../../constants/QUERY_KEYS";
import RefreshButton from "../../RefreshButton";
import AddNewFeeStructure from "./AddNewFeeStructure";
import AllFeeStructures from "./AllFeeStructures";
import { Breadcrumb, Button } from "antd";
import { FeeStructure } from "../../../types/db";
import useCsv from "../../../hooks/useCsv";
import { getTable } from "../../../helpers/apiFunctions";
import { CSVLink } from "react-csv";
import { Headers } from "react-csv/lib/core";

function FeeStructures() {
  // Fetch CSV data from fee_structures table
  const { data } = useCsv<FeeStructure[]>({
    queryFn: () => getTable<FeeStructure>("fee_structures"),
    queryKey: feeStructuresKeys.getCsv,
  });

  const headers: Headers = [
    { label: "Class", key: "class.name" },
    { label: "Term", key: "term.name" },
    { label: "Total Amount", key: "total_amount" },
    { label: "Created At", key: "created_at" },
  ];

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
            title: <span className="uppercase">Fee Structures</span>,
          },
        ]}
      />
      <div className="mb-5 flex space-x-3">
        <RefreshButton queryKey={feeStructuresKeys.getStructures} />
        <AddNewFeeStructure />
        {data && (
          <Button icon={<BorderInnerOutlined />}>
            <CSVLink
              filename={"fee_structures.csv"}
              data={data}
              headers={headers}
            >
              Export to CSV
            </CSVLink>
          </Button>
        )}
      </div>
      <AllFeeStructures />
    </>
  );
}

export default FeeStructures;
