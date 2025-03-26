// useFilters.ts
import { useState, useEffect } from "react";
import { Dayjs } from "dayjs";
import { useQuery } from "react-query";
import { App } from "antd";
import { classesKeys, termsKeys } from "../constants/QUERY_KEYS";
import { getAllTerms, getClassesAll } from "../helpers/apiFunctions";
import { SelectOption } from "../types/comps";
import { TERMS } from "../constants/ENUMS";
import useClassroomOptions from "./useClassroomOptions";

interface FilterState {
  searchTerm: string;
  debouncedSearchTerm: string;
  dateFilter: string | null;
  classFilter: string | null;
  classroomFilter: string | null;
  statusFilter: string | null;
  termFilter: string | null;
  termOption: string | null;
}

interface FilterHandlers {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (date: Dayjs | null) => void;
  handleClassChange: (value: string | null) => void;
  handleClassroomChange: (value: string | null) => void;
  handleStatusChange: (value: string | null) => void;
  handleTermChange: (value: string | null) => void;
  handleTermOptionChange: (value: string | null) => void;
  resetFilters: () => void;
}

interface FilterOptions {
  classOptions: SelectOption[];
  classroomOptions: SelectOption[];
  statusOptions: SelectOption[];
  termOptions: SelectOption[];
  termOptionOptions: SelectOption[];
}

const DEBOUNCE_DELAY = 300;

function useFilters(): FilterState & FilterHandlers & FilterOptions {
  const { message } = App.useApp();
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    debouncedSearchTerm: "",
    dateFilter: null,
    classFilter: null,
    classroomFilter: null,
    statusFilter: null,
    termFilter: null,
    termOption: null,
  });

  // Fetch classes
  const { data: classesData = [] } = useQuery({
    queryKey: classesKeys.getClassesAll,
    queryFn: async () => {
      const data = await getClassesAll();
      return data;
    },
    onError: () => message.error("Failed to load Classes"),
  });

  const classes = classesData.map((classRecord) => ({
    label: classRecord.name,
    value: classRecord.id,
  }));

  // Fetch terms
  const { data: terms = [] } = useQuery({
    queryKey: termsKeys.getTermsAll,
    queryFn: getAllTerms,
    onError: () => message.error("Failed to load terms"),
  });

  // Status options
  const statusOptions = [
    { label: "All Statuses", value: "" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Graduated", value: "graduated" },
  ];

  // Classes options with "All" option
  const classOptions = [{ label: "All Classes", value: "" }, ...classes];

  // Term options with "All" option
  const termOptions = [
    { label: "All Terms", value: "" },
    ...terms.map((term: any) => ({
      label: `${term.session} ${term.term}`,
      value: term.id,
    })),
  ];

  // Term option Options with "All" option
  const termOptionOptions = [
    { label: "All", value: "" },
    ...TERMS.map((term) => ({
      label: term,
      value: term,
    })),
  ];

  // Debounce search term
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilters((prev) => ({
        ...prev,
        debouncedSearchTerm: prev.searchTerm,
      }));
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timeoutId);
  }, [filters.searchTerm]);

  // Handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      searchTerm: e.target.value,
    }));
  };

  const handleDateChange = (date: Dayjs | null) => {
    setFilters((prev) => ({
      ...prev,
      dateFilter: date?.format("YYYY-MM-DD") ?? null,
    }));
  };

  const handleClassChange = (value: string | null) => {
    setFilters((prev) => ({
      ...prev,
      classFilter: value || null,
    }));
  };
  const handleClassroomChange = (value: string | null) => {
    setFilters((prev) => ({
      ...prev,
      classroomFilter: value || null,
    }));
  };

  const handleStatusChange = (value: string | null) => {
    setFilters((prev) => ({
      ...prev,
      statusFilter: value || null,
    }));
  };

  const handleTermChange = (value: string | null) => {
    setFilters((prev) => ({
      ...prev,
      termFilter: value || null,
    }));
  };
  const handleTermOptionChange = (value: string | null) => {
    setFilters((prev) => ({
      ...prev,
      termOption: value || null,
    }));
  };

  const resetFilters = () => {
    setFilters({
      searchTerm: "",
      debouncedSearchTerm: "",
      dateFilter: null,
      classFilter: null,
      classroomFilter: null,
      statusFilter: null,
      termFilter: null,
      termOption: null,
    });
  };

  const { classroomOptions } = useClassroomOptions();

  return {
    ...filters,
    classroomOptions,
    classOptions,
    statusOptions,
    termOptions,
    handleTermOptionChange,
    termOptionOptions,
    handleSearchChange,
    handleDateChange,
    handleClassroomChange,
    handleClassChange,
    handleStatusChange,
    handleTermChange,
    resetFilters,
  };
}

export default useFilters;
