// src/zodSchemas/classSubjects.ts
import { z } from "zod";

export const ClassSubjectSchema = z.object({
  class_id: z.string().uuid(),
  subject_id: z.string().uuid(),
});
