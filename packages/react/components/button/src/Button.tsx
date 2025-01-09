import { forwardRef, Ref } from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import { activeColorVariant, buttonStyle, enableColorVariant, hoverColorVariant, spanStyle, spinnerStyle } from "./style.css";
import { vars } from "@fastcampus/themes";
import { assignInlineVars } from '@vanilla-extract/dynamic';

const Button = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { 
    variant="solid",
    size="md",
    color="gray",
    isDisabled,
    children,
    leftIcon,
    rightIcon,
    isLoading,
    onKeyDown,
    style,
  } = props;
  const enableColor = vars.colors.$scale?.[color]?.[500];
  const hoverColor = variant === 'solid' ? vars.colors.$scale?.[color]?.[600] : vars.colors.$scale?.[color]?.[50];
  const activeColor = variant === 'solid' ? vars.colors.$scale?.[color]?.[700] : vars.colors.$scale?.[color]?.[100];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(e); // 외부에서 전달된 onKeyDown 콜백 실행

    if (e.key === 'Enter' || e.key === '13') { // Enter 키 또는 키코드 13인 경우
      e.preventDefault(); // 기본 동작(예: 폼 제출) 방지
      e.currentTarget.click(); // 버튼 클릭 이벤트 발생
    }
  };

  const disabled = isDisabled || isLoading;
  return (
    <button 
      onKeyDown={handleKeyDown}
      role="button"
      onClick={() => console.log('ttt')}
      ref={ref} 
      {...props} 
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}
      data-loading={isLoading}
      className={clsx([buttonStyle({size, variant})])}
      disabled={disabled}
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