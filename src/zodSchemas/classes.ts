// src/zodSchemas/classSchema.ts
import { z } from "zod";

const ClassSchema = z.object({
  name: z.string().min(1, "Class name is required"),
  section_id: z.string().uuid(),
  next_class_id: z.string().uuid(),
  stream: z.string(),
  rank: z.number(),
  form_master_id: z.string().nullable().optional(),
});

const UpdateClassSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Class name is required").optional(),
  section_id: z.string().uuid().optional(),
  next_class_id: z.string().uuid().optional(),
  stream: z.string().optional(),
  rank: z.number().optional(),
  form_master_id: z.string().nullable().optional().optional(),
});

export { ClassSchema, UpdateClassSchema };
export type UpdateClassType = z.infer<typeof UpdateClassSchema>;
