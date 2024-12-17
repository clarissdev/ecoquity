import cx from "clsx";

import styles from "./index.module.scss";

import CardArticle from "@/app/articles/_containers/Main/containers/CardArticle";
import { Post } from "@/modules/business-types";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  posts: Post[];
};

export default function SectionArticles({ className, style, posts }: Props) {
  return (
    <section className={cx(styles.container, className)} style={style}>
      <div className={styles.container}>
        <h2>Latest Articles</h2>
        <div className={styles.articlesContainer}>
          {posts.map((post) => (
            <div key={post.id} className={styles.articles}>
              <CardArticle post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
