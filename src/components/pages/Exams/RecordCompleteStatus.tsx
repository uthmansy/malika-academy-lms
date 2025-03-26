import useRecordCompleteStatus from "../../../hooks/useRecordCompleteStatus";
import { StudentClassroomsJoined } from "../../../types/db";
import { Spin, Tag } from "antd";

interface Props {
  record: StudentClassroomsJoined;
}

function RecordCompleteStatus({ record }: Props) {
  const { isComplete, isLoading, isLoadingCurrentTerm } =
    useRecordCompleteStatus({
      studentId: record.student_id,
    });

  return (
    <div>
      {" "}
      {isLoading || isLoadingCurrentTerm ? (
        <Spin />
      ) : isComplete ? (
        <Tag color="#108ee9">Complete</Tag>
      ) : (
        <Tag color="#f50">Uncomplete</Tag>
      )}
    </div>
  );
}

export default RecordCompleteStatus;
