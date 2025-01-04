import { createElement, forwardRef, Ref } from "react";
import { BoxProps } from "./types";

const Box = (props: BoxProps, ref: Ref<HTMLElement>) => {
  const { as="div", children } = props;

  return createElement(as, {
    ... props,
    ref,
    className: props.className,
  }, children);
}

const _Box = forwardRef(Box);
export { _Box as Box };