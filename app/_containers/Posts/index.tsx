"use client"
import PostCard from '../PostCard'
import Search from '../Search';
import styles from "./index.module.scss";
import React, { useState, useEffect } from 'react';

interface Post {
  id: number
  title: string
  description: string
  imageUrl: string
  tags: string[]
}

const dummyPosts: Post[] = [
  {
    id: 1,
    title: "Cans or bottles? Plastics or papers Both aluminum cans and plastic bottles aren't as eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle",
    description: "Both aluminum cans and plastic bottles aren't as eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle  eco-friendly as they seem! Many people think cans are better because they're easier to recycle",
    imageUrl: "/placeholder.svg?height=200&width=300",
    tags: ["Recycling", "Sustainability", "Environment"]
  },
  {
    id: 2,
    title: "The impact of fast fashion on the environment",
    description: "Fast fashion has become increasingly popular, but at what cost to our planet? Learn about the environmental impact of this industry trend...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    tags: ["Fashion", "Environment", "Sustainability"]
  },
  {
    id: 3,
    title: "Renewable energy: The future of power generation",
    description: "Explore the various forms of renewable energy and how they're shaping the future of power generation. From solar to wind, discover the potential...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    tags: ["Energy", "Sustainability", "Technology"]
  }
]
const Posts = () => {
  const [posts, setPosts] = useState<Post[]>(dummyPosts)
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(dummyPosts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("All tags")

  useEffect(() => {
    const results = posts.filter(post =>
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) &&
      (selectedTag === "All tags" || post.tags.includes(selectedTag))
    )
    setFilteredPosts(results)
  }, [searchTerm, selectedTag, posts])

  const allTags = ["All tags", ...new Set(posts.flatMap(post => post.tags))]

    return (
        <div className={styles.container}>
            {/* <div className={styles.filter}> */}
                {/* Searching bar */}
          <div className={styles.title}>All Posts</div>
          {/* <div className={styles.search}> */}
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            tags={allTags}
          />
          {/* </div> */}
            {/* </div> */}
            <div className={styles.posts_container}>
                {/* List all posts */}
                {filteredPosts.map((post) => (
                    <PostCard post={post} key={post.id}/>
                ))}
            </div>

        </div>
    )
}

export default Posts