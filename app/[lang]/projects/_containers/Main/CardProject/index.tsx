import cx from "clsx";
import Image from "next/image";
import React from "react";

import thumbnail from "./assets/thumbnail.jpg";
import styles from "./index.module.scss";

import { Lang } from "@/modules/app-config";
import { Post } from "@/modules/business-types";
import { httpGet$GetFeaturedMedia } from "@/modules/commands/GetFeaturedMedia/fetcher";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  post: Post;
  lang: Lang;
};

export default async function CardProject({
  className,
  style,
  post,
  lang,
}: Props) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const media = await httpGet$GetFeaturedMedia(`/wp-json/wp/v2/media`, {
    id: post.featured_media,
  }).catch(intentionallyIgnoreError);

  return (
    <div className={cx(styles.container, className)} style={style}>
      <article className={styles.article}>
        <a href={`/${lang}/projects/${post.slug}`}>
          <div className={styles.cardImg}>
            <Image
              src={media?.source_url || thumbnail}
              alt="content image"
              className={styles.img}
              width="200"
              height="200"
            />
            <div className={styles.gradientOverlay}>
              <div className={styles.title_container}>
                <div className={styles.title_text}>{post.title.rendered}</div>
              </div>
            </div>
          </div>
        </a>
        {post.tags.length > 0 ? (
          <div className={styles.padding_1}>
            <div className={styles.tags_container}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : undefined}
        {/* Description & time */}
        <div className={styles.padding_2}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <time className={styles.time}>{formattedDate}</time>
        </div>
      </article>
    </div>
  );
}
