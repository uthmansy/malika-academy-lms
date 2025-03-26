// src/components/terms/AllTerms.tsx
import { Table } from "antd";
import { termsAdminColumns } from "../../../tableColumns/terms"; // Define table columns for terms
import useAllTerms from "../../../hooks/useAllTerms"; // Hook to fetch terms

function AllTerms() {
  const { isLoading, terms, fetchNextPage, isFetchingNextPage, isRefetching } =
    useAllTerms();

  return (
    <Table
      size="small"
      loading={isLoading || isFetchingNextPage || isRefetching}
      columns={termsAdminColumns}
      dataSource={terms}
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

export default AllTerms;
