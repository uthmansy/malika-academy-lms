// src/components/classrooms/AllClassrooms.tsx
import { Table } from "antd";
import { classroomsAdminColumns } from "../../../tableColumns/classrooms";
import useAllClassrooms from "../../../hooks/useAllClassrooms";

function AllClassrooms() {
  const {
    isLoading,
    classrooms,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllClassrooms();

  return (
    <Table
      size="small"
      loading={isLoading || isFetchingNextPage || isRefetching}
      columns={classroomsAdminColumns}
      dataSource={classrooms}
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
  );
}

export default AllClassrooms;
