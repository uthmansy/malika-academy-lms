// zodSchemas/sections.ts
import { z } from "zod";

const SectionSchema = z.object({
  name: z.string().min(1, "Section name is required"),
});

export default SectionSchema;
