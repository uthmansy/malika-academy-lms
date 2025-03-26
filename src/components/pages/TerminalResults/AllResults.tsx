import { Breadcrumb, Button, Table } from "antd";
import { HomeOutlined, BorderInnerOutlined } from "@ant-design/icons";
import RefreshButton from "../../RefreshButton";
import { CSVLink } from "react-csv";
import useCsv from "../../../hooks/useCsv";
import { getTerminalResults } from "../../../helpers/apiFunctions";
import { terminalResultsKeys } from "../../../constants/QUERY_KEYS";
import Filters from "../../Filters";
import useTerminalResults from "../../../hooks/useTerminalResults";
import { terminalResultsColumns } from "../../../tableColumns/terminalResults";
import useFilters from "../../../hooks/useFilters";

function AllResults() {
  // CSV export hook (if you want to allow CSV export)
  const { data: csvData } = useCsv({
    queryFn: () => getTerminalResults({ pageParam: 1 }), // adjust filters if needed
    queryKey: terminalResultsKeys.getResults,
  });

  // Example filters (assumes you have a useFilters hook similar to your other pages)
  const {
    dateFilter,
    classroomFilter,
    classroomOptions,
    handleClassroomChange,
    resetFilters,
    termFilter,
    termOptions,
    handleTermChange,
  } = useFilters();

  const {
    terminalResults,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useTerminalResults({
    dateFilter,
    classroomFilter,
    termFilter,
    // You could add termFilter here if needed
  });

  return (
    <>
      <Breadcrumb
        className="mb-5"
        items={[
          { href: "", title: <HomeOutlined /> },
          {
            href: "",
            title: <span className="uppercase">Terminal Results</span>,
          },
        ]}
      />
      <div className="mb-5 flex space-x-3">
        <RefreshButton queryKey={terminalResultsKeys.getResults} />
        {csvData && (
          <Button icon={<BorderInnerOutlined />}>
            <CSVLink filename={"terminal_results.csv"} data={csvData}>
              Export to CSV
            </CSVLink>
          </Button>
        )}
      </div>
      <Filters
        classroomFilter={classroomFilter}
        classroomOptions={classroomOptions}
        onClassroomChange={handleClassroomChange}
        onReset={resetFilters}
        termFilter={termFilter}
        termOptions={termOptions}
        onTermChange={handleTermChange}
      />
      <Table
        size="small"
        loading={isLoading || isFetchingNextPage || isRefetching}
        columns={terminalResultsColumns}
        dataSource={terminalResults}
        pagination={false}
        scroll={{ y: 450, x: "max-content" }}
        bordered
        onScroll={(e) => {
          const target = e.target as HTMLDivElement;
          if (
            Math.round(target.scrollHeight - target.scrollTop) ===
            target.clientHeight
          ) {
            fetchNextPage();
          }
        }}
      />
    </>
  );
}

export default AllResults;
