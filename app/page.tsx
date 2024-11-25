import Main from "./_containers/Main";
import Navbar from "./_containers/Navbar";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Main></Main>
    </div>
  );
}
