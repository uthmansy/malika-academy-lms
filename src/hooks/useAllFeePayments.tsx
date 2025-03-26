// useAllFeePayments.ts
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "react-query";
import { getAllFeePayments } from "../helpers/apiFunctions";
import { FeePaymentJoined } from "../types/db";
import { App } from "antd";
import { feePaymentsKeys } from "../constants/QUERY_KEYS";

interface HookReturn {
  feePayments: FeePaymentJoined[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<FeePaymentJoined[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

interface Props {
  debouncedSearchTerm?: string;
  dateFilter?: string | null;
  studentId: string;
}

function useAllFeePayments({
  dateFilter,
  debouncedSearchTerm,
  studentId,
}: Props): HookReturn {
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }) => {
    const feePayments = await getAllFeePayments({
      pageParam,
      dateFilter,
      debouncedSearchTerm,
      studentId,
    });
    return feePayments;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery(
    [feePaymentsKeys.getPayments, dateFilter, debouncedSearchTerm, studentId],
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

  const feePayments = data?.pages.flatMap((page) => page);

  return {
    feePayments: feePayments || [],
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isRefetching,
  };
}

export default useAllFeePayments;
