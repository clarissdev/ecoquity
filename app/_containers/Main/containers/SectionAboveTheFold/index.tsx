import cx from "clsx";
import Image from "next/image";

import jpgFigure from "./assets/figure.jpg";
import styles from "./index.module.scss";

import Button from "@/modules/app-ui/Button";
import Flex from "@/modules/app-ui/Flex";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function SectionAboveTheFold({ className, style }: Props) {
  return (
    <section className={cx(styles.container, className)} style={style}>
      <Flex.Row flexWrap="wrap" className={styles.content}>
        <Flex.Col
          flex="1 1 300px"
          justifyContent="center"
          gap="24px"
          className={styles.row}
        >
          <h1>Ecoquity: Young People Taking Action for a Sustainable Future</h1>
          <p>
            Ecoquity is more than just a club. Born out of urgency and hope
            during a record-breaking summer, Ecoquity empowers students to take
            the lead in building a sustainable future.
          </p>
          <div>
            <Button.Link href="">Explore Our Articles</Button.Link>
          </div>
        </Flex.Col>
        <Flex.Row
          flex="1 1 300px"
          justifyContent="center"
          className={styles.row}
        >
          <Image
            className={styles.figure}
            width="400"
            src={jpgFigure}
            alt="figure"
          />
        </Flex.Row>
      </Flex.Row>
    </section>
  );
}
