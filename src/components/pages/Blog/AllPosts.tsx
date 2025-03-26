import { Table } from "antd";
import useAllPosts from "../../../hooks/useAllPosts";
import { postsColumns } from "../../../tableColumns/posts";

function AllPosts() {
  const { isLoading, fetchNextPage, isFetchingNextPage, isRefetching, posts } =
    useAllPosts();

  return (
    <>
      <Table
        size="small"
        loading={isLoading || isFetchingNextPage || isRefetching}
        columns={postsColumns}
        dataSource={posts}
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

export default AllPosts;
