// src/zodSchemas/studentScores.ts
import { z } from "zod";

// Schema for a single student score record.
export const StudentScoreSchema = z.object({
  student_id: z.string().uuid({ message: "Invalid student UUID" }),
  subject_id: z.string().uuid({ message: "Invalid subject UUID" }),
  class_id: z.string().uuid({ message: "Invalid class UUID" }),
  term_id: z.string().uuid({ message: "Invalid term UUID" }),
  ca_1: z
    .number()
    .min(0, { message: "Score must be at least 0" })
    .max(20, { message: "Score cannot exceed 20" })
    .optional()
    .nullable(),
  ca_2: z
    .number()
    .min(0, { message: "Score must be at least 0" })
    .max(20, { message: "Score cannot exceed 20" })
    .optional()
    .nullable(),
  exam: z
    .number()
    .min(0, { message: "Score must be at least 0" })
    .max(60, { message: "Score cannot exceed 60" })
    .optional()
    .nullable(),
  assessment_date: z.string(),
});

// Schema for an array of student score records.
export const StudentScoreArraySchema = StudentScoreSchema.array();
