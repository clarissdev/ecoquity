import cx from "clsx";
import Link from "next/link";

import Logo from "../Footer/components/Logo";

import styles from "./index.module.scss";

import Flex from "@/modules/app-ui/Flex";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Navbar({ className, style }: Props) {
  return (
    <nav className={cx(styles.container, className)} style={style}>
      <Link href="/" className={styles.link}>
        <Logo.Compress height={52} className={styles.logo} />
        <Logo.Compress height={30} className={styles.logoCompress} />
      </Link>
      <Flex.Row gap="16px">
        <Link href="/articles" className={styles.link}>
          Article
        </Link>
        <Link href="/about" className={styles.link}>
          About Us
        </Link>
      </Flex.Row>
    </nav>
  );
}
