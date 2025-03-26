// src/hooks/useAllTeachers.ts
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { App } from "antd";
import { Teacher } from "../types/db";
import { getAllTeachers } from "../helpers/apiFunctions";
import { teachersKeys } from "../constants/QUERY_KEYS";

interface HookReturn {
  teachers: Teacher[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<Teacher[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

function useAllTeachers(): HookReturn {
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }): Promise<Teacher[]> => {
    const teachers = await getAllTeachers({ pageParam });
    return teachers;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery([teachersKeys.getTeachers], fetchData, {
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 50) {
        return allPages.length + 1; // Increment page number
      }
      return undefined;
    },
    onError: (error) => {
      message.error(error as string);
    },
  });

  const teachers = data?.pages.flatMap((page) => page);

  return {
    teachers: teachers || [],
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isRefetching,
  };
}

export default useAllTeachers;
