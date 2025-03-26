// src/components/pages/classSubjects/AllClassSubjects.tsx
import { Table } from "antd";
import { classSubjectsAdminColumns } from "../../../tableColumns/classSubjects";
import useAllClassSubjects from "../../../hooks/useAllClassSubjects";

interface Props {
  classId: string;
}

function AllClassSubjects({ classId }: Props) {
  const {
    classSubjects,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllClassSubjects({ classId });

  return (
    <Table
      size="small"
      loading={isLoading || isFetchingNextPage || isRefetching}
      columns={classSubjectsAdminColumns}
      dataSource={classSubjects}
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

export default AllClassSubjects;
