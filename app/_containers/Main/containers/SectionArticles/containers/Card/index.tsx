import cx from "clsx";
import Image from "next/image";
import Link from "next/link";

import placeholder from "./assets/placeholder.svg";
import styles from "./index.module.scss";

import Flex from "@/modules/app-ui/Flex";
import { Post } from "@/modules/business-types";
import { httpGet$GetCategory } from "@/modules/commands/GetCategory/fetcher";
import { httpGet$GetFeaturedMedia } from "@/modules/commands/GetFeaturedMedia/fetcher";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  post: Post;
};

export default async function Card({ className, style, post }: Props) {
  const media = await httpGet$GetFeaturedMedia("/wp-json/wp/v2/media", {
    id: post.featured_media,
  }).catch(intentionallyIgnoreError);
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const category = await httpGet$GetCategory("/wp-json/wp/v2/categories", {
    id: post.categories[0],
  }).catch(intentionallyIgnoreError);
  return (
    <div className={cx(className, styles.container)} style={style}>
      <Flex.Col
        justifyContent="space-between"
        gap="28px"
        style={{ height: "100%" }}
      >
        <Flex.Col alignItems="center" gap="1rem" flex="1 1 0">
          <Link href={`/articles/${post.slug}`}>
            <Flex.Row justifyContent="center" className={styles.imageContainer}>
              <Image
                src={media?.source_url || placeholder}
                alt={"figure"}
                width="400"
                height="400"
                className={styles.image}
              />
            </Flex.Row>
          </Link>
          <Link href={`/articles/${post.slug}`} className={styles.title}>
            <div
              style={{ width: "100%" }}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></div>
          </Link>
          <div
            className={styles.excerpt}
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          ></div>
        </Flex.Col>
        <Flex.Row
          justifyContent="space-between"
          paddingTop="12px"
          className={styles.footer}
        >
          <div>{category?.name || "No category"}</div>
          <div>{date}</div>
        </Flex.Row>
      </Flex.Col>
    </div>
  );
}
