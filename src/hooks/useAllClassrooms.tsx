// src/hooks/useAllClassrooms.ts
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getClassrooms } from "../helpers/apiFunctions";
import { Classroom, ClassroomJoined } from "../types/db"; // Define a Classroom interface in your types
import { App } from "antd";
import { classroomsKeys } from "../constants/QUERY_KEYS";
import { useEffect } from "react";

interface HookReturn {
  classrooms: ClassroomJoined[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<Classroom[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

function useAllClassrooms(): HookReturn {
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }) => {
    const classrooms = await getClassrooms(pageParam);
    return classrooms;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(classroomsKeys.getClassrooms, fetchData, {
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  const classrooms = data?.pages?.flatMap((page) => page) ?? [];

  return {
    classrooms,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
}

export default useAllClassrooms;
