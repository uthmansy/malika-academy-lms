// src/components/pages/teachers/AllTeachers.tsx
import { Table } from "antd";
import useAllTeachers from "../../../hooks/useAllTeachers";
import { teachersAdminColumns } from "../../../tableColumns/teachers";

function AllTeachers() {
  const {
    isLoading,
    teachers,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllTeachers();

  return (
    <Table
      size="small"
      loading={isLoading || isFetchingNextPage || isRefetching}
      columns={teachersAdminColumns}
      dataSource={teachers}
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

export default AllTeachers;
