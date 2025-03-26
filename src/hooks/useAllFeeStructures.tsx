// src/hooks/useAllFeeStructures.ts
import {
  useInfiniteQuery,
  InfiniteQueryObserverResult,
  FetchNextPageOptions,
} from "react-query";
import { getAllFeeStructures } from "../helpers/apiFunctions";
import { FeeStructureJoined } from "../types/db";
import { App } from "antd";
import { feeStructuresKeys } from "../constants/QUERY_KEYS";

interface HookReturn {
  feeStructures: FeeStructureJoined[];
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<FeeStructureJoined[], unknown>>;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  isRefetching: boolean;
}

function useAllFeeStructures(): HookReturn {
  const { message } = App.useApp();

  const fetchData = async ({ pageParam = 1 }) => {
    return await getAllFeeStructures({ pageParam });
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery([feeStructuresKeys.getStructures], fetchData, {
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 50) {
        return allPages.length + 1;
      }
      return undefined;
    },
    onError: (error) => {
      message.error(
        typeof error === "string" ? error : "Failed to fetch fee structures"
      );
    },
  });

  const feeStructures = data?.pages.flatMap((page) => page) || [];

  return {
    feeStructures,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  };
}

export default useAllFeeStructures;
