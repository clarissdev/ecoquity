import { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "../_containers/Footer";
import Navbar from "../_containers/Navbar";

import Main from "./_containers/Main";
import styles from "./page.module.scss";

import { ARTICLE_CATEGORY_ID } from "@/modules/app-config";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";

export const metadata: Metadata = {
  title: "All Articles",
  description:
    "Discover Ecoquity's collection of articles focused" +
    " on sustainability and environmental stewardship. Join us in exploring" +
    " innovative ideas, projects, and insights aimed at nurturing a sustainable" +
    " future for VinUniversity and Vietnam.",
  viewport: {
    width: "device-width",
    initialScale: 0.75,
  },
};

export default async function Page() {
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {
    categories: [ARTICLE_CATEGORY_ID],
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
