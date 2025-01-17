import { Children, cloneElement, forwardRef, isValidElement, Ref } from "react";
import { AccordionItemProps } from "./types";
import { clsx } from "clsx";
import { accordionItemStyle } from "./style.css";

const AccordionItem = (props: AccordionItemProps, ref: Ref<HTMLDivElement>) => {
  const {children, itemName, className, ...rest} = props;
  const childrenWithProps = Children.toArray(children);
  const accordionItemChildren = childrenWithProps.map((child) => {
    if(isValidElement(child)) {
      return cloneElement(child, { ...child.props, itemName })
    }
    return null;
  })
  return (
    <div
      {...rest}
      className={clsx([accordionItemStyle, className])}
      ref={ref}

    >
      {accordionItemChildren}
    </div>
  )
}

const _AccordionItem = forwardRef(AccordionItem);
export { _AccordionItem as AccordionItem };