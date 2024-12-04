import React from 'react'
import styles from "./index.module.scss"
import jpgFigure from "./assets/article.jpg";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


interface Post {
  id: number
  title: string
  description: string
  imageUrl: string
  tags: string[]
}

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card key={post.id} className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative">
        <Image
          src={jpgFigure}
          alt={`Cover image for ${post.title}`}
          width={400}
          height={300}
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <CardHeader>
        <h2 className="line-clamp-2 text-xl font-semibold text-gray-900">
          {post.title}
        </h2>
      </CardHeader>
      <CardContent>
        <div className={styles.tags}>
          {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
        </div>
        <p className="line-clamp-3 text-sm text-gray-600">
          {post.description}
        </p>
      </CardContent>
      <CardFooter>
        <time className="text-sm text-gray-500">11/11/11</time>
      </CardFooter>
    </Card>

  )
}

export default PostCard
