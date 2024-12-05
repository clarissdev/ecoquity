"use client"
import React, { useState, useMemo } from 'react'
import styles from "./index.module.scss";
import Search from '../Search';
import PostCard from '../PostCard';

interface Post {
  id: number
  title: string
  description: string
  imageUrl: string
  tags: string[]
}


export default function Posts ({ posts }: { posts: Post[] }) {
  const [searchTerm, onChangeSearchTerm] = useState('')
  const [selectedTag, onChangeSelectedTag] = useState('')

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    posts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)))
    return Array.from(tagSet)
  }, [])

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTag = selectedTag === '' || post.tags.includes(selectedTag)
      return matchesSearch && matchesTag
    })
  }, [searchTerm, selectedTag])

  return(
    <div className={styles.container}>
      <h1>All posts</h1>

      <Search 
        searchTerm={searchTerm}
        onChangeSearchTerm={onChangeSearchTerm}
        selectedTag={selectedTag}
        onChangeSelectedTag={onChangeSelectedTag}
        tags={allTags}
      />
      <div className={styles.posts}>
        {filteredPosts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
    </div>
  )
}
