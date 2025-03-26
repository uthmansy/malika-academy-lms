import { Table } from "antd";
import { useStudentsRecordsColumns } from "../../../tableColumns/studentsRecords";
import useAllStudentsRecords from "../../../hooks/useAllStudentsRecords";

interface Props {
  classroomId: string | null | undefined;
}

function AllStudentsRecords({ classroomId }: Props) {
  const {
    isLoading,
    students,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllStudentsRecords({
    classroomFilter: classroomId,
    // termFilter,
  });

  const { studentsRecordsColumns } = useStudentsRecordsColumns({
    ActionType: "Teacher",
  });
  return (
    <>
      <Table
        size="small"
        loading={isLoading || isFetchingNextPage || isRefetching}
        columns={studentsRecordsColumns}
        dataSource={students}
        pagination={false}
        scroll={{ y: 450, x: "max-content" }}
        bordered
        onScroll={(e) => {
          const target = e.target as HTMLDivElement;
          if (
            Math.round(target.scrollHeight - target.scrollTop) ===
            target.clientHeight
          ) {
            fetchNextPage();
          }
        }}
      />
    </>
  );
}

export default AllStudentsRecords;
