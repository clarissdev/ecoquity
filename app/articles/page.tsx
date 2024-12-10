import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./index.module.scss";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import Navbar from "../_containers/Navbar";
import Footer from "../_containers/Footer";
import Posts from "./_containers/SectionPosts";
import { intentionallyIgnoreError } from "@/modules/error/intentionallyIgnoreError";


export default async function Page() {
  const data = await httpGet$GetPosts(`/wp-json/wp/v2/posts`, {categories: 3})  // 3 coresponding to "article" category
    .catch((error) => {
      console.log(error);
    })
    .catch(intentionallyIgnoreError);
  if (!data) {  
    notFound();
  }
  
  return (
    <body>
      <div className={styles.container}>c
        <Navbar />
        <Posts posts = {data} />
        <Footer />
      </div>
    </body>

  );
}
