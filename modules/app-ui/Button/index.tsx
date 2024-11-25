import styles from "./index.module.scss";
import cx from "clsx";
import React from "react";
import CircularProgress$Indeterminate from "../CircularProgress/components/CircularProgress$Indeterminate";
import Link from "./containers/Link";

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
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  /**
   * If onClick() is running, loading and disabled are automatically set to true.
   */
  smart?: boolean;

  // display props
  size?: keyof typeof SIZE | [string];
  color?: keyof typeof COLOR | [string];
  border?: keyof typeof BORDER | [string];
  padding?: keyof typeof PADDING | [string];
};

type ForwardedProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Props = OwnProps & Omit<ForwardedProps, keyof OwnProps>;

export type Button$Props = Props;

const Button = React.forwardRef<HTMLButtonElement, Props>(function Button(
  {
    className,
    style,
    content,
    children = content,
    icon,
    iconRight,
    color = "primary",
    size = "md",
    border = "none",
    padding = "medium",
    loading = false,
    onClick,
    disabled,
    smart = true,
    ...others
  }: Props,
  ref
) {
  const [running, setRunning] = React.useState(false);

  if (smart && running) {
    disabled = true;
    loading = true;
  }
  return (
    <button
      ref={ref}
      className={cx(
        styles.container,
        className,
        Array.isArray(color) ? color : COLOR[color],
        Array.isArray(size) ? size : SIZE[size],
        Array.isArray(border) ? border : BORDER[border],
        Array.isArray(padding) ? padding : PADDING[padding],
        loading ? styles.loading : null
      )}
      style={style}
      disabled={disabled}
      title={typeof children === "string" ? children : undefined}
      onClick={(event) => {
        const returnValue: unknown = onClick?.(event);
        if (smart && returnValue instanceof Promise) {
          setRunning(true);
          returnValue.finally(() => {
            setRunning(false);
          });
        }
      }}
      {...others}
    >
      <div className={styles.content}>
        {icon ? <div className={styles.icon}>{icon}</div> : null}
        {children ? <div className={styles.children}>{children}</div> : null}
        {iconRight ? <div className={styles.icon}>{iconRight}</div> : null}
        {loading ? (
          <div className={styles.circularProgressContainer}>
            <CircularProgress$Indeterminate size="24px" />
          </div>
        ) : null}
      </div>
    </button>
  );
});

export default Object.assign(Button, { Link });
