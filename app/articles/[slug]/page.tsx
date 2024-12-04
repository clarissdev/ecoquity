import { notFound } from "next/navigation";
import { z } from "zod";

import { Main } from "./_containers/Main";

import Footer from "@/app/_containers/Footer";
import Navbar from "@/app/_containers/Navbar";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import { SERVER_ENV } from "@/modules/env";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

const Props = z.object({
  params: z.promise(
    z.object({
      slug: z.string(),
    }),
  ),
});
type Props = z.infer<typeof Props>;

export default async function Page(props: Props) {
  const parsedProps = Props.safeParse(props);
  if (parsedProps.error) {
    notFound();
  }
  const { slug } = await parsedProps.data.params;
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, { slug }).catch(
    intentionallyIgnoreError,
  );
  if (!data) {
    notFound();
  }
  const post = data[0];
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
        <link rel="stylesheet" href="/styles/wp.css" />
      </head>
      <body>
        <Navbar />
        <Main post={post} />
        <Footer></Footer>
      </body>
    </>
  );
}
