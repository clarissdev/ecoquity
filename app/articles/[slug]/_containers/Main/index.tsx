import cx from "clsx";
import React from "react";

import styles from "./index.module.scss";

import { Post } from "@/modules/business-types";
import "./animation.scss";
import "./wp.scss";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  post: Post;
};

export function Main({ className, style, post }: Props) {
  return (
    <main className={cx(className, styles.container)} style={style}>
      <div className={styles.content}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </div>
    </main>
  );
}
