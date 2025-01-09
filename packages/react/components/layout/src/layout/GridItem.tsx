import { createElement, forwardRef, Ref } from "react";
import { GridItemProps } from "./types";
import { vars } from "@fastcampus/themes";

const GridItem = (props: GridItemProps, ref: Ref<HTMLElement>) => {
  const { as="div", color, background, children, area, colEnd, colSpan, colStart, rowEnd, rowSpan, rowStart } = props;
  return createElement(as, {
    style:{
      ref,
      color: color && vars.colors.$scale?.[color]?.[700],
      background: background && vars.colors.$scale?.[background]?.[100],
      gridArea: area,
      gridColumnEnd: colEnd,
      columnSpan: colSpan,
      colStart,
      rowEnd,
      rowSpan,
      rowStart,
    }
  }, children)
}

const _GridItem = forwardRef(GridItem);

export { _GridItem as GridItem }