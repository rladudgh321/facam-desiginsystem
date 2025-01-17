import { Ref, useCallback, MouseEvent, forwardRef } from "react";
import { AccordionButtonProps } from "./types";
import { clsx } from "clsx";
import { accordionButtonStyle } from "./style.css";
import { useAccordionContext } from "./AccordionContext";
import { useButton } from '@fastcampus/react-hooks-button';

const AccordionButton = (props: AccordionButtonProps, ref: Ref<HTMLButtonElement>) => {
  const {children, itemName='', onClick, className, ...rest } = props;
  const { setActiveItem } = useAccordionContext();
  
  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setActiveItem(itemName);
    onClick?.(e);
  },[itemName, onClick, setActiveItem]);

  const {buttonProps} = useButton({
    ...rest,
    onClick: handleClick,
    elementType: 'button',
  })

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx([accordionButtonStyle, className])}
    >
      {children}
    </button>
  );
}

const _AccordionButton = forwardRef(AccordionButton);
export { _AccordionButton as AccordionButton };