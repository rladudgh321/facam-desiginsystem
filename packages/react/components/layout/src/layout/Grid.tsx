import { createElement, forwardRef, Ref } from "react";
import { GridProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSparkleProps } from "../utils/properties";
import { vars } from "@fastcampus/themes";

const Grid = (props: GridProps, ref: Ref<HTMLElement>) => {
  const { as= "div", color, background, children, autoColumns, autoFlow, autoRows, column, columnGap, gap, row, rowGap, templateAreas, templateColumns, templateRows } = props;
  return createElement(as, {
    ...props,
    ref,
    className: clsx([
      StyleSprinkles(extractSparkleProps(props, Array.from(StyleSprinkles.properties))), props.className,
    ]),
    style: {
      display: "grid",
      gridAutoColumns: autoColumns,
      gridAutoFlow: autoFlow,
      gridAutoRows: autoRows,
      gridColumn: column,
      gridColumnGap: columnGap,
      gridRow: row,
      gap,
      rowGap,
      gridTemplateAreas: templateAreas,
      gridTemplateColumns: templateColumns,
      gridTemplateRows: templateRows,
      color: color && vars.colors.$scale?.[color]?.[700],
      background: background && vars.colors.$scale?.[background]?.[100]
    }
  }, children)
}

const _Grid = forwardRef(Grid);
export { _Grid as Grid };