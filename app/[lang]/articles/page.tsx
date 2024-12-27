import { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "../_containers/Footer";
import Navbar from "../_containers/Navbar";

import Main from "./_containers/Main";
import styles from "./page.module.scss";

import {
  LANG_CATEGORY_ID,
  Lang,
  PROJECT_CATEGORY_ID,
  THUMBNAIL_URL,
} from "@/modules/app-config";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import { getDictionary } from "@/modules/dictionaries/utils";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

type Props = {
  params: Promise<{
    lang: Lang;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const path = "/articles";
  return {
    title: dictionary.meta[path].title,
    description: dictionary.meta[path].description,
    openGraph: {
      images: [{ url: THUMBNAIL_URL }],
    },
  };
}

export default async function Page({ params }: Props) {
  const lang = (await params).lang;
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {
    // TODO: filter correctly, this is workaround
    categories_exclude: [PROJECT_CATEGORY_ID],
    categories: [LANG_CATEGORY_ID[lang]],
  }).catch(intentionallyIgnoreError);
  if (!data) {
    notFound();
  }
  const dictionary = await getDictionary(lang);

  return (
    <body>
      <div className={styles.container}>
        <div className={styles.content}>
          <Navbar dictionary={dictionary.navbar} lang={lang} />
          <Main dictionary={dictionary.all_articles} lang={lang} posts={data} />
        </div>
        <Footer dictionary={dictionary.footer} />
      </div>
    </body>
  );
}
