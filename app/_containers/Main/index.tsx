import cx from "clsx";

import SectionAboveTheFold from "./containers/SectionAboveTheFold";
import styles from "./index.module.scss";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Main({ className, style }: Props) {
  return (
    <main className={cx(styles.container, className)} style={style}>
      <SectionAboveTheFold />
    </main>
  );
}
