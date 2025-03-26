// src/zodSchemas/feeStructures.ts
import { z } from "zod";

export const FeeStructureSchema = z.object({
  class_id: z.string().uuid({ message: "Invalid Class ID" }),
  term_id: z.string().uuid({ message: "Invalid Term ID" }),
  total_amount: z
    .number()
    .nonnegative({ message: "Total Amount must be zero or positive" }),
});

export const UpdateFeeStructureSchema = z.object({
  id: z.string().uuid({ message: "Invalid UUID format" }),
  total_amount: z.number().gt(0, "Total amount must be greater than 0"),
});
