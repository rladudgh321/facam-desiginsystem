import { createElement, forwardRef, Ref } from "react";
import { GridItemProps } from "./types";
import { vars } from "@fastcampus/themes";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSparkleProps } from "../utils/properties";

const GridItem = (props: GridItemProps, ref: Ref<HTMLElement>) => {
  const { as="div", color, background, children, area, colEnd, colSpan, colStart, rowEnd, rowSpan, rowStart } = props;
  return createElement(as, {
    ...props,
    ref,
    className: clsx([
      BaseStyle,
      StyleSprinkles(extractSparkleProps(props, Array.from(StyleSprinkles.properties))),
      props.className,
    ]),
    style:{
      gridArea: area,
      gridColumnEnd: colEnd,
      colStart,
      columnSpan: colSpan,
      rowEnd,
      rowSpan,
      rowStart,
      color: color && vars.colors.$scale?.[color]?.[700],
      background: background && vars.colors.$scale?.[background]?.[100],
      ...props.style,
    }
  }, children)
}

const _GridItem = forwardRef(GridItem);

export { _GridItem as GridItem }