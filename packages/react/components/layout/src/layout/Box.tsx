import { createElement, forwardRef, Ref } from "react";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { extractSparkleProps } from "../utils/properties";
import { StyleSprinkles } from "../core/style.css";
import { vars } from "@fastcampus/themes";

const Box = (props: BoxProps, ref: Ref<HTMLElement>) => {
  const { as="div", color, background, children } = props;

  return createElement(as, {
    ... props,
    ref,
    style: { 
      color: vars.colors.$scale?.[color]?.[700] ?? color,
      background: vars.colors.$scale?.[background]?.[100] ?? background,
      ...props.style
     },
    className: clsx([StyleSprinkles(extractSparkleProps(props, Array.from(StyleSprinkles.properties))), props.className]),
    
  }, children);
}

const _Box = forwardRef(Box);
export { _Box as Box };