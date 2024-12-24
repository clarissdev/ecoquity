import { Metadata } from "next";

import Footer from "./_containers/Footer";
import Main from "./_containers/Main";
import Navbar from "./_containers/Navbar";
import styles from "./page.module.scss";

import { Lang, THUMBNAIL_URL } from "@/modules/app-config";
import { getDictionary } from "@/modules/dictionaries/utils";

type Props = {
  params: Promise<{
    lang: Lang;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const path = "/";
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
  const dictionary = await getDictionary(lang);
  return (
    <body>
      <div className={styles.container}>
        <Navbar dictionary={dictionary.navbar} lang={lang} />
        <Main dictionary={dictionary.home} lang={lang}></Main>
        <Footer dictionary={dictionary.footer}></Footer>
      </div>
    </body>
  );
}
