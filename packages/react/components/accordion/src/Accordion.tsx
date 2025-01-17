import { forwardRef, Ref, useCallback, useState } from "react";
import { AccordionProps } from "./types";
import AccordionContext from "./AccordionContext";
import { clsx } from "clsx";
import { accordionStyle } from "./style.css";

const Accordion = (props: AccordionProps, ref: Ref<HTMLDivElement>) => {
  const { defaultActiveItems = [], children, className, ...rest } = props;

  const [activeItems, setActiveItems] = useState<string[]>(defaultActiveItems);

  const handleSetActiveItem = useCallback((item: string) => {
    if(activeItems.includes(item)) {
      setActiveItems(activeItems.filter((activeItem) => activeItem !== item))
    } else {
      setActiveItems([...activeItems, item])
    }
  },[activeItems]);

  return (
  <AccordionContext.Provider value={{activeItems, setActiveItem: handleSetActiveItem}}>
    <div 
      {...rest}
      className={clsx([accordionStyle, className])}
      ref={ref}
    >
      {children}
    </div>
  </AccordionContext.Provider>
  )
}

const _Accordion = forwardRef(Accordion);
export { _Accordion as Accordion };