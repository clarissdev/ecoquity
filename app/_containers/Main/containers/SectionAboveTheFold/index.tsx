"use client";
import { useGSAP } from "@gsap/react";
import cx from "clsx";
import gsap from "gsap";
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
  useGSAP(() => {
    gsap.fromTo(
      "h1",
      {
        x: -25,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      "p",
      {
        y: -25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      "img",
      {
        x: 0,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <section className={cx(styles.container, className)} style={style}>
      <Flex.Row flexWrap="wrap" className={styles.content}>
        <Flex.Col
          flex="1 1 300px"
          justifyContent="center"
          gap="24px"
          className={styles.row}
        >
          <h1 className="h1">
            Ecoquity: Young People Taking Action for a Sustainable Future
          </h1>
          <p className="p">
            Ecoquity is more than just a club. Born out of urgency and hope
            during a record-breaking summer, Ecoquity empowers students to take
            the lead in building a sustainable future.
          </p>
          <div>
            <Button.Link href="/articles">Explore Our Articles</Button.Link>
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
            priority
          />
        </Flex.Row>
      </Flex.Row>
    </section>
  );
}
