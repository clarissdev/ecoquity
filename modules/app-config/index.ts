import { z } from "zod";
import { SERVER_ENV } from "../env";

export const Lang = z.union([z.literal("en"), z.literal("vi")]);
export type Lang = z.infer<typeof Lang>;

// This must be compatible with /wp-json/wp/v2/categories?slug=article
export const ARTICLE_CATEGORY_ID = 3;

// This must be compatible with /wp-json/wp/v2/categories?slug=project
export const PROJECT_CATEGORY_ID = 4;

// This must be compatible with /wp-json/wp/v2/categories?slug=lang
export const LANG_CATEGORY_ID: Record<Lang, number> = {
  en: 17,
  vi: 18,
};

export const THUMBNAIL_URL = `${SERVER_ENV.WORDPRESS_URL}/wp-content/uploads/2024/12/thumbnail.png`;
