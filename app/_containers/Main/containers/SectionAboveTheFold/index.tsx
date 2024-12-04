"use client";
import cx from "clsx";
import Image from "next/image";

import jpgFigure from "./assets/figure.jpg";
import styles from "./index.module.scss";

import Button from "@/modules/app-ui/Button";
import Flex from "@/modules/app-ui/Flex";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function SectionAboveTheFold({ className, style }: Props) {
  useGSAP(() => {
    gsap.fromTo(
      "#h1",
      {
        x: -200,
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
      "#p",
      {
        y: -100,
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
      "#p",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.25,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      "#img",
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
    gsap.fromTo(
      "#p",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.75,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      "#button",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.75,
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
          <h1 id="h1">
            Ecoquity: Young People Taking Action for a Sustainable Future
          </h1>
          <p id="p">
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
            id="img"
          />
        </Flex.Row>
      </Flex.Row>
    </section>
  );
}
