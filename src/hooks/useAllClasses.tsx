// src/hooks/useAllClasses.ts
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getClasses } from "../helpers/apiFunctions";
import { Class, ClassJoined } from "../types/db"; // Define an interface for Class in your types
import { App } from "antd";
import { classesKeys } from "../constants/QUERY_KEYS";

interface HookReturn {
  classes: ClassJoined[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<Class[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

function useAllClasses(): HookReturn {
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }) => {
    const classes = await getClasses(pageParam);
    return classes;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(classesKeys.getClasses, fetchData, {
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

  const classes = data?.pages?.flatMap((page) => page) ?? [];

  return {
    classes,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
}

export default useAllClasses;
