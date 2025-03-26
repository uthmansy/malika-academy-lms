// src/components/pages/feeStructures/AllFeeStructures.tsx
import { Table } from "antd";
import useAllFeeStructures from "../../../hooks/useAllFeeStructures";
import { feeStructuresAdminColumns } from "../../../tableColumns/feeStructures";

function AllFeeStructures() {
  const {
    isLoading,
    feeStructures,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllFeeStructures();

  return (
    <Table
      size="small"
      loading={isLoading || isFetchingNextPage || isRefetching}
      columns={feeStructuresAdminColumns}
      dataSource={feeStructures}
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

export default AllFeeStructures;
