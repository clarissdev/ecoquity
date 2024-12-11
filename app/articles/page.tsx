import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./index.module.scss";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

export default async function Page() {
  const ARTICLE_CATEGORY_ID = 3;
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {
    categories: ARTICLE_CATEGORY_ID,
  })
    .catch((error) => {
      console.log(error);
    })
    .catch(intentionallyIgnoreError);
  if (!data) {
    notFound();
  }
  return (
    <body>
      <div className={styles.container}>
        <Navbar />
        <Posts posts={data} />
        <Footer />
      </div>
    </body>
  );
}
