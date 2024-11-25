import styles from "./page.module.scss";
import Navbar from "./_containers/Navbar";
import Main from "./_containers/Main";

export default function Page() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Main></Main>
    </div>
  );
}
