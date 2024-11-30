import cx from "clsx";
import React from "react";

import styles from "./index.module.scss";

import { Post } from "@/modules/business-types";
import "./animation.scss";
import "./wp.scss";
import { httpGet$GetAuthorById } from "@/modules/commands/GetAuthorById/fetcher";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  post: Post;
};

export async function Main({ className, style, post }: Props) {
  const author = await httpGet$GetAuthorById("/users", {
    id: post.author,
  }).catch(intentionallyIgnoreError);
  return (
    <main className={cx(className, styles.container)} style={style}>
      <div className={styles.content}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h1>
        <div
          className="wp-block-group has-accent-4-color has-text-color has-link-color has-small-font-size is-layout-flex wp-container-core-group-is-layout-5 wp-block-group-is-layout-flex"
          style={{ marginBottom: "var(--wp--preset--spacing--60)" }}
        >
          <p>Written by </p>
          <div className="wp-block-post-author-name">
            <a
              href="#"
              target="_self"
              className="wp-block-post-author-name__link"
            >
              {author?.name}
            </a>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </div>
    </main>
  );
}
