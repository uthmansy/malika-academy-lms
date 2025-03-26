// src/zodSchemas/classroomSchema.ts
import { z } from "zod";

const ClassroomSchema = z.object({
  class_id: z.string(), // Must be provided (select option)
  name: z.string().min(1, "Classroom name is required"),
  label: z.string().min(1, "Classroom name is required"),
  capacity: z.number().int().gt(0, "Capacity must be greater than 0"),
});

export default ClassroomSchema;
