// AllTeacherClassrooms.tsx
import { Table } from "antd";
import { teacherClassroomsAdminColumns } from "../../../tableColumns/teacherClassrooms";
import useAllTeacherClassrooms from "../../../hooks/useAllTeacherClassrooms";

interface Props {
  teacherId: string;
}

function AllTeacherClassrooms({ teacherId }: Props) {
  const {
    teacherClassrooms,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllTeacherClassrooms({ teacherId });

  return (
    <Table
      size="small"
      loading={isLoading || isFetchingNextPage || isRefetching}
      columns={teacherClassroomsAdminColumns}
      dataSource={teacherClassrooms}
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

export default AllTeacherClassrooms;
