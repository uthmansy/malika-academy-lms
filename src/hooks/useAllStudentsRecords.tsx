import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getAllStudentsRecords } from "../helpers/apiFunctions";
import { App } from "antd";
import { studentsKeys } from "../constants/QUERY_KEYS";
import { StudentClassroomsJoined } from "../types/db";

interface HookReturn {
  students: StudentClassroomsJoined[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<StudentClassroomsJoined[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

interface Props {
  debouncedSearchTerm?: string;
  dateFilter?: string | null;
  classroomFilter?: string | null;
  termFilter?: string | null;
}

function useAllStudentsRecords({
  dateFilter,
  debouncedSearchTerm,
  classroomFilter,
  termFilter,
}: Props): HookReturn {
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }) => {
    const students = await getAllStudentsRecords({
      pageParam,
      classroomFilter,
      termFilter,
      debouncedSearchTerm,
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
      termFilter,
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

export default useAllStudentsRecords;
