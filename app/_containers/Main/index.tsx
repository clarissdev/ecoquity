import cx from "clsx";

import { notFound } from "next/navigation";
import SectionAboveTheFold from "./containers/SectionAboveTheFold";
import styles from "./index.module.scss";
import SectionArticles from "./containers/SectionArticles";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const ARTICLE_CATEGORY_ID = 3;

export default async function Main({ className, style }: Props) {
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {
    categories: ARTICLE_CATEGORY_ID,
  }).catch(intentionallyIgnoreError);
  if (!data) {
    notFound();
  }
  // Fetch latest post
  const sortedPosts = data.sort((a: { date: string }, b: { date: string }) => {return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
  const three_latest = sortedPosts.slice(0, 3);
  
  return (
      <main className={cx(styles.container, className)} style={style}>
        <SectionAboveTheFold />
        <SectionArticles posts={three_latest}/>
      </main>

  );
}
