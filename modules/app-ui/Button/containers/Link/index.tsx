import styles from "./index.module.scss";
import cx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

const SIZE = {
  inherit: "",
  xs: styles.sizeXs,
  "xs-square": styles.sizeXsSquare,
  sm: styles.sizeSm,
  "sm-square": styles.sizeSmSquare,
  md: styles.sizeMd,
  "md-square": styles.sizeMdSquare,
  lg: styles.sizeLg,
  "lg-square": styles.sizeLgSquare,
  xl: styles.sizeXl,
  "xl-square": styles.sizeXlSquare,
};

const COLOR = {
  inherit: "",
  primary: styles.colorPrimary,
};

const BORDER = {
  inherit: "",
  none: styles.borderNone,
  solid: styles.borderSolid,
};

const PADDING = {
  inherit: "",
  medium: styles.paddingMedium,
  small: styles.paddingSmall,
  minimal: styles.paddingMinimal,
};

type OwnProps = {
  className?: string;
  style?: React.CSSProperties;
  content?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  href: Url;
  disabled?: boolean;

  // display props
  size?: keyof typeof SIZE | [string];
  color?: keyof typeof COLOR | [string];
  border?: keyof typeof BORDER | [string];
  padding?: keyof typeof PADDING | [string];
};

type ForwardedProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = OwnProps & Omit<ForwardedProps, keyof OwnProps>;

export default function ButtonLink({
  className,
  style,
  content,
  children = content,
  icon,
  iconRight,
  color = "primary",
  size = "md",
  href,
  border = "none",
  padding = "medium",
  onClick,
  disabled,
  ...others
}: Props) {
  return (
    <Link
      className={cx(
        styles.container,
        className,
        Array.isArray(color) ? color : COLOR[color],
        Array.isArray(size) ? size : SIZE[size],
        Array.isArray(border) ? border : BORDER[border],
        Array.isArray(padding) ? padding : PADDING[padding]
      )}
      style={style}
      href={href}
      title={typeof children === "string" ? children : undefined}
      {...others}
    >
      <div className={styles.content}>
        {icon ? <div className={styles.icon}>{icon}</div> : null}
        {children ? <div className={styles.children}>{children}</div> : null}
        {iconRight ? <div className={styles.icon}>{iconRight}</div> : null}
      </div>
    </Link>
  );
}
