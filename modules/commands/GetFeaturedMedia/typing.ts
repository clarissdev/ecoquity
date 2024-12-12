import { FeaturedMedia } from "@/modules/business-types";
import { z } from "zod";

export const GetFeaturedMedia$Params = z.object({
  id: z.number(),
});
export type GetFeaturedMedia$Params = z.infer<typeof GetFeaturedMedia$Params>;

export const GetFeaturedMedia$Result = FeaturedMedia;
export type GetFeaturedMedia$Result = FeaturedMedia;

export function getResourceKey$GetFeaturedMedia(
  params: GetFeaturedMedia$Params
) {
  return ["bdcb5fd3-7a22-4f6c-a8f3-631d42bc21dd", params];
}
