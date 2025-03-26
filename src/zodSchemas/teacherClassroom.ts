// src/zodSchemas/teacherClassroom.ts
import { z } from "zod";

export const TeacherClassroomSchema = z.object({
  teacher_id: z.string().uuid(),
  classroom_id: z.string().uuid(),
});
