// components/Filters.tsx
import { DatePicker, Input, Button, Select } from "antd";
import { Dayjs } from "dayjs";
import React from "react";
import { SelectOption } from "../types/comps";

interface FiltersProps {
  // Search filter
  searchTerm?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPlaceholder?: string;

  // Date filter
  dateFilter?: Dayjs | null;
  onDateChange?: (date: Dayjs | null) => void;

  // Item filter
  itemFilter?: string | null;
  onItemChange?: (value: string | null) => void;
  itemOptions?: SelectOption[];
  itemPlaceholder?: string;

  // Class filter
  classFilter?: string | null;
  onClassChange?: (value: string | null) => void;
  classOptions?: SelectOption[];
  classPlaceholder?: string;

  // Classroom filter
  classroomFilter?: string | null;
  onClassroomChange?: (value: string | null) => void;
  classroomOptions?: SelectOption[];
  classroomPlaceholder?: string;

  // Shift filter
  shiftFilter?: string | null;
  onShiftChange?: (value: string | null) => void;
  shiftOptions?: SelectOption[];
  shiftPlaceholder?: string;

  // Expense Category filter
  expenseCategoryFilter?: string | null;
  onExpenseCategoryChange?: (value: string | null) => void;
  expenseCategoryOptions?: SelectOption[];
  expenseCategoryPlaceholder?: string;

  // Term filter (new)
  termFilter?: string | null;
  onTermChange?: (value: string | null) => void;
  termOptions?: SelectOption[];
  termPlaceholder?: string;

  // Term filter (new)
  termOption?: string | null;
  onTermOptionChange?: (value: string | null) => void;
  termOptionOptions?: SelectOption[];
  termOptionPlaceHolder?: string;

  // Reset
  onReset?: () => void;
}

export default function Filters({
  // Search
  searchTerm,
  onSearchChange,
  searchPlaceholder = "Search...",

  // Date
  dateFilter,
  onDateChange,

  // Item
  itemFilter,
  onItemChange,
  itemOptions,
  itemPlaceholder = "Select item",

  // Class
  classFilter,
  onClassChange,
  classOptions,
  classPlaceholder = "Select class",

  // Classroom
  classroomFilter,
  onClassroomChange,
  classroomOptions,
  classroomPlaceholder = "Select classroom",

  // Shift
  shiftFilter,
  onShiftChange,
  shiftOptions,
  shiftPlaceholder = "Select shift",

  // Expense Category
  expenseCategoryFilter,
  onExpenseCategoryChange,
  expenseCategoryOptions,
  expenseCategoryPlaceholder = "Select category",

  // Term filter (new)
  termFilter,
  onTermChange,
  termOptions,
  termPlaceholder = "Select term name",

  // Term filter (new)
  termOption,
  onTermOptionChange,
  termOptionOptions,
  termOptionPlaceHolder = "Select term",

  // Reset
  onReset,
}: FiltersProps) {
  // Conditional rendering checks
  const shouldShowSearch = searchTerm !== undefined && onSearchChange;
  const shouldShowDate = onDateChange;
  const shouldShowItem =
    itemFilter !== undefined && onItemChange && itemOptions;
  const shouldShowClass =
    classFilter !== undefined && onClassChange && classOptions;
  const shouldShowClassroom =
    classroomFilter !== undefined && onClassroomChange && classroomOptions;
  const shouldShowShift =
    shiftFilter !== undefined && onShiftChange && shiftOptions;
  const shouldShowExpenseCategory =
    expenseCategoryFilter !== undefined &&
    onExpenseCategoryChange &&
    expenseCategoryOptions;
  const shouldShowTerm =
    termFilter !== undefined && onTermChange && termOptions;
  const shouldShowTermOption =
    termOption !== undefined && onTermOptionChange && termOptionOptions;

  return (
    <div className="mb-5 flex space-x-3">
      {onReset && (
        <Button className="uppercase" onClick={onReset}>
          Reset All Filters
        </Button>
      )}

      {shouldShowDate && (
        <DatePicker
          className="w-56"
          onChange={onDateChange}
          value={dateFilter}
          format="YYYY-MM-DD"
        />
      )}

      {shouldShowSearch && (
        <Input
          className="w-56"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder={searchPlaceholder}
          allowClear
        />
      )}

      {shouldShowItem && (
        <Select
          className="w-56"
          options={itemOptions}
          onChange={(value) => onItemChange(value || null)}
          value={itemFilter || undefined}
          placeholder={itemPlaceholder}
          showSearch
          optionFilterProp="label"
          allowClear
        />
      )}

      {shouldShowClass && (
        <Select
          className="w-56"
          options={classOptions}
          onChange={(value) => onClassChange(value || null)}
          value={classFilter || undefined}
          placeholder={classPlaceholder}
          showSearch
          optionFilterProp="label"
          allowClear
        />
      )}
      {shouldShowClassroom && (
        <Select
          className="w-56"
          options={classroomOptions}
          onChange={(value) => onClassroomChange(value || null)}
          value={classroomFilter || undefined}
          placeholder={classroomPlaceholder}
          showSearch
          optionFilterProp="label"
          allowClear
        />
      )}

      {shouldShowShift && (
        <Select
          className="w-56"
          options={shiftOptions}
          onChange={(value) => onShiftChange(value || null)}
          value={shiftFilter || undefined}
          placeholder={shiftPlaceholder}
          showSearch
          optionFilterProp="label"
          allowClear
        />
      )}

      {shouldShowExpenseCategory && (
        <Select
          className="w-56"
          options={expenseCategoryOptions}
          onChange={(value) => onExpenseCategoryChange(value || null)}
          value={expenseCategoryFilter || undefined}
          placeholder={expenseCategoryPlaceholder}
          showSearch
          optionFilterProp="label"
          allowClear
        />
      )}

      {shouldShowTerm && (
        <Select
          className="w-56"
          options={termOptions}
          onChange={(value) => onTermChange(value || null)}
          value={termFilter || undefined}
          placeholder={termPlaceholder}
          showSearch
          optionFilterProp="label"
          allowClear
        />
      )}

      {shouldShowTermOption && (
        <Select
          className="w-56"
          options={termOptionOptions}
          onChange={(value) => onTermOptionChange(value || null)}
          value={termOption || undefined}
          placeholder={termOptionPlaceHolder}
          showSearch
          optionFilterProp="label"
          allowClear
        />
      )}
    </div>
  );
}
