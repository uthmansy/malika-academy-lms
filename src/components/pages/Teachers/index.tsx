// src/components/pages/teachers/Teachers.tsx
import { HomeOutlined, BorderInnerOutlined } from "@ant-design/icons";
import { teachersKeys } from "../../../constants/QUERY_KEYS";
import RefreshButton from "../../RefreshButton";
import AllTeachers from "./AllTeachers";
import { Breadcrumb, Button } from "antd";
import { Teacher } from "../../../types/db";
import useCsv from "../../../hooks/useCsv";
import { getTable } from "../../../helpers/apiFunctions";
import { CSVLink } from "react-csv";
import { Headers } from "react-csv/lib/core";

function Teachers() {
  const { data } = useCsv<Teacher[]>({
    queryFn: () => getTable<Teacher>("teachers"),
    queryKey: teachersKeys.getCsv,
  });

  const headers: Headers = [
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
    { label: "Email", key: "email" },
    { label: "Hire Date", key: "hire_date" },
    { label: "Termination Date", key: "termination_date" },
    { label: "Service Years", key: "service_years" },
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
            title: <span className="uppercase">Teachers</span>,
          },
        ]}
      />
      <div className="mb-5 flex space-x-3">
        <RefreshButton queryKey={teachersKeys.getTeachers} />
        {data && (
          <Button icon={<BorderInnerOutlined />}>
            <CSVLink filename="teachers.csv" data={data} headers={headers}>
              Export to CSV
            </CSVLink>
          </Button>
        )}
      </div>
      <AllTeachers />
    </>
  );
}

export default Teachers;
