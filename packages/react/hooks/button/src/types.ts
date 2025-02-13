// props로 button의 기능들을 받아와야 함
//  return으로 Button 또는 각 컴포넌트의 속성을 리턴 
//        => 버튼에서 필요한 속성도 추가

import { ComponentProps, HTMLAttributes } from "react";

export type ButtonElementType = "button" | "a" | "div" | "span" | "input";

export type BaseButtonProps<T extends ButtonElementType = "button"> = {
  elementType?: T;
  role?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean;
  tabIndex?: number;
} & ComponentProps<T>;

export type UseButtonReturn<T> = {
  buttonProps: HTMLAttributes<T> & {
    role?: string;
    type?: "button" | "submit" | "reset";
    tabIndex?: number;
    disabled?: boolean;
    "data-loading": boolean;
  };
};

export type OverloadedButtonFunction = {
  (props: BaseButtonProps<"button">): UseButtonReturn<HTMLButtonElement>;
  (props: BaseButtonProps<"a">): UseButtonReturn<HTMLAnchorElement>;
  (props: BaseButtonProps<"div">): UseButtonReturn<HTMLDivElement>;
  (props: BaseButtonProps<"input">): UseButtonReturn<HTMLInputElement>;
  (props: BaseButtonProps<"span">): UseButtonReturn<HTMLSpanElement>;
}

export type UseToggleButtonReturn<T> = UseButtonReturn<T> & {
  isSelected: boolean;
}

export type OverloadedToggleButtonFunction = {
  (props: BaseButtonProps<"button">, isSelected?: boolean): UseToggleButtonReturn<HTMLButtonElement>;
  (props: BaseButtonProps<"a">, isSelected?: boolean): UseToggleButtonReturn<HTMLAnchorElement>;
  (props: BaseButtonProps<"div">, isSelected?: boolean): UseToggleButtonReturn<HTMLDivElement>;
  (props: BaseButtonProps<"input">, isSelected?: boolean): UseToggleButtonReturn<HTMLInputElement>;
  (props: BaseButtonProps<"span">, isSelected?: boolean): UseToggleButtonReturn<HTMLSpanElement>;
};