import { notFound } from "next/navigation";
import { z } from "zod";

import { Main } from "./_containers/Main";
import styles from "./page.module.scss";

import Footer from "@/app/_containers/Footer";
import Navbar from "@/app/_containers/Navbar";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
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
  const data = await httpGet$GetPosts(`/posts`, { slug }).catch(
    intentionallyIgnoreError,
  );
  if (!data) {
    notFound();
  }
  const post = data[0];
  return (
    <div className={styles.container}>
      <Navbar />
      <Main post={post} />
      <Footer></Footer>
    </div>
  );
}
