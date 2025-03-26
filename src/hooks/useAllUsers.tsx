import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getUsers } from "../helpers/apiFunctions"; // Updated import for users
import { UserProfile } from "../types/db"; // Updated type import
import { App } from "antd";
import { userKeys } from "../constants/QUERY_KEYS"; // Updated query keys import
import { useEffect } from "react";

interface HookReturn {
  users: UserProfile[]; // Updated type
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<UserProfile[], unknown>>; // Updated type
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

function useAllUsers(): HookReturn {
  // Updated hook name
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }) => {
    const users = await getUsers(pageParam); // Updated function call
    return users;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(userKeys.getUsers, fetchData, {
    // Updated query key
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 50) {
        return allPages.length + 1; // Increment page number
      }
      return undefined; // No more pages to fetch
    },
    onError: (error) => {
      message.error(error as string);
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const users = data?.pages?.flatMap((page) => page) ?? []; // Updated variable

  return {
    users,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isRefetching,
  };
}

export default useAllUsers;
