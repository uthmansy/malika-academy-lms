// zodSchemas/studentScores.ts
import { z } from "zod";

export const UpdateTerminalResultSchema = z.object({
  id: z.string().uuid({ message: "Invalid UUID format" }),
  attentiveness: z.number().optional().nullable(),
  honesty: z.number().optional().nullable(),
  neatness: z.number().optional().nullable(),
  politeness: z.number().optional().nullable(),
  punctuality: z.number().optional().nullable(),
  relationship_with_others: z.number().optional().nullable(),
  club_society: z.number().optional().nullable(),
  drawing_and_painting: z.number().optional().nullable(),
  hand_writing: z.number().optional().nullable(),
  hobbies: z.number().optional().nullable(),
  speech_fluency: z.number().optional().nullable(),
  sport_and_game: z.number().optional().nullable(),
  class_teacher_remarks: z.string().optional().nullable(),
  head_teacher_remarks: z.string().optional().nullable(),
});
