// src/zodSchemas/teacherSubject.ts
import { z } from "zod";

export const TeacherSubjectSchema = z.object({
  teacher_id: z.string().uuid(),
  subject_id: z.string().uuid(),
});
