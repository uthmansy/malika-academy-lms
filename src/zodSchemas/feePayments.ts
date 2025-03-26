// feePayments.ts (inside your zodSchemas folder)
import { z } from "zod";

export const FeePaymentSchema = z.object({
  student_id: z.string().uuid(),
  fee_structure_id: z.string().uuid(),
  amount: z.number().positive(),
  payment_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Payment date must be in YYYY-MM-DD format")
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
  method: z.enum(["cash", "card", "bank_transfer"]),
  reference_number: z.string().optional().nullable(),
});

export const UpdateFeePaymentSchema = z.object({
  id: z.string().uuid({ message: "Invalid UUID format" }),
  student_id: z.string().uuid().optional(),
  fee_structure_id: z.string().uuid().optional(),
  amount: z.number().positive().optional(),
  payment_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Payment date must be in YYYY-MM-DD format")
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date")
    .optional(),
  method: z.enum(["cash", "card", "bank_transfer"]).optional(),
  reference_number: z.string().optional().nullable(),
});

export const AddfeePaymentSchema = z.object({
  p_student_id: z.string().uuid(),
  p_term_id: z.string().uuid(),
  p_class_id: z.string().uuid(),
  p_amount: z.number().positive(),
  p_method: z.string(), // Adjust to z.enum([...]) if you have a known set of payment methods.
  p_reference_number: z.string().optional().nullable(),
  p_payment_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Payment date must be in YYYY-MM-DD format"),
});
