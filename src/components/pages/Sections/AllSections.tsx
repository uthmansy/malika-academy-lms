// components/Sections/AllSections.tsx
import { Table } from "antd";
import useAllSections from "../../../hooks/useAllSections";
import { sectionAdminColumns } from "../../../tableColumns/sections";

function AllSections() {
  const {
    isLoading,
    sections,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllSections();

  return (
    <Table
      size="small"
      loading={isLoading || isFetchingNextPage || isRefetching}
      columns={sectionAdminColumns}
      dataSource={sections}
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

export default AllSections;
