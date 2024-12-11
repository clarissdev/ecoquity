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

export const Author = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
  description: z.string(),
  link: z.string(),
  slug: z.string(),
  avatar_urls: z.record(z.string()),
  meta: z.any().array(),
});
export type Author = z.infer<typeof Author>;

export const FeaturedMedia = z.object({
  id: z.number(),
  date: z.string(),
  slug: z.string(),
  type: z.string(),
  link: z.string(),
  title: z.object({
    rendered: z.string(),
  }),
  author: z.number(),
  caption: z.object({
    rendered: z.string(),
  }),
  alt_text: z.string(),
  media_type: z.string(),
  mime_type: z.string(),
  media_details: z.object({
    width: z.number(),
    height: z.number(),
    file: z.string(),
    sizes: z.record(
      z.object({
        file: z.string(),
        width: z.number(),
        height: z.number(),
        mime_type: z.string(),
        source_url: z.string(),
      })
    ),
  }),
  source_url: z.string(),
});
export type FeaturedMedia = z.infer<typeof FeaturedMedia>;

export const Category = z.object({
  id: z.number(),
  count: z.number(),
  description: z.string(),
  link: z.string(),
  name: z.string(),
  slug: z.string(),
  taxonomy: z.literal("category"),
  parent: z.number(),
  meta: z.any().array(),
});

export type Category = z.infer<typeof Category>;
