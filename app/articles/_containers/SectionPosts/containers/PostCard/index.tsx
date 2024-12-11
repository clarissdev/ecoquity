'use client'
import React from 'react'
import styles from "./index.module.scss";
import Image from "next/image";
import { Post } from '@/modules/business-types';
import cx from "clsx";
import { httpGet$GetFeaturedMedia } from "@/modules/commands/GetFeaturedMedia/fetcher";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  post: Post; 
};

export default async function PostCard ({ className, style, post}: Props){
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
  });
  const media = await httpGet$GetFeaturedMedia(`/wp-json/wp/v2/media`, {id: post.featured_media});

  return (
    <section  className={cx(styles.container, className)} style={style}>
      <article className={styles.article}>
          {/* Card image */}
          <div className={styles.cardImg}>
            <Image
              src={media.source_url}
              alt ="content image"
              className={styles.img}
              width="200"
              height="200"
            />
            <div className={styles.gradientOverlay}>
              <div className={styles.title_container}>
                <h2 className={styles.title_text}>
                  {post.title.rendered}
                </h2>
              </div>
            </div>
          </div>
          {/* Tags */}
          <div className={styles.padding_1}>
            <div className={styles.tags_container}>
              {post.tags.map((tag) => (
                <span 
                  key = {tag}
                  className={styles.tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Description & time */}
          <div className={styles.padding_2}>
            <div 
              className={styles.description} 
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
            />
            <time className={styles.time}>{formattedDate}</time>
          </div>
        </article>
    </section>
  
  )
}

