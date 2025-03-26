// src/zodSchemas/classSchema.ts
import { z } from "zod";

const ClassSchema = z.object({
  name: z.string().min(1, "Class name is required"),
  section_id: z.string().uuid(),
  stream: z.string(),
  rank: z.number(),
  form_master_id: z.string().nullable().optional(),
});

export default ClassSchema;
