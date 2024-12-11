import cx from "clsx";
import React from "react";

import PostCard from "./containers/CardArticle";
import styles from "./index.module.scss";

import { Post } from "@/modules/business-types";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  posts: Post[];
};

export default function Main({ className, style, posts }: Props) {
  return (
    <main className={cx(className, styles.container)} style={style}>
      <div className={styles.container}>
        <h1>All posts</h1>
        <div className={styles.posts}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
