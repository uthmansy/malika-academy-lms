// src/zodSchemas/studentScore.ts
import { z } from "zod";

export const UpdateStudentScoreSchema = z.object({
  id: z.string().uuid({ message: "Invalid UUID format" }),
  ca_1: z
    .number()
    .min(0, "Ca must be at least 0")
    .max(20, "Ca cannot exceed 20")
    .optional()
    .nullable(),
  ca_2: z
    .number()
    .min(0, "Ca must be at least 0")
    .max(20, "Ca cannot exceed 20")
    .optional()
    .nullable(),
  exam: z
    .number()
    .min(0, "Exam must be at least 0")
    .max(60, "Exam cannot exceed 60")
    .optional()
    .nullable(),
});
