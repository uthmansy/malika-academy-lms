import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getAllStudents } from "../helpers/apiFunctions";
import { App } from "antd";
import { studentsKeys } from "../constants/QUERY_KEYS";
import { Student } from "../types/db";
import useClassroomOptions from "./useClassroomOptions";

interface HookReturn {
  students: Student[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<Student[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

interface Props {
  debouncedSearchTerm?: string;
  dateFilter?: string | null;
  classroomFilter?: string | null;
}

function useAllStudents({
  dateFilter,
  debouncedSearchTerm,
  classroomFilter,
}: Props): HookReturn {
  const { message } = App.useApp();

  const { classroomOptions } = useClassroomOptions();

  const fetchData = async ({ pageParam = 1 }) => {
    const students = await getAllStudents({
      pageParam,
      dateFilter,
      debouncedSearchTerm,
      classroomFilter:
        classroomFilter || (classroomOptions[0]?.value as string | null),
    });
    return students;
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
      studentsKeys.getStudents,
      dateFilter,
      debouncedSearchTerm,
      classroomFilter,
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
        message.error(String(error));
      },
    }
  );

  const students = data?.pages.flatMap((page) => page);

  return {
    students: students || [],
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isRefetching,
  };
}

export default useAllStudents;
