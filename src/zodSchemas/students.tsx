import { z } from "zod";

export const StudentsSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  fee_discount: z.number(),
  stream: z.string(),
  date_of_birth: z
    .string()
    .refine(
      (date) =>
        new Date(date) <=
        new Date(new Date().setFullYear(new Date().getFullYear() - 3)),
      "Student must be at least 3 years old"
    ),
  gender: z.enum(["Male", "Female", "Other"]),
  classroom_id: z.string().uuid().optional().nullable(),
  admission_date: z.string(),
  s_class_id: z.string().uuid(),
  status: z.enum(["Active", "Inactive", "Graduated"]).optional().nullable(),
  nationality: z.string().optional(),
  state_of_origin: z.string().optional(),
  lga: z.string().optional(),
  medical_history: z.string().optional(),
});

export const UpdateStudentSchema = StudentsSchema.partial().extend({
  id: z.string().uuid("Invalid UUID format"),
});
