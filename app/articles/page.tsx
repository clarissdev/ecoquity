import Link from "next/link";
import { notFound } from "next/navigation";

import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";

export default async function Page() {
  const data = await httpGet$GetPosts(`/posts`, {}).catch((error) => {
    console.log(error);
  });
  if (!data) {
    notFound();
  }
  return (
    <div>
      <h1>List Article</h1>
      {data.map((post) => (
        <div key={post.id.toString()}>
          <Link
            href={`/articles/${post.slug}`}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></Link>
        </div>
      ))}
    </div>
  );
}
