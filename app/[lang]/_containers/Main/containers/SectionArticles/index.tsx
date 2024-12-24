import cx from "clsx";

import CardArticle from "../../../../articles/_containers/Main/containers/CardArticle";

import styles from "./index.module.scss";

import { Lang } from "@/modules/app-config";
import { Post } from "@/modules/business-types";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  posts: Post[];
  dictionary: Record<string, string>;
  lang: Lang;
};

export default function SectionArticles({
  className,
  style,
  posts,
  dictionary,
  lang,
}: Props) {
  return (
    <section className={cx(styles.container, className)} style={style}>
      <div className={styles.container}>
        <h2 className={styles.title}>{dictionary.headline}</h2>
        <div className={styles.articlesContainer}>
          {posts.map((post) => (
            <div key={post.id} className={styles.articles}>
              <CardArticle post={post} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
