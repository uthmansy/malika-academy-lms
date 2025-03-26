import { Table } from "antd";
import useFilters from "../../../hooks/useFilters";
import Filters from "../../Filters";
import useAllStudents from "../../../hooks/useAllStudents";
import { examsAdminColumns } from "../../../tableColumns/exams";

function AllStudents() {
  const {
    debouncedSearchTerm,
    searchTerm,
    dateFilter,
    handleSearchChange,
    handleDateChange,
    classroomFilter,
    classroomOptions,
    handleClassroomChange,
    resetFilters,
  } = useFilters();

  const {
    isLoading,
    students,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllStudents({
    debouncedSearchTerm,
    dateFilter,
    classroomFilter,
  });

  return (
    <>
      <Filters
        onSearchChange={handleSearchChange}
        searchTerm={searchTerm}
        onDateChange={handleDateChange}
        classroomFilter={classroomFilter}
        classroomOptions={classroomOptions}
        onClassroomChange={handleClassroomChange}
        onReset={resetFilters}
      />
      <Table
        size="small"
        loading={isLoading || isFetchingNextPage || isRefetching}
        columns={examsAdminColumns}
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

export default AllStudents;
