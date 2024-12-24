import cx from "clsx";
import React from "react";

import styles from "./index.module.scss";

import { Post } from "@/modules/business-types";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  post: Post;
};

export async function Main({ className, style, post }: Props) {
  return (
    <main className={cx(styles.container, className)} style={style}>
      <div
        style={{
          paddingTop: "var(--wp--preset--spacing--60)",
          paddingBottom: "var(--wp--preset--spacing--60)",
        }}
        className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
      >
        <h1
          className="wp-block-post-title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h1>
        <div
          className="entry-content alignfull wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
      </div>
    </main>
  );
}
