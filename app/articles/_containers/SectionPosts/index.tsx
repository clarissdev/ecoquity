"use client"
import React, { useState, useMemo } from 'react'
import styles from "./index.module.scss";
import PostCard from './containers/PostCard';
import { Post } from '@/modules/business-types';
import cx from "clsx";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  posts: Post[]; 
};


export default function Posts ({className, style, posts }: Props) {
  return(
    <div  className={cx(className, styles.container)} style={style}>
      <div className={styles.container}>
        <h1>All posts</h1>
        <div className={styles.posts}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>

  )
}
