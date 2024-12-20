import cx from "clsx";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail, MdFacebook } from "react-icons/md";

import Logo from "./components/Logo";
import styles from "./index.module.scss";

import Flex from "@/modules/app-ui/Flex";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Footer({ className, style }: Props) {
  return (
    <footer className={cx(className, styles.container)} style={style}>
      <div>
        <Flex.Row
          justifyContent="space-between"
          alignItems="center"
          paddingBottom="3rem"
          className={styles.content}
          gap="12px"
        >
          <Flex.Cell className={styles.colorPrimary}>
            <Logo height={53} className={styles.bigLogo} />
            <Logo height={32} className={styles.smallLogo} />
          </Flex.Cell>
          <Flex.Row gap="12px" alignItems="center" flexWrap="wrap">
            <Flex.Cell>
              <span>Contact Us:</span>
            </Flex.Cell>
            <Flex.Row gap="12px" alignItems="center">
              <Link
                className={styles.linkIcon}
                target="_blank"
                rel="noreferrer"
                href="mailto:ecoquity-vinuni@gmail.com"
              >
                <MdEmail />
              </Link>
              <Link
                className={styles.linkIcon}
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=61565418491283"
              >
                <MdFacebook />
              </Link>
              <Link
                className={styles.linkIcon}
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/ecoquity_vinuni"
              >
                <AiFillInstagram />
              </Link>
            </Flex.Row>
          </Flex.Row>
        </Flex.Row>
        <Flex.Row
          className={styles.borderTop}
          paddingTop="3rem"
          justifyContent="center"
        >
          © 2024 VinUni Sustainablility Club. All rights reserved.
        </Flex.Row>
      </div>
    </footer>
  );
}
