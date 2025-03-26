import { Database } from "./supabase";

export type UserRole = Database["public"]["Enums"]["staff_role"];
export type TermEnum = Database["public"]["Enums"]["term_enum"];
export type StreamEnum = Database["public"]["Enums"]["student_stream"];
export type PaymentMethodEnum = Database["public"]["Enums"]["payment_method"];
export type UserProfile = Database["public"]["Tables"]["profiles"]["Row"];
export type UpdateUserProfile =
  Database["public"]["Tables"]["profiles"]["Update"];
export type Class = Database["public"]["Tables"]["classes"]["Row"];
export type Term = Database["public"]["Tables"]["terms"]["Row"];
export type StudentScore =
  Database["public"]["Tables"]["student_scores"]["Row"];
export type InsertStudentScore =
  Database["public"]["Tables"]["student_scores"]["Insert"];
export type TeacherSubject =
  Database["public"]["Tables"]["teacher_subjects"]["Row"];
export type Subject = Database["public"]["Tables"]["subjects"]["Row"];
export type Student = Database["public"]["Tables"]["students"]["Row"];
export type FeePayment = Database["public"]["Tables"]["fee_payments"]["Row"];
export type ClassSubject =
  Database["public"]["Tables"]["class_subjects"]["Row"];
export type Teacher = Database["public"]["Tables"]["teachers"]["Row"];
export type FeeStructure =
  Database["public"]["Tables"]["fee_structures"]["Row"];
export type InsertFeeStructure =
  Database["public"]["Tables"]["fee_structures"]["Insert"];
export type StudentClassrooms =
  Database["public"]["Tables"]["student_classrooms"]["Row"];
export type TeacherClassroom =
  Database["public"]["Tables"]["teacher_classrooms"]["Row"];
export type Enrollment =
  Database["public"]["Tables"]["user_enrollments"]["Row"];
export type InsertEnrollment =
  Database["public"]["Tables"]["user_enrollments"]["Insert"];
export type Classroom = Database["public"]["Tables"]["classrooms"]["Row"];
export type TerminalResult =
  Database["public"]["Tables"]["terminal_results"]["Row"];
export type UpdateTerminalResult =
  Database["public"]["Tables"]["terminal_results"]["Update"];
export type Score = Database["public"]["Tables"]["student_scores"]["Row"];
export type Post = Database["public"]["Tables"]["posts"]["Row"];
export type UpdateScore =
  Database["public"]["Tables"]["student_scores"]["Update"];
export type Section = Database["public"]["Tables"]["school_sections"]["Row"];
export interface ClassJoined extends Class {
  section_table: Section;
  form_master: Teacher;
}
export interface ClassroomJoined extends Classroom {
  class_table: Class;
}
export interface TeacherSubjectJoined extends TeacherSubject {
  subject_table: Subject;
}
export interface TeacherClassroomJoined extends TeacherClassroom {
  classroom_table: Classroom;
}
export interface ClassSubjectJoined extends ClassSubject {
  subject_table: Subject;
}
export interface StudentScoreJoined extends StudentScore {
  subject_table: Subject;
  term_table: Term;
  class_table: Class;
}
export interface StudentJoined extends Student {
  classroom_table: ClassroomJoined;
}
export interface StudentClassroomsJoined extends StudentClassrooms {
  classroom_table: Classroom;
  class_table: Class;
  student_table: Student;
  term_table: Term;
}
export interface TerminalResultJoined extends TerminalResult {
  classroom: Classroom;
  class: Class;
  student: Student;
  term: Term;
}
export interface FeeStructureJoined extends FeeStructure {
  class: Class;
  term: Term;
}
export interface FeePaymentJoined extends FeePayment {
  student: { first_name: string; last_name: string };
  fee_structure: FeeStructureJoined;
}
