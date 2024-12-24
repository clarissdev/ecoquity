import { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "../../_containers/Footer";
import Navbar from "../../_containers/Navbar";

import { Main } from "./_containers/Main";

import {
  LANG_CATEGORY_ID,
  Lang,
  PROJECT_CATEGORY_ID,
  THUMBNAIL_URL,
} from "@/modules/app-config";
import { httpGet$GetFeaturedMedia } from "@/modules/commands/GetFeaturedMedia/fetcher";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import { getDictionary } from "@/modules/dictionaries/utils";
import { SERVER_ENV } from "@/modules/env";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

type Props = {
  params: Promise<{
    lang: Lang;
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang } = await params;
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {
    slug,
    categories: [PROJECT_CATEGORY_ID, LANG_CATEGORY_ID[lang]],
  }).catch(intentionallyIgnoreError);
  const post = data?.[0];
  const media = post
    ? await httpGet$GetFeaturedMedia(`/wp-json/wp/v2/media`, {
        id: post.featured_media,
      }).catch(intentionallyIgnoreError)
    : undefined;
  return {
    title: post?.title.rendered || "Untitled",
    description: post?.excerpt.rendered || "From ecoquity.club",
    openGraph: {
      images: [
        {
          url: media?.source_url || THUMBNAIL_URL,
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug, lang } = await params;
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {
    slug,
    categories: [PROJECT_CATEGORY_ID, LANG_CATEGORY_ID[lang]],
  }).catch(intentionallyIgnoreError);
  if (!data || !data.length) {
    notFound();
  }
  const post = data[0];
  const dictionary = await getDictionary(lang);
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href={
            SERVER_ENV.WORDPRESS_URL +
            "/wp-includes/blocks/navigation/style.min.css?ver=6.7.1"
          }
          type="text/css"
        />
        <link
          rel="stylesheet"
          href={
            SERVER_ENV.WORDPRESS_URL +
            "/wp-includes/blocks/image/style.min.css?ver=6.7.1"
          }
          type="text/css"
        />
        <link
          rel="stylesheet"
          href={
            SERVER_ENV.WORDPRESS_URL +
            "/wp-includes/css/dist/block-library/common.min.css?ver=6.7.1"
          }
          type="text/css"
        />
        <link
          rel="stylesheet"
          href={
            SERVER_ENV.WORDPRESS_URL +
            "/wp-includes/css/dist/block-library/style.min.css"
          }
          type="text/css"
        />
        <link
          rel="stylesheet"
          href={
            SERVER_ENV.WORDPRESS_URL +
            "/wp-content/themes/twentytwentyfive/style.css?ver=1.0"
          }
          type="text/css"
        />
        <link
          rel="stylesheet"
          href={`/${lang}/styles/wp.css`}
          type="text/css"
        />
      </head>
      <body>
        <Navbar dictionary={dictionary.navbar} lang={lang} />
        <Main post={post} />
        <Footer dictionary={dictionary.footer} />
      </body>
    </>
  );
}
