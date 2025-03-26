// hooks/useAllSections.ts
import { useInfiniteQuery } from "react-query";
import { getSections } from "../helpers/apiFunctions";
// import { App } from "antd";
import { sectionKeys } from "../constants/QUERY_KEYS";

function useAllSections() {
  //   const { message } = App.useApp();

  const { data, ...queryInfo } = useInfiniteQuery(
    sectionKeys.getSections,
    async ({ pageParam = 1 }) => {
      const sections = await getSections(pageParam);
      return sections;
    },
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === 50 ? allPages.length + 1 : undefined,
    }
  );

  return {
    sections: data?.pages.flat() || [],
    ...queryInfo,
  };
}

export default useAllSections;
