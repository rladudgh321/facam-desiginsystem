import { forwardRef, Ref } from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import { activeColorVariant, buttonStyle, enableColorVariant, hoverColorVariant, spanStyle, spinnerStyle } from "./style.css";
import { vars } from "@fastcampus/themes";
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useButton } from '@fastcampus/react-hooks-button';
const Button = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { buttonProps } = useButton(props);
  const { 
    variant="solid",
    size="md",
    color="gray",
    children,
    leftIcon,
    rightIcon,
    isLoading,
    style,
  } = props;
  const enableColor = vars.colors.$scale?.[color]?.[500];
  const hoverColor = variant === 'solid' ? vars.colors.$scale?.[color]?.[600] : vars.colors.$scale?.[color]?.[50];
  const activeColor = variant === 'solid' ? vars.colors.$scale?.[color]?.[700] : vars.colors.$scale?.[color]?.[100];

  

  return (
    <button 
    {...buttonProps} 
    // ^기능
      ref={ref} 
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}
      className={clsx([buttonStyle({size, variant})])}
    >
      {isLoading && <div className={spinnerStyle({size})} />}
      {leftIcon && <span className={spanStyle({size})}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({size})}>{rightIcon}</span>}
    </button>
  );
}

const _Button = forwardRef(Button);
export { _Button as Button };