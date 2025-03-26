// src/components/subjects/AllSubjects.tsx
import { Table } from "antd";
import { subjectsAdminColumns } from "../../../tableColumns/subjects"; // Define table columns for subjects
import useAllSubjects from "../../../hooks/useAllSubjects"; // Hook to fetch subject data

function AllSubjects() {
  const {
    isLoading,
    subjects,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllSubjects();

  return (
    <Table
      size="small"
      loading={isLoading || isFetchingNextPage || isRefetching}
      columns={subjectsAdminColumns}
      dataSource={subjects}
      pagination={false} // Disable built‑in pagination
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
  );
}

export default AllSubjects;
