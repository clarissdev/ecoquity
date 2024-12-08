"use client"
import React, { useState, useMemo } from 'react'
import styles from "./index.module.scss";
import Search from './containers/Search';
import PostCard from './containers/PostCard';
import { Post } from '@/modules/business-types';

export default function Posts ({ posts }: { posts: Post[] }) {
  return(
    <div className={styles.container}>
      <h1>All posts</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
