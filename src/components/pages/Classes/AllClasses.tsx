// src/components/classes/AllClasses.tsx
import { Table } from "antd";
import { classesAdminColumns } from "../../../tableColumns/classes";
import useAllClasses from "../../../hooks/useAllClasses";

function AllClasses() {
  const {
    isLoading,
    classes,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllClasses();

  return (
    <>
      <Table
        size="small"
        loading={isLoading || isFetchingNextPage || isRefetching}
        columns={classesAdminColumns}
        dataSource={classes}
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

export default AllClasses;
