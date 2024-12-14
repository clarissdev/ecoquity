import { Post } from "@/modules/business-types";
import { z } from "zod";

export const GetPosts$Params = z.object({
  slug: z.string().optional(),
  page: z.number().optional(),
  per_page: z.number().optional(),
  categories: z.number().array().optional(),
  
});
export type GetPosts$Params = z.infer<typeof GetPosts$Params>;

export const GetPosts$Result = Post.array();
export type GetPosts$Result = Post[];

export function getResourceKey$GetPosts(params: GetPosts$Params) {
  return ["9f7ec536-20b4-4cd8-b0ae-5698a9e73ef2", params];
}
