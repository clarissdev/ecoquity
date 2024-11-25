import { Slot as RxSlot } from "@radix-ui/react-slot";
import React from "react";

type FlexKeys =
  | "alignContent"
  | "alignItems"
  | "alignSelf"
  | "alignTracks"
  | "boxSizing"
  | "columnGap"
  | "display"
  | "flex"
  | "flexBasis"
  | "flexDirection"
  | "flexFlow"
  | "flexGrow"
  | "flexShrink"
  | "flexWrap"
  | "gap"
  | "justifyContent"
  | "justifyItems"
  | "justifySelf"
  | "justifyTracks"
  | "maxHeight"
  | "maxWidth"
  | "minHeight"
  | "minWidth"
  | "padding"
  | "paddingBlock"
  | "paddingBlockEnd"
  | "paddingBlockStart"
  | "paddingBottom"
  | "paddingInline"
  | "paddingInlineEnd"
  | "paddingInlineStart"
  | "paddingLeft"
  | "paddingRight"
  | "paddingTop"
  | "rowGap";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ComponentProps<typeof RxSlot>["children"];
  asChild?: boolean;
} & Pick<React.CSSProperties, FlexKeys>;

const Row = React.forwardRef<HTMLDivElement, Props>(function Row(
  { className, style, children, asChild, ...others }: Props,
  ref
) {
  const Component = asChild ? RxSlot : "div";
  return (
    <Component
      className={className}
      style={{ display: "flex", flexDirection: "row", ...others, ...style }}
      ref={ref}
    >
      {children}
    </Component>
  );
});

const Col = React.forwardRef<HTMLDivElement, Props>(function Col(
  { className, style, children, asChild, ...others }: Props,
  ref
) {
  const Component = asChild ? RxSlot : "div";
  return (
    <Component
      className={className}
      style={{ display: "flex", flexDirection: "column", ...others, ...style }}
      ref={ref}
    >
      {children}
    </Component>
  );
});

const Cell = React.forwardRef<HTMLDivElement, Props>(function Cell(
  { className, style, children, asChild, ...others }: Props,
  ref
) {
  const Component = asChild ? RxSlot : "div";
  return (
    <Component className={className} style={{ ...others, ...style }} ref={ref}>
      {children}
    </Component>
  );
});

const Flex = { Row, Col, Cell };

export default Flex;
