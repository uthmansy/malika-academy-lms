// src/hooks/useAllSubjects.ts
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getSubjects } from "../helpers/apiFunctions";
import { Subject } from "../types/db"; // Define a Subject interface in your types
import { App } from "antd";
import { subjectsKeys } from "../constants/QUERY_KEYS";
import { useEffect } from "react";

interface HookReturn {
  subjects: Subject[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<Subject[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

function useAllSubjects(): HookReturn {
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }) => {
    const subjects = await getSubjects(pageParam);
    return subjects;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(subjectsKeys.getSubjects, fetchData, {
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

  const subjects = data?.pages?.flatMap((page) => page) ?? [];

  return {
    subjects,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
}

export default useAllSubjects;
