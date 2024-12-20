import { Metadata } from "next";

import Footer from "./_containers/Footer";
import Main from "./_containers/Main";
import Navbar from "./_containers/Navbar";
import styles from "./page.module.scss";

import { THUMBNAIL_URL } from "@/modules/app-config";

export const metadata: Metadata = {
  title: "Ecoquity",
  description:
    "Welcome to Ecoquity, VinUniversity's student-led sustainability club " +
    "dedicated to fostering a greener future. Explore our initiatives, " +
    "articles, and events that empower students to embrace sustainability " +
    "and drive positive change in Vietnam. Join us on our journey towards a" +
    " sustainable campus and community!",
  openGraph: {
    images: [{ url: THUMBNAIL_URL }],
  },
};

export default function Page() {
  return (
    <body>
      <div className={styles.container}>
        <Navbar />
        <Main></Main>
        <Footer></Footer>
      </div>
    </body>
  );
}
