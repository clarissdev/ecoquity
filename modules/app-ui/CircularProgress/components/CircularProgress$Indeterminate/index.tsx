// Reverse-engineered from https://mui.com/material-ui/react-progress/

import cx from "clsx";
import React from "react";

import styles from "./index.module.scss";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  size?: string | number;
  color?: string;
};

export default function CircularProgress$Indeterminate({
  className,
  style,
  size,
  color,
}: Props) {
  return (
    <svg
      className={cx(styles.container, className)}
      style={{ fontSize: size, color, ...style }}
      viewBox="22 22 44 44"
    >
      <circle
        className={styles.circle}
        cx="44"
        cy="44"
        r="20.2"
        fill="none"
        strokeWidth="3.6"
      ></circle>
    </svg>
  );
}
