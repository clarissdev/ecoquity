import React from 'react'
import styles from "./index.module.scss";
import Image from "next/image";
import { Post } from '@/modules/business-types';
import { useState, useEffect } from 'react';

export default function PostCard ({ post }: { post: Post }){

  return (
    <article className={styles.article}>
      {/* Card image */}
      <div className={styles.cardImg}>
        {/* <img 
          src={imageUrl}
          alt ="content image"
          className={styles.img}
        /> */}
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
        <div className={styles.description}>
          {post.excerpt.rendered}
        </div>
        <time className={styles.time}>{post.date}</time>
      </div>
    </article>
  )
}

