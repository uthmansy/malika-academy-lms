import { z } from "zod";

export const PostSchema = z.object({
  title: z.string().min(1, "Title is required").trim(),
  content: z.string().min(1, "Content is required").trim(),
  author: z.string().min(1, "Author is required"),
  feature_image_path: z.string().min(1, "Feature Image is Required"),
  feature_image_url: z.string().min(1, "Feature Image is Required"),
});

// Type for TypeScript integration
export type CreatePost = z.infer<typeof PostSchema>;
