// useAllTeacherClassrooms.ts
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getTeacherClassrooms } from "../helpers/apiFunctions";
import { TeacherClassroomJoined } from "../types/db";
import { App } from "antd";
import { teacherClassroomKeys } from "../constants/QUERY_KEYS";
import { useEffect } from "react";

interface HookReturn {
  teacherClassrooms: TeacherClassroomJoined[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<TeacherClassroomJoined[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

interface Props {
  teacherId: string;
}

function useAllTeacherClassrooms({ teacherId }: Props): HookReturn {
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }) => {
    const teacherClassrooms = await getTeacherClassrooms({
      pageNumber: pageParam,
      teacherId,
    });
    return teacherClassrooms;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(teacherClassroomKeys.getTeacherClassrooms, fetchData, {
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

  const teacherClassrooms = data?.pages?.flatMap((page) => page) ?? [];

  return {
    teacherClassrooms,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
}

export default useAllTeacherClassrooms;
