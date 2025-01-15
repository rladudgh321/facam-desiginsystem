import { createElement, forwardRef, Ref } from "react";
import { TextProps } from "./types";
import { vars } from "@fastcampus/themes";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSparkleProps } from "../utils/properties";
import { textStyle } from "./style.css";

const Text = (props: TextProps, ref: Ref<HTMLElement>) => {
  const {as="p",color="cyan", background, fontSize, children} = props;
  return createElement(as, {
      ...props,
      ref,
      style: { 
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style
       },
      className: clsx([
        BaseStyle,
        StyleSprinkles(extractSparkleProps(props, Array.from(StyleSprinkles.properties))), 
        textStyle({
          fontSize
        }),
        props.className
      ]),

    }, children);
}

const _Text = forwardRef(Text);
export { _Text as Text };