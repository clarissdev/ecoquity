import { Post } from "@/modules/business-types";
import { z } from "zod";

export const GetPosts$Params = z.object({
  slug: z.string().optional(),
  per_page: z.number().optional(),
  categories: z.number().optional(), 
  orderby: z.string().optional(),
  order: z.string().optional(),
});
export type GetPosts$Params = z.infer<typeof GetPosts$Params>;

export const GetPosts$Result = Post.array();
export type GetPosts$Result = Post[];
