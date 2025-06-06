import cx from "clsx";
import { notFound } from "next/navigation";

import SectionAboveTheFold from "./containers/SectionAboveTheFold";
import SectionArticles from "./containers/SectionArticles";
import SectionProjects from "./containers/SectionProjects";
import styles from "./index.module.scss";

import {
  ARTICLE_CATEGORY_ID,
  LANG_CATEGORY_ID,
  Lang,
  PROJECT_CATEGORY_ID,
} from "@/modules/app-config";
import { httpGet$GetFeaturedMedia } from "@/modules/commands/GetFeaturedMedia/fetcher";
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
  const articles = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {
    per_page: 3,
    // TODO: filter categories correctly
    categories_exclude: [PROJECT_CATEGORY_ID],
    categories: [LANG_CATEGORY_ID[lang]],
    orderby: "date",
    order: "desc",
  }).catch(intentionallyIgnoreError);
  if (!articles) {
    notFound();
  }

  const projects = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {
    per_page: 3,
    categories_exclude: [ARTICLE_CATEGORY_ID],
    categories: [LANG_CATEGORY_ID[lang]],
    orderby: "date",
    order: "desc",
  }).catch(intentionallyIgnoreError);
  if (!projects) {
    notFound();
  }

  const projectsMedia = await Promise.all(
    projects.map((project) =>
      httpGet$GetFeaturedMedia(`/wp-json/wp/v2/media`, {
        id: project.featured_media,
      }).catch(() => undefined)
    )
  ).catch(intentionallyIgnoreError);
  if (!projectsMedia) {
    notFound();
  }

  return (
    <main className={cx(styles.container, className)} style={style}>
      <SectionAboveTheFold dictionary={dictionary.above_the_fold} lang={lang} />
      {projectsMedia.length > 0 ? (
        <SectionProjects
          lang={lang}
          dictionary={dictionary.featured_projects}
          projects={projects.reverse()}
          projectsMedia={projectsMedia.reverse()}
        />
      ) : undefined}
      <SectionArticles
        dictionary={dictionary.latest_articles}
        posts={articles}
        lang={lang}
      />
    </main>
  );
}
