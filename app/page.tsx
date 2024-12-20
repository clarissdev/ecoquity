import { Metadata } from "next";

import Footer from "./_containers/Footer";
import Main from "./_containers/Main";
import Navbar from "./_containers/Navbar";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Ecoquity",
  description: "Sample Description",
  viewport: {
    width: "device-width",
    initialScale: 0.75,
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
