import cx from "clsx";
import React from "react";

import CardArticle from "./containers/CardArticle";
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

export default function Main({
  className,
  style,
  posts,
  dictionary,
  lang,
}: Props) {
  return (
    <main className={cx(className, styles.container)} style={style}>
      <div className={styles.container}>
        <h1>{dictionary.headline}</h1>
        <div className={styles.posts}>
          {posts.map((post) => (
            <CardArticle lang={lang} key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
