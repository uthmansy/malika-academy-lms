// AllTeacherSubjects.tsx
import { Table } from "antd";
import { teacherSubjectsAdminColumns } from "../../../tableColumns/teacherSubjects";
import useAllTeacherSubjects from "../../../hooks/useAllTeacherSubjects";

interface Props {
  teacherId: string;
}

function AllTeacherSubjects({ teacherId }: Props) {
  const {
    teacherSubjects,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllTeacherSubjects({ teacherId });

  return (
    <Table
      size="small"
      loading={isLoading || isFetchingNextPage || isRefetching}
      columns={teacherSubjectsAdminColumns}
      dataSource={teacherSubjects}
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

export default AllTeacherSubjects;
