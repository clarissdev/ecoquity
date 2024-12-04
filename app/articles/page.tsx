import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./index.module.scss";
import { httpGet$GetPosts } from "@/modules/commands/GetPosts/fetcher";
import Navbar from "../_containers/Navbar";
import Footer from "../_containers/Footer";
import Posts from "../_containers/Posts";

export default async function Page() {
  // const data = await httpGet$GetPosts(`/posts`, {}).catch((error) => {
  //   console.log(error);
  // });
  // if (!data) {
  //   notFound();
  // }
  return (
    <div className={styles.container}>
      <Navbar />
      <Posts />
      <Footer />
    </div>
  );
}
