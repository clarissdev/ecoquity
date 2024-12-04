import { FeaturedMedia } from "@/modules/business-types";
import { z } from "zod";

export const GetFeaturedMedia$Params = z.object({
  id: z.number(),
});
export type GetFeaturedMedia$Params = z.infer<typeof GetFeaturedMedia$Params>;

export const GetFeaturedMedia$Result = FeaturedMedia;
export type GetFeaturedMedia$Result = FeaturedMedia;
