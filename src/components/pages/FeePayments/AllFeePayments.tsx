// AllFeePayments.tsx
import { Table } from "antd";
import useFilters from "../../../hooks/useFilters";
import Filters from "../../Filters";
import useAllStudentsRecords from "../../../hooks/useAllStudentsRecords";
import { useStudentsRecordsColumns } from "../../../tableColumns/studentsRecords";

function AllFeePayments() {
  const {
    debouncedSearchTerm,
    searchTerm,
    handleSearchChange,
    resetFilters,
    classroomFilter,
    classroomOptions,
    handleClassroomChange,
  } = useFilters();

  // const {
  //   isLoading,
  //   feePayments,
  //   fetchNextPage,
  //   isFetchingNextPage,
  //   isRefetching,
  // } = useAllFeePayments({
  //   debouncedSearchTerm,
  //   dateFilter,
  // });

  const {
    isLoading,
    students,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllStudentsRecords({
    // termFilter,
    debouncedSearchTerm,
    classroomFilter,
  });
  const { studentsRecordsColumns } = useStudentsRecordsColumns({
    ActionType: "Accountant",
  });

  return (
    <>
      <Filters
        onSearchChange={handleSearchChange}
        searchTerm={searchTerm}
        onReset={resetFilters}
        classroomOptions={classroomOptions}
        onClassroomChange={handleClassroomChange}
        classroomFilter={classroomFilter}
      />
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

export default AllFeePayments;
