import { Post } from "../../../types/db";
import ViewPost from "./ViewPost";

interface Props {
  record: Post;
}

function TableActions({ record }: Props) {
  return (
    <div className="flex space-x-2">
      <ViewPost postId={record.id} />
    </div>
  );
}

export default TableActions;
