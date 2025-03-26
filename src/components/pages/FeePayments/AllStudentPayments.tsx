// AllFeePayments.tsx
import { Table } from "antd";
import useFilters from "../../../hooks/useFilters";
import Filters from "../../Filters";
import useAllFeePayments from "../../../hooks/useAllFeePayments";
import { feePaymentsColumns } from "../../../tableColumns/feePayment";
import { StudentClassroomsJoined } from "../../../types/db";

interface Props {
  record: StudentClassroomsJoined;
}

function AllStudentFeePayments({ record }: Props) {
  const {
    debouncedSearchTerm,
    searchTerm,
    handleSearchChange,
    resetFilters,
    classroomFilter,
    classroomOptions,
    handleClassroomChange,
  } = useFilters();

  const {
    isLoading,
    feePayments,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllFeePayments({
    debouncedSearchTerm,
    studentId: record.student_table.id,
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
        columns={feePaymentsColumns}
        dataSource={feePayments}
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

export default AllStudentFeePayments;
