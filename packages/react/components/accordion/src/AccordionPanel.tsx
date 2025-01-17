import { forwardRef, Ref, useEffect, useRef, useState } from "react";
import { AccordionPanelProps } from "./types";
import { clsx } from "clsx";
import { accordionPanelStyle, panelHeight } from "./style.css";
import { useAccordionContext } from "./AccordionContext";
import { assignInlineVars } from '@vanilla-extract/dynamic';

const AccordionPanel = (props: AccordionPanelProps, ref: Ref<HTMLDivElement>) => {
  const {children, itemName='', style, className, ...rest} = props;
  const innerRef = useRef<HTMLDivElement>(null);

  const { activeItems } = useAccordionContext();
  const isActive = activeItems.includes(itemName);

  const [currenPanelHeight, setCurrentPanelHeight] = useState<string>();
  useEffect(() => {
    const handleResize = () => {
      if(!innerRef.current) return;
      setCurrentPanelHeight(`${innerRef.current.clientHeight}px`)
    }
    if(!innerRef.current) return;
    if(isActive) {
      handleResize();
      
      const observer = new MutationObserver(handleResize);
      observer.observe(innerRef.current, {
        childList: true,
        subtree: true,
      });

      return () => {
        observer.disconnect();
      }
    } else {
      setCurrentPanelHeight("0");
    }
  },[isActive, activeItems]);

  return (
    <div
      {...rest}
      ref={ref}
      data-action-item={isActive}
      className={clsx([accordionPanelStyle, className])}
      style={{
        ...assignInlineVars({
          [panelHeight]: currenPanelHeight ?? `${innerRef.current?.clientHeight}px`,
        }),
        ...style,
      }}
    >
      <div data-name="panel-inner" ref={innerRef}>
        {children}
      </div>
    </div>
  );
}

const _AccordionPanel = forwardRef(AccordionPanel);
export {_AccordionPanel as AccordionPanel};