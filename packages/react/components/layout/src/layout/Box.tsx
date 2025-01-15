import { createElement, forwardRef, Ref } from "react";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { extractSparkleProps } from "../utils/properties";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { vars } from "@fastcampus/themes";

const Box = (props: BoxProps, ref: Ref<HTMLElement>) => {
  const { as="div", color, background, children } = props;
  return createElement(as, {
    ... props,
    ref,
    style: { 
      color: color && vars.colors.$scale?.[color]?.[700],
      background: background && vars.colors.$scale?.[background]?.[100],
      ...props.style
     },
    //  StyleSprinkles(props)를 할경우 MarginAndPaddingProperties, BorderStyleProperties, BoxShadowStyleProps것 만 들어가야하는데
    //  AsElementProps에 관한 것도 들어가기 때문에 오류가 발생된다
    //  그래서 extractSparkleProps를 사용하여 걸러준다
    className: clsx([
      BaseStyle,
      StyleSprinkles(extractSparkleProps(props, Array.from(StyleSprinkles.properties))), props.className]),
    
  }, children);
}

const _Box = forwardRef(Box);
export { _Box as Box };