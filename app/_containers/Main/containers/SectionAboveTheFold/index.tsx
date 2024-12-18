"use client";
import { config, animated } from "@react-spring/web";
import cx from "clsx";
import Image from "next/image";

import jpgFigure from "./assets/figure.jpg";
import { useAppearanceSpring } from "./hooks/useAppearanceStrings";
import styles from "./index.module.scss";

import Button from "@/modules/app-ui/Button";
import Flex from "@/modules/app-ui/Flex";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function SectionAboveTheFold({ className, style }: Props) {
  const appearanceSprings = {
    h1: useAppearanceSpring({
      from: { x: -25, opacity: 0 },
      to: {
        x: 0,
        opacity: 1,
      },
      config: config.gentle,
      delay: 125,
    }),
    p: useAppearanceSpring({
      from: {
        y: -25,
        opacity: 0,
      },
      to: {
        y: 0,
        opacity: 1,
      },
      config: config.gentle,
      delay: 125,
    }),
    divImg: useAppearanceSpring({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      config: config.gentle,
      delay: 125,
    }),
    divButton: useAppearanceSpring({
      from: {
        opacity: 0,
        y: 25,
      },
      to: { opacity: 1, y: 0 },
      config: config.gentle,
      delay: 500,
    }),
  };

  return (
    <section className={cx(styles.container, className)} style={style}>
      <Flex.Row flexWrap="wrap" className={styles.content}>
        <Flex.Col
          flex="1 1 300px"
          justifyContent="center"
          gap="24px"
          className={styles.row}
        >
          <animated.h1
            ref={appearanceSprings.h1.ref}
            style={appearanceSprings.h1.spring}
          >
            Ecoquity: Young People Taking Action for a Sustainable Future
          </animated.h1>
          <animated.p
            ref={appearanceSprings.p.ref}
            style={appearanceSprings.p.spring}
          >
            Ecoquity is more than just a club. Born out of urgency and hope
            during a record-breaking summer, Ecoquity empowers students to take
            the lead in building a sustainable future.
          </animated.p>
          <animated.div
            ref={appearanceSprings.divButton.ref}
            style={appearanceSprings.divButton.spring}
          >
            <Button.Link href="/articles">Explore Our Articles</Button.Link>
          </animated.div>
        </Flex.Col>
        <Flex.Row
          flex="1 1 300px"
          justifyContent="center"
          className={styles.row}
        >
          <animated.div
            ref={appearanceSprings.divImg.ref}
            style={appearanceSprings.divImg.spring}
          >
            <Image
              className={styles.figure}
              width="400"
              src={jpgFigure}
              alt="figure"
              priority
            />
          </animated.div>
        </Flex.Row>
      </Flex.Row>
    </section>
  );
}
