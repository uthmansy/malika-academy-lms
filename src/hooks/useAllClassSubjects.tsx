// src/hooks/useAllClassSubjects.ts
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getClassSubjects } from "../helpers/apiFunctions";
import { ClassSubjectJoined } from "../types/db";
import { App } from "antd";
import { classSubjectKeys } from "../constants/QUERY_KEYS";
import { useEffect } from "react";

interface HookReturn {
  classSubjects: ClassSubjectJoined[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<ClassSubjectJoined[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

interface Props {
  classId: string;
}

function useAllClassSubjects({ classId }: Props): HookReturn {
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }) => {
    const classSubjects = await getClassSubjects({
      pageNumber: pageParam,
      classId,
    });
    return classSubjects;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(
    [classSubjectKeys.getClassSubjects, classId],
    fetchData,
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length === 50) {
          return allPages.length + 1;
        }
        return undefined;
      },
      onError: (error) => {
        message.error(error as string);
      },
    }
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const classSubjects = data?.pages?.flatMap((page) => page) ?? [];

  return {
    classSubjects,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
}

export default useAllClassSubjects;
