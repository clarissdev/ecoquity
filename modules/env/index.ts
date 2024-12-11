import { z } from "zod";

export const ServerEnv = z.object({
  WORDPRESS_URL: z.string().min(1),
});

export const SERVER_ENV = ServerEnv.parse({
  WORDPRESS_URL: process.env.NEXT_PUBLIC_WORDPRESS_URL,
});
