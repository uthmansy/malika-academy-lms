// src/hooks/useAllPosts.ts
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getPosts } from "../helpers/apiFunctions";
import { Post } from "../types/db";
import { App } from "antd";
import { postsKeys } from "../constants/QUERY_KEYS";

interface HookReturn {
  posts: Post[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<Post[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

function useAllPosts(): HookReturn {
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }) => {
    const posts = await getPosts(pageParam);
    return posts;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(postsKeys.getAllPosts, fetchData, {
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 50) {
        return allPages.length + 1;
      }
      return undefined;
    },
    onError: (error) => {
      message.error(error as string);
    },
  });

  const posts = data?.pages?.flatMap((page) => page) ?? [];

  return {
    posts,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
}

export default useAllPosts;
