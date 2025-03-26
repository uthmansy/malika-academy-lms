import { z } from "zod";

export const PostSchema = z.object({
  title: z.string().min(1, "Title is required").trim(),
  content: z.string().min(1, "Content is required").trim(),
  author: z.string().min(1, "Author is required"),
});

// Type for TypeScript integration
export type CreatePost = z.infer<typeof PostSchema>;
