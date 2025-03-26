import { BorderInnerOutlined, HomeOutlined } from "@ant-design/icons";
import { studentsKeys } from "../../../constants/QUERY_KEYS";
import RefreshButton from "../../RefreshButton";
import AddNewStudent from "./AddNewStudent";
import AllStudents from "./AllStudents";
import { Breadcrumb, Button } from "antd";
import { Student } from "../../../types/db";
import useCsv from "../../../hooks/useCsv";
import { getTable } from "../../../helpers/apiFunctions";
import { CSVLink } from "react-csv";
import { Headers } from "react-csv/lib/core";

function Students() {
  const { data } = useCsv<Student[]>({
    queryFn: () => getTable<Student>("students"),
    queryKey: studentsKeys.getStudentsAll,
  });

  const headers: Headers = [
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
    { label: "Date of Birth", key: "date_of_birth" },
    { label: "Gender", key: "gender" },
    { label: "Admission Date", key: "admission_date" },
    { label: "Status", key: "status" },
    { label: "Nationality", key: "nationality" },
    { label: "Registration Number", key: "registration_number" },
  ];

  return (
    <>
      <Breadcrumb
        className="mb-5"
        items={[
          { href: "", title: <HomeOutlined /> },
          { href: "", title: <span className="uppercase">Students</span> },
        ]}
      />
      <div className="mb-5 flex space-x-3">
        <RefreshButton queryKey={studentsKeys.getStudents} />
        <AddNewStudent />
        {data && (
          <Button icon={<BorderInnerOutlined />}>
            <CSVLink filename={"students.csv"} data={data} headers={headers}>
              Export to CSV
            </CSVLink>
          </Button>
        )}
      </div>
      <AllStudents />
    </>
  );
}

export default Students;
