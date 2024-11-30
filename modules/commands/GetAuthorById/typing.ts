import { Author } from "@/modules/business-types";
import { z } from "zod";

export const GetAuthorById$Params = z.object({
  id: z.number(),
});
export type GetAuthorById$Params = z.infer<typeof GetAuthorById$Params>;

export const GetAuthorById$Result = Author;
export type GetAuthorById$Result = Author;
