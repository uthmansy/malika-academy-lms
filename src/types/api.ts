import { Classroom, Score } from "./db";

export interface LoginPayload {
  email: string;
  password: string;
}

export type FinancialReport = {
  year_month: string; // Format: YYYY-MM
  total_sales: number; // Total sales amount for the month
  profit: number; // Profit = total_sales - total_purchases
  total_expenses: number;
  total_item_cost: number;
  total_payroll: number;
  total_vehicle_fees: number;
};

export interface ApiFilterOptions {
  pageParam: number;
  dateFilter?: string | null;
  termFilter?: string | null;
  debouncedSearchTerm?: string | null;
  itemFilter?: string | null;
  classroomFilter?: string | null;
  shiftFilter?: string | null;
  expenseCategoryFilter?: string | null;
  studentId?: string | null;
}

export interface TeacherStudentScore {
  student_id: string;
  first_name: string;
  last_name: string;
  email: string;
  classroom: Classroom;
  scores: Score[];
}
