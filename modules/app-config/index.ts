import { SERVER_ENV } from "../env";

// This must be compatible with /wp-json/wp/v2/categories?slug=article
export const ARTICLE_CATEGORY_ID = 3;

// This must be compatible with /wp-json/wp/v2/categories?slug=article
export const PROJECT_CATEGORY_ID = 4;

export const THUMBNAIL_URL = `${SERVER_ENV.WORDPRESS_URL}/wp-content/uploads/2024/12/thumbnail.png`;
