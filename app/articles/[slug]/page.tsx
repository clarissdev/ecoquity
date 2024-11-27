import { notFound } from "next/navigation";
import { z } from "zod";

import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";

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
  const data = await httpGet$GetPosts(`/posts`, { slug }).catch((error) => {
    console.log(error);
  });
  if (!data) {
    notFound();
  }
  const post = data[0];
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
      <div>Author: {post.author}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
    </div>
  );
}
