import { Category } from "@/modules/business-types";
import { z } from "zod";

export const GetCategory$Params = z.object({
  id: z.number(),
});
export type GetCategory$Params = z.infer<typeof GetCategory$Params>;

export const GetCategory$Result = Category;
export type GetCategory$Result = Category;
