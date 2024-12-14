import cx from "clsx";

import { notFound } from "next/navigation";
import SectionAboveTheFold from "./containers/SectionAboveTheFold";
import styles from "./index.module.scss";
import SectionArticles from "./containers/SectionArticles";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";
import { ARTICLE_CATEGORY_ID } from "@/modules/app-config";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};



export default async function Main({ className, style }: Props) {
  // Fetch the three newest articles
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {per_page: 3, categories: [ARTICLE_CATEGORY_ID], orderby: 'date', order: 'desc'})
  .catch(intentionallyIgnoreError);
  if (!data) {
    notFound();
  }
  
  return (
      <main className={cx(styles.container, className)} style={style}>
        <SectionAboveTheFold />
        <SectionArticles posts={data}/>
      </main>

  );
}
