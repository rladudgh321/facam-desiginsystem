import { createElement, forwardRef, Ref } from "react";
import { HeadingProps } from "./types";
import { vars } from "@fastcampus/themes";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSparkleProps } from "../utils/properties";
import { headingStyle } from "./style.css";

const Heading = (props: HeadingProps, ref: Ref<HTMLElement>) => {
  const {as="p", color="cyan", background, fontSize, children} = props;
  return createElement(as, {
      ...props,
      ref,
      style: { 
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style
       },
      className: clsx([
        StyleSprinkles(extractSparkleProps(props, Array.from(StyleSprinkles.properties))), 
        headingStyle({
          fontSize
        }),
        props.className
      ]),

    }, children);
}

const _Heading = forwardRef(Heading);
export { _Heading as Heading };