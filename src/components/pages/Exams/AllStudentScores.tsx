// src/components/pages/studentScores/AllStudentScores.tsx
import { Table } from "antd";
import { studentScoresColumns } from "../../../tableColumns/studentScores";
import useAllStudentScores from "../../../hooks/useAllStudentScores";
// import Filters from "../../Filters";
import useFilters from "../../../hooks/useFilters";

interface Props {
  studentId: string;
}

function AllStudentScores({ studentId }: Props) {
  const {
    // resetFilters,
    termFilter,
    // classOptions,
    // handleClassChange,
    classFilter,
    termOption,
    // handleTermOptionChange,
    // termOptionOptions,
  } = useFilters();
  const {
    studentScores,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllStudentScores({
    studentId,
    termId: termFilter,
    classFilter,
    termFilter: termOption,
  });

  return (
    <>
      {/* <Filters
        onReset={resetFilters}
        classOptions={classOptions}
        classFilter={classFilter}
        classPlaceholder="Class"
        onClassChange={handleClassChange}
        termOption={termOption}
        onTermOptionChange={handleTermOptionChange}
        termOptionOptions={termOptionOptions}
      /> */}
      <Table
        size="small"
        loading={isLoading || isFetchingNextPage || isRefetching}
        columns={studentScoresColumns}
        dataSource={studentScores}
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

export default AllStudentScores;
