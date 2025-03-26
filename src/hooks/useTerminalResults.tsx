// hooks/useTerminalResults.ts
import {
  useInfiniteQuery,
  InfiniteQueryObserverResult,
  FetchNextPageOptions,
} from "react-query";
import { getTerminalResults } from "../helpers/apiFunctions";
import { terminalResultsKeys } from "../constants/QUERY_KEYS";
import { TerminalResultJoined } from "../types/db";

interface UseTerminalResultsProps {
  dateFilter?: string | null;
  classroomFilter?: string | null;
  termFilter?: string | null;
}

interface HookReturn {
  terminalResults: TerminalResultJoined[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<TerminalResultJoined[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

function useTerminalResults({
  dateFilter,
  classroomFilter,
  termFilter,
}: UseTerminalResultsProps): HookReturn {
  const fetchData = async ({ pageParam = 1 }) => {
    return await getTerminalResults({
      pageParam,
      dateFilter,
      classroomFilter,
      termFilter,
    });
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(
    [terminalResultsKeys.getResults, dateFilter, classroomFilter, termFilter],
    fetchData,
    {
      getNextPageParam: (lastPage, allPages) => {
        // If a full page of 50 is returned, assume there is another page.
        return lastPage.length === 50 ? allPages.length + 1 : undefined;
      },
      onError: (error) => {
        console.error("Error loading terminal results:", error);
      },
    }
  );

  const terminalResults = data?.pages.flatMap((page) => page) || [];
  return {
    terminalResults,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
}

export default useTerminalResults;
