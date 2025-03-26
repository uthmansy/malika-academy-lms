// useAllTeacherSubjects.ts
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getTeacherSubjects } from "../helpers/apiFunctions";
import { TeacherSubjectJoined } from "../types/db";
import { App } from "antd";
import { teacherSubjectKeys } from "../constants/QUERY_KEYS";
import { useEffect } from "react";

interface HookReturn {
  teacherSubjects: TeacherSubjectJoined[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<TeacherSubjectJoined[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

interface Props {
  teacherId: string;
}

function useAllTeacherSubjects({ teacherId }: Props): HookReturn {
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }) => {
    const teacherSubjects = await getTeacherSubjects({
      pageNumber: pageParam,
      teacherId,
    });
    return teacherSubjects;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(
    [teacherSubjectKeys.getTeacherSubjects, teacherId],
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

  const teacherSubjects = data?.pages?.flatMap((page) => page) ?? [];

  return {
    teacherSubjects,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
}

export default useAllTeacherSubjects;
