// src/hooks/useAllStudentScores.ts
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getStudentScores } from "../helpers/apiFunctions";
import { StudentScoreJoined } from "../types/db";
import { App } from "antd";
import { studentScoreKeys } from "../constants/QUERY_KEYS";
import { useEffect } from "react";
import { useStudentsRecordsStore } from "../store/studentsExamRecords";

interface HookReturn {
  studentScores: StudentScoreJoined[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<StudentScoreJoined[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

interface Props {
  studentId: string;
  termId: string | null;
  termFilter: string | null;
  classFilter: string | null;
}

function useAllStudentScores({
  studentId,
  termId,
  classFilter,
  termFilter,
}: Props): HookReturn {
  const { message } = App.useApp();

  const { class: selectedClass } = useStudentsRecordsStore();

  const fetchData = async ({ pageParam = 1 }) => {
    const scores = await getStudentScores({
      pageNumber: pageParam,
      studentId,
      termId,
      classFilter: selectedClass?.id || null,
      termFilter,
    });
    return scores;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(
    [
      studentScoreKeys.getStudentScores,
      studentId,
      termId,
      classFilter,
      termFilter,
    ],
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

  const studentScores = data?.pages?.flatMap((page) => page) ?? [];

  return {
    studentScores,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
}

export default useAllStudentScores;
