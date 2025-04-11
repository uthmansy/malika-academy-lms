import { supabase } from "../lib/supabase";
import { ApiFilterOptions } from "../types/api";
import {
  Class,
  ClassJoined,
  ClassSubjectJoined,
  ClassroomJoined,
  Enrollment,
  FeePayment,
  FeePaymentJoined,
  FeeStructure,
  FeeStructureJoined,
  InsertEnrollment,
  InsertFeeStructure,
  InsertStudentScore,
  Post,
  Student,
  StudentClassroomsJoined,
  StudentJoined,
  StudentScoreJoined,
  Subject,
  Teacher,
  TeacherClassroomJoined,
  TeacherSubjectJoined,
  Term,
  TerminalResultJoined,
  UpdateTerminalResult,
  UpdateUserProfile,
  UserProfile,
} from "../types/db";
import { UpdateStudentScoreInput } from "../types/forms";
import { UpdateClassType } from "../zodSchemas/classes";
import { CreatePost } from "../zodSchemas/post";

export const getUsers = async (
  pageNumber: number = 1
): Promise<UserProfile[]> => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .range((pageNumber - 1) * 50, pageNumber * 50 - 1)
    .order("created_at", { ascending: false });

  if (error) throw error.message;

  return data;
};

export const updateUser = async (payload: UpdateUserProfile): Promise<void> => {
  const { error } = await supabase
    .from("profiles")
    .update(payload)
    .eq("id", payload.id);
  if (error) console.error(error);
  if (error) throw new Error(error.message);
};

export const restrictUser = async (
  payload: UpdateUserProfile
): Promise<void> => {
  const { error } = await supabase
    .from("profiles")
    .update(payload)
    .eq("id", payload.id);
  if (error) console.error(error);
  if (error) throw new Error(error.message);
};

export const uploadImage = async (
  fileData: any,
  folder: string
): Promise<{ filePath: string; publicUrl: string }> => {
  const filePath = `${folder}/${fileData.uid}-${fileData.name}`;

  const { data, error } = await supabase.storage
    .from("images")
    .upload(filePath, fileData);

  if (error)
    throw new Error(`Error uploading file ${fileData.name}: ${error.message}`);
  const {
    data: { publicUrl },
  } = supabase.storage
    .from("images") // The bucket name
    .getPublicUrl(data.path);
  if (!publicUrl) throw new Error(`Failed to ertreive image URL`);
  return { filePath: data.path, publicUrl };
};

// helpers/apiFunctions.ts
export const getSections = async (page: number = 1): Promise<any[]> => {
  const { data, error } = await supabase
    .from("school_sections")
    .select("*")
    .range((page - 1) * 50, page * 50 - 1)
    .order("created_at", { ascending: false });

  if (error) throw error.message;
  return data;
};

export const addSection = async (values: { name: string }) => {
  const { data, error } = await supabase
    .from("school_sections")
    .insert([values])
    .select();

  if (error) throw error.message;
  return data;
};

// Function to get classes (paginated)
export const getClasses = async (
  pageNumber: number = 1
): Promise<ClassJoined[]> => {
  const { data, error } = await supabase
    .from("classes")
    .select(
      "*, section_table:section_id(*), form_master:form_master_id(*), next_class:next_class_id(name)"
    )
    .range((pageNumber - 1) * 50, pageNumber * 50 - 1)
    .order("created_at", { ascending: false });

  if (error) throw error.message;
  return data;
};
export const getPosts = async (pageNumber: number = 1): Promise<Post[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .range((pageNumber - 1) * 50, pageNumber * 50 - 1)
    .order("created_at", { ascending: false });

  if (error) throw error.message;
  return data;
};
export const getPostById = async (id: string): Promise<Post> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error.message;
  return data;
};

// Function to add a new class
export const addClass = async (classData: any): Promise<void> => {
  const { error } = await supabase.from("classes").insert(classData);
  if (error) throw error.message;
};
export const addPost = async (payload: CreatePost): Promise<void> => {
  const { error } = await supabase.from("posts").insert(payload);
  if (error) throw error.message;
};

// (Optional) Functions to get sections and teachers for your select options
export const getSectionsAll = async (): Promise<any[]> => {
  const { data, error } = await supabase.from("school_sections").select("*");
  if (error) throw error.message;
  return data;
};

export const getTeachersAll = async (): Promise<Teacher[]> => {
  const { data, error } = await supabase.from("teachers").select("*");
  if (error) throw error.message;
  return data;
};

// Function to get classrooms (paginated)
export const getClassrooms = async (
  pageNumber: number = 1
): Promise<ClassroomJoined[]> => {
  const { data, error } = await supabase
    .from("classrooms")
    .select("*, class_table:class_id(*)")
    .range((pageNumber - 1) * 50, pageNumber * 50 - 1)
    .order("created_at", { ascending: false });

  if (error) throw error.message;
  return data;
};

export const getClassroomsByClass = async (
  classId: string | undefined
): Promise<ClassroomJoined[]> => {
  const { data, error } = await supabase
    .from("classrooms")
    .select("*, class_table:class_id(*)")
    .eq("class_id", classId)
    .order("created_at", { ascending: false });

  if (error) throw error.message;
  return data;
};

// Function to add a new classroom
export const addClassroom = async (classroomData: any): Promise<void> => {
  const { error } = await supabase.from("classrooms").insert(classroomData);
  if (error) throw error.message;
};

// (Optional) If you do not already have it, you might need a function to fetch classes (for the select options):
export const getClassesAll = async (): Promise<any[]> => {
  const { data, error } = await supabase.from("classes").select("*");
  if (error) throw error.message;
  return data;
};

export const getTeacherByProfile = async (
  profileId: string
): Promise<Teacher> => {
  const { data, error } = await supabase
    .from("teachers")
    .select("*")
    .eq("profile_id", profileId)
    .single();
  if (error) throw error.message;
  return data;
};

// Function to fetch terms (paginated)
export const getTerms = async (pageNumber: number = 1): Promise<Term[]> => {
  const { data, error } = await supabase
    .from("terms")
    .select("*")
    .range((pageNumber - 1) * 50, pageNumber * 50 - 1)
    .order("created_at", { ascending: false });

  if (error) throw error.message;
  return data;
};

// Function to add a new term
export const addTerm = async (termData: any): Promise<void> => {
  const { error } = await supabase.from("terms").insert(termData);
  if (error) throw error.message;
};

// Function to fetch subjects (paginated)
export const getSubjects = async (
  pageNumber: number = 1
): Promise<Subject[]> => {
  const { data, error } = await supabase
    .from("subjects")
    .select("*")
    .range((pageNumber - 1) * 50, pageNumber * 50 - 1)
    .order("created_at", { ascending: false });

  if (error) throw error.message;
  return data;
};

// Function to add a new subject
export const addSubject = async (subjectData: any): Promise<void> => {
  const { error } = await supabase.from("subjects").insert(subjectData);
  if (error) throw error.message;
};

export const addStudent = async (payload: Student): Promise<void> => {
  const { error } = await supabase.rpc("insert_student_and_classroom", payload);
  if (error) throw new Error(error.message);
};

export const getAllStudents = async ({
  pageParam = 1,
  dateFilter,
  debouncedSearchTerm,
}: // classroomFilter,
ApiFilterOptions): Promise<Student[]> => {
  let query = supabase
    .from("students")
    .select("*")
    .range((pageParam - 1) * 50, pageParam * 50 - 1)
    .order("admission_date", { ascending: false });

  if (dateFilter) query = query.eq("admission_date", dateFilter);
  // if (classroomFilter) query = query.eq("classroom_id", classroomFilter);
  if (debouncedSearchTerm)
    query = query.or(
      `first_name.ilike.%${debouncedSearchTerm}%,last_name.ilike.%${debouncedSearchTerm}%`
    );

  const { data, error } = await query;
  if (error) throw error.message;
  return data;
};
export const getAllStudentsRecords = async ({
  pageParam = 1,
  classroomFilter,
  debouncedSearchTerm,
  termFilter,
}: ApiFilterOptions): Promise<StudentClassroomsJoined[]> => {
  let term;
  if (!termFilter) {
    const { data, error } = await supabase
      .rpc("get_current_term")
      .select("id")
      .returns<Term[]>()
      .single();
    term = data?.id;
    if (error) throw error.message;
  } else {
    term = termFilter;
  }
  let query = supabase
    .from("student_classrooms")
    .select(
      "*, student_table:student_id!inner(*), class_table:class_id(*), classroom_table:classroom_id(*), term_table:term_id(*)"
    )
    .range((pageParam - 1) * 50, pageParam * 50 - 1)
    .eq("term_id", term);

  if (classroomFilter) query = query.eq("classroom_id", classroomFilter);
  if (debouncedSearchTerm)
    query = query.ilike("student_table.first_name", debouncedSearchTerm);

  const { data, error } = await query;
  if (error) throw error.message;
  return data;
};

export const getTable = async <T>(
  tableName: string,
  selection?: string
): Promise<T[]> => {
  let query = supabase
    .from(tableName)
    .select(selection || "*")
    .order("created_at", { ascending: false });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data as T[];
};

export const getEnrollments = async (
  pageNumber: number = 1
): Promise<Enrollment[]> => {
  const { data, error } = await supabase
    .from("user_enrollments")
    .select("*")
    .range((pageNumber - 1) * 50, pageNumber * 50 - 1)
    .order("created_at", { ascending: false });

  if (error) throw error.message;

  return data;
};

export const addEnrollment = async (
  payload: InsertEnrollment
): Promise<void> => {
  const { error } = await supabase.from("user_enrollments").insert([payload]);

  if (error) throw new Error(error.message);
};

export const verifyEmail = async (
  email: string
): Promise<Enrollment | null> => {
  const { data, error } = await supabase
    .from("user_enrollments")
    .select("*", { count: "exact" }) // Fetch count to check for multiple rows
    .eq("email", email);

  if (error) {
    throw new Error(error.message); // Rethrow any other errors
  }

  if (data.length === 0) {
    return null; // No records found
  }

  if (data.length > 1) {
    // Handle the case where multiple records are found
    throw new Error("Multiple records found for email");
    // Optionally: You can return null or throw an error depending on your needs
  }

  return data[0]; // Return the single record found
};

export const getAllTeachers = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<Teacher[]> => {
  const query = supabase
    .from("teachers")
    .select("*")
    .range((pageParam - 1) * 50, pageParam * 50 - 1)
    .order("hire_date", { ascending: false });

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw error.message;
  }

  return data;
};

export const addTeacherSubject = async (payload: {
  teacher_id: string;
  subject_id: string;
  term_id: string;
}): Promise<void> => {
  const { error } = await supabase.from("teacher_subjects").insert([payload]);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const addTeacherSubjects = async (
  payload: { teacher_id: string; subject_id: string }[]
): Promise<void> => {
  const { error } = await supabase.from("teacher_subjects").insert(payload);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const getAllSubjects = async (): Promise<Subject[]> => {
  const { data, error } = await supabase.from("subjects").select("*");
  if (error) {
    console.error("Error fetching subjects:", error);
    throw new Error(error.message);
  }
  return data || [];
};

export const getAllClasses = async (): Promise<Class[]> => {
  const { data, error } = await supabase.from("classes").select("*");
  if (error) {
    console.error("Error fetching subjects:", error);
    throw new Error(error.message);
  }
  return data || [];
};

// Function to fetch all terms
export const getAllTerms = async (): Promise<Term[]> => {
  const { data, error } = await supabase.from("terms").select("*");
  if (error) {
    console.error("Error fetching terms:", error);
    throw new Error(error.message);
  }
  return data || [];
};

export const addTeacherClassroom = async (
  payload: { teacher_id: string; classroom_id: string; term_id: string }[]
): Promise<void> => {
  const { error } = await supabase.from("teacher_classrooms").insert(payload);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const getAllClassrooms = async (): Promise<any[]> => {
  const { data, error } = await supabase.from("classrooms").select("*");
  if (error) {
    console.error("Error fetching classrooms:", error);
    throw new Error(error.message);
  }
  return data || [];
};

export const getTeacherSubjects = async ({
  pageNumber,
  teacherId,
}: {
  pageNumber: number;
  teacherId: string;
}): Promise<TeacherSubjectJoined[]> => {
  const { data, error } = await supabase
    .from("teacher_subjects")
    .select("*, subject_table:subject_id(*)")
    .eq("teacher_id", teacherId)
    .range((pageNumber - 1) * 50, pageNumber * 50 - 1)
    .order("created_at", { ascending: false });

  if (error) throw error.message;
  return data;
};
export const getTeacherClassrooms = async ({
  pageNumber,
  teacherId,
}: {
  pageNumber: number;
  teacherId: string;
}): Promise<TeacherClassroomJoined[]> => {
  const { data, error } = await supabase
    .from("teacher_classrooms")
    .select("*, classroom_table:classroom_id(*)")
    .eq("teacher_id", teacherId)
    .range((pageNumber - 1) * 50, pageNumber * 50 - 1)
    .order("created_at", { ascending: false });

  if (error) throw error.message;
  return data;
};

export const getAllTeacherClassrooms = async (
  teacherId: string
): Promise<TeacherClassroomJoined[]> => {
  const { data, error } = await supabase
    .from("teacher_classrooms")
    .select("*, classroom_table:classroom_id(*)")
    .eq("teacher_id", teacherId)
    .order("created_at", { ascending: false });

  if (error) throw error.message;
  return data;
};

// src/helpers/apiFunctions.ts
export const getClassSubjects = async ({
  pageNumber = 1,
  classId,
}: {
  pageNumber?: number;
  classId: string | null;
}): Promise<ClassSubjectJoined[]> => {
  const { data, error } = await supabase
    .from("class_subjects")
    .select("*, subject_table:subject_id(*)")
    .eq("class_id", classId)
    .range((pageNumber - 1) * 50, pageNumber * 50 - 1)
    .order("created_at", { ascending: false });

  if (error) throw error.message;
  return data;
};
export const getStudentScores = async ({
  pageNumber = 1,
  studentId,
  termId,
  classFilter,
  termFilter,
}: {
  pageNumber?: number;
  studentId: string;
  termId: string | null;
  classFilter: string | null;
  termFilter: string | null;
}): Promise<StudentScoreJoined[]> => {
  const { data: currentTerm, error: termError } = await supabase
    .rpc("get_current_term")
    .select("id")
    .returns<Term[]>()
    .single();
  if (termError) {
    console.error(termError);
    throw new Error(termError.message);
  }
  let q = supabase
    .from("student_scores")
    .select(
      "*, subject_table:subject_id(*),term_table:term_id!inner(*), class_table:class_id(*)"
    )
    .eq("student_id", studentId)
    .range((pageNumber - 1) * 50, pageNumber * 50 - 1)
    .order("created_at", { ascending: false });
  if (termFilter) q = q.eq("term_table.term", termFilter);
  if (termId) {
    q = q.eq("term_id", termId);
  } else {
    q = q.eq("term_id", currentTerm.id);
  }
  if (classFilter) q = q.eq("class_id", classFilter);
  const { data, error } = await q;
  if (error) throw error.message;
  return data;
};
export const getStudentScoresAll = async ({
  studentId,
  termId,
  classFilter,
  termFilter,
}: {
  pageNumber?: number;
  studentId: string;
  termId: string | null;
  classFilter: string | null;
  termFilter?: string | null;
}): Promise<StudentScoreJoined[]> => {
  let q = supabase
    .from("student_scores")
    .select(
      "*, subject_table:subject_id(*),term_table:term_id!inner(*), class_table:class_id(*)"
    )
    .eq("student_id", studentId)
    .order("created_at", { ascending: false });
  if (termFilter) q = q.eq("term_table.term", termFilter);
  if (termId) q = q.eq("term_id", termId);
  if (classFilter) q = q.eq("class_id", classFilter);
  const { data, error } = await q;
  if (error) throw error.message;
  return data;
};

export const getStudent = async (studentId: string): Promise<StudentJoined> => {
  const { data, error } = await supabase
    .from("students")
    .select("*, classroom_table:student_classrooms(*, class_table:class_id(*))")
    .eq("id", studentId)
    .single();
  console.log(data);
  if (error) {
    console.error("Error fetching student:", error);
    throw new Error(error.message);
  }
  return data;
};

export const addClassSubjects = async (
  payload: { class_id: string; subject_id: string }[]
): Promise<void> => {
  const { error } = await supabase.from("class_subjects").insert(payload);
  if (error) throw error.message;
};
export const addStudentScores = async (
  payload: InsertStudentScore[]
): Promise<void> => {
  const { error } = await supabase.from("student_scores").insert(payload);
  if (error) throw error.message;
};

export const getStudentSubjects = async (
  studentId: string
): Promise<ClassSubjectJoined[]> => {
  const student = await getStudent(studentId);
  const { data, error } = await supabase
    .from("class_subjects")
    .select("*, subject_table:subject_id(*)")
    .eq("class_id", student.classroom_table.class_table.id);
  if (error) {
    console.error("Error fetching student subjects:", error);
    throw new Error(error.message);
  }
  return data || [];
};

export const updateStudentScore = async (
  payload: UpdateStudentScoreInput
): Promise<void> => {
  const { error } = await supabase
    .from("student_scores")
    .update(payload)
    .eq("id", payload.id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
export const updateClass = async (payload: UpdateClassType): Promise<void> => {
  const { error } = await supabase
    .from("classes")
    .update(payload)
    .eq("id", payload.id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const getTerminalResults = async ({
  pageParam = 1,
  dateFilter,
  classroomFilter,
  termFilter,
}: ApiFilterOptions): Promise<TerminalResultJoined[]> => {
  // Build the base query. Note that we join related tables for richer data.
  let query = supabase
    .from("terminal_results")
    .select(
      `
      *,
      student:student_id(*),
      term:term_id(*),
      class:class_id(*),
      classroom:classroom_id(*)
    `
    )
    .range((pageParam - 1) * 50, pageParam * 50 - 1)
    .order("position", { ascending: true });

  // Add filters if provided
  if (dateFilter) query = query.eq("published_date", dateFilter);
  if (termFilter) query = query.eq("term_id", termFilter);
  if (classroomFilter) query = query.eq("classroom_id", classroomFilter);

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
};

export const updateTerminalResult = async (
  payload: UpdateTerminalResult
): Promise<void> => {
  const { error } = await supabase
    .from("terminal_results")
    .update(payload)
    .eq("id", payload.id);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

// Add a new fee structure
export const addFeeStructure = async (
  payload: InsertFeeStructure
): Promise<void> => {
  const { error } = await supabase.from("fee_structures").insert([payload]);
  if (error) throw new Error(error.message);
};

// Get fee structures with optional filters and pagination
export const getAllFeeStructures = async ({
  pageParam,
  classFilter,
  termFilter,
}: {
  pageParam: number;
  classFilter?: string | null;
  termFilter?: string | null;
}): Promise<FeeStructureJoined[]> => {
  let query = supabase
    .from("fee_structures")
    // Join related data (assuming foreign tables are named "classes" and "terms")
    .select("*, class:classes(*), term:terms(*)")
    .range((pageParam - 1) * 50, pageParam * 50 - 1)
    .order("created_at", { ascending: false });

  if (classFilter) query = query.eq("class_id", classFilter);
  if (termFilter) query = query.eq("term_id", termFilter);

  const { data, error } = await query;
  if (error) throw error.message;
  return data;
};

export const updateFeeStructure = async (
  payload: Partial<FeeStructure> & { id: string }
): Promise<void> => {
  const { error } = await supabase
    .from("fee_structures")
    .update(payload)
    .eq("id", payload.id);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

// Inserts a new fee payment record
export const addFeePayment = async (payload: FeePayment): Promise<void> => {
  const { error } = await supabase.rpc("add_fee_payment", payload);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
export const getCurrentTerm = async (): Promise<Term> => {
  const { data, error } = await supabase
    .rpc("get_current_term")
    .select("id")
    .returns<Term[]>()
    .single();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
};
export const getIsRecordComplete = async ({
  studentId,
  termId,
}: {
  studentId: string;
  termId: string;
}): Promise<boolean> => {
  const { data, error } = await supabase.rpc("check_student_scores_complete", {
    student_id: studentId,
    term_id: termId,
  });
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
};

// Retrieves fee payments with optional filters and pagination
export const getAllFeePayments = async ({
  pageParam = 1,
  dateFilter,
  debouncedSearchTerm,
  studentFilter,
  methodFilter,
  studentId,
}: ApiFilterOptions & {
  studentFilter?: string | null;
  methodFilter?: string | null;
}): Promise<FeePaymentJoined[]> => {
  let query = supabase
    .from("fee_payments")
    .select(
      "*, student:student_id (first_name, last_name), fee_structure:fee_structures (class:class_id(*), term:term_id(*))"
    )
    .range((pageParam - 1) * 50, pageParam * 50 - 1)
    .order("payment_date", { ascending: false });

  if (dateFilter) query = query.eq("payment_date", dateFilter);
  if (studentId) query = query.eq("student_id", studentId);
  if (debouncedSearchTerm)
    query = query.ilike("reference_number", `%${debouncedSearchTerm}%`);
  if (studentFilter) query = query.eq("student_id", studentFilter);
  if (methodFilter) query = query.eq("method", methodFilter);

  const { data, error } = await query;
  if (error) throw error.message;
  return data;
};
