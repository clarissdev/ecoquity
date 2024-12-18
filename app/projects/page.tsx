import { notFound } from "next/navigation";

import Footer from "../_containers/Footer";
import Navbar from "../_containers/Navbar";

import Main from "./_containers/Main";
import styles from "./page.module.scss";

import { PROJECT_CATEGORY_ID } from "@/modules/app-config";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

export default async function Page() {
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {
    categories: [PROJECT_CATEGORY_ID],
  }).catch(intentionallyIgnoreError);
  if (!data) {
    notFound();
  }

  return (
    <body>
      <div className={styles.container}>
        <Navbar />
        <Main posts={data} />
        <Footer />
      </div>
    </body>
  );
}
