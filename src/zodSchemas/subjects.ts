// src/zodSchemas/subjectSchema.ts
import { z } from "zod";

const SubjectSchema = z.object({
  name: z.string().min(1, "Subject name is required"),
  code: z.string().optional(), // Optional subject code
});

export default SubjectSchema;
