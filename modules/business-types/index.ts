import { z } from "zod";

export const Post = z.object({
  id: z.number(),
  date: z.string(),
  date_gmt: z.string(),
  guid: z.object({
    rendered: z.string(),
  }),
  modified: z.string(),
  modified_gmt: z.string(),
  slug: z.string(),
  status: z.enum(["publish", "future", "draft", "pending", "private"]),
  type: z.string(),
  link: z.string(),
  title: z.object({
    rendered: z.string(),
  }),
  content: z.object({
    rendered: z.string(),
    protected: z.boolean(),
  }),
  excerpt: z.object({
    rendered: z.string(),
    protected: z.boolean(),
  }),
  author: z.number(),
  featured_media: z.number(),
  comment_status: z.enum(["open", "closed"]),
  ping_status: z.enum(["open", "closed"]),
  sticky: z.boolean(),
  template: z.string(),
  format: z.enum([
    "standard",
    "aside",
    "chat",
    "gallery",
    "link",
    "image",
    "quote",
    "status",
    "video",
    "audio",
  ]),
  meta: z.any(),
  categories: z.any().array(),
  tags: z.number().array(),
});
export type Post = z.infer<typeof Post>;
