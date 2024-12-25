"use client";

import cx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../Footer/components/Logo";

import styles from "./index.module.scss";

import { Lang } from "@/modules/app-config";
import Flex from "@/modules/app-ui/Flex";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  dictionary: Record<string, string>;
  lang: Lang;
};

export default function Navbar({ className, style, dictionary, lang }: Props) {
  const pathname = usePathname();
  console.log("VAI", `/en` + pathname.substring(3));
  return (
    <nav className={cx(styles.container, className)} style={style}>
      <div className={styles.content}>
        <Link href={`/${lang}`} className={styles.link}>
          <Logo.Compress height={52} className={styles.logo} />
          <Logo.Compress height={30} className={styles.logoCompress} />
        </Link>
        <Flex.Row gap="16px">
          <Link href={`/${lang}/articles`} className={styles.link}>
            {dictionary.articles}
          </Link>
          <Flex.Row gap="8px">
            <Link
              href={
                !pathname.startsWith("/en")
                  ? `/en` + pathname.substring(3)
                  : "#disabled"
              }
              className={styles.link}
            >
              EN
            </Link>
            <hr className={styles.divider}></hr>
            <Link
              href={
                !pathname.startsWith("/vi")
                  ? `/vi` + pathname.substring(3)
                  : "#disabled"
              }
              className={styles.link}
            >
              VI
            </Link>
          </Flex.Row>
        </Flex.Row>
      </div>
    </nav>
  );
}
