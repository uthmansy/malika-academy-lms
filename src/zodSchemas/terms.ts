// src/zodSchemas/termSchema.ts
import { z } from "zod";

const TermSchema = z.object({
  name: z.string().min(1, "Term name is required"),
  term: z.string().min(1, "Term name is required"),
  year: z.number().int().gte(2020, "Year must be 2020 or later"),
  session: z.string(),
  start_date: z.string(), // Expecting date strings from the form
  end_date: z.string().optional(),
});

export default TermSchema;
