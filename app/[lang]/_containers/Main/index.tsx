import cx from "clsx";
import { notFound } from "next/navigation";

import SectionAboveTheFold from "./containers/SectionAboveTheFold";
import SectionArticles from "./containers/SectionArticles";
import styles from "./index.module.scss";

import {
  LANG_CATEGORY_ID,
  Lang,
  PROJECT_CATEGORY_ID,
} from "@/modules/app-config";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  lang: Lang;
  dictionary: Record<string, Record<string, string>>;
};

export default async function Main({
  className,
  style,
  lang,
  dictionary,
}: Props) {
  // Fetch the three newest articles
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {
    per_page: 3,
    // TODO: filter categories correctly
    categories_exclude: [PROJECT_CATEGORY_ID],
    categories: [LANG_CATEGORY_ID[lang]],
    orderby: "date",
    order: "desc",
  }).catch(intentionallyIgnoreError);
  if (!data) {
    notFound();
  }

  return (
    <main className={cx(styles.container, className)} style={style}>
      <SectionAboveTheFold dictionary={dictionary.above_the_fold} lang={lang} />
      <SectionArticles
        dictionary={dictionary.latest_articles}
        posts={data}
        lang={lang}
      />
    </main>
  );
}
