import { useQuery } from "react-query";
import { studentScoreKeys, termsKeys } from "../constants/QUERY_KEYS";
import { getCurrentTerm, getIsRecordComplete } from "../helpers/apiFunctions";
import { App } from "antd";
import { Term } from "../types/db";

interface Props {
  studentId: string;
}

interface HookReturn {
  currentTerm: Term | undefined;
  isComplete: boolean | undefined;
  isLoading: boolean;
  isLoadingCurrentTerm: boolean;
}
function useRecordCompleteStatus({ studentId }: Props): HookReturn {
  const { message } = App.useApp();

  // First query: Get current term
  const { data: currentTerm, isLoading: isLoadingCurrentTerm } = useQuery(
    [termsKeys.getCurrentTerm, studentId], // Use different key
    {
      queryFn: getCurrentTerm,
      onError: () => {
        message.error("Error getting Current Term");
      },
    }
  );

  // Second query: Only runs when currentTerm is available
  const { data: isComplete, isLoading } = useQuery(
    [studentScoreKeys.recordComplete, studentId, currentTerm?.id], // Include term ID in key
    {
      queryFn: () =>
        getIsRecordComplete({
          studentId,
          termId: currentTerm!.id, // Non-null assertion safe because of enabled condition
        }),
      enabled: Boolean(currentTerm?.id), // Only enable when term ID exists
      onError: () => {
        message.error("Error checking record completion status");
      },
    }
  );

  return { currentTerm, isComplete, isLoadingCurrentTerm, isLoading };
}

export default useRecordCompleteStatus;
