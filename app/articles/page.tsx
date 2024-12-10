import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./index.module.scss";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

export default async function Page() {
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {})
    .catch((error) => {
      console.log(error);
    })
    .catch(intentionallyIgnoreError);
  if (!data) {
    notFound();
  }
  return (
    <body>
      <h1>List Article</h1>
      {data.map((post) => (
        <div key={post.id.toString()}>
          <Link
            href={`/articles/${post.slug}`}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></Link>
        </div>
      ))}
    </body>
  );
}
