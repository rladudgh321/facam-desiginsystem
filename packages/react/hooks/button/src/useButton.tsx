import { BaseButtonProps, OverloadedButtonFunction } from "./types";

export const useButton: OverloadedButtonFunction = (props: any): any => {
  const {
    elementType = "button",
    type = "button",
    isDisabled,
    isLoading,
    tabIndex,
    onKeyDown,
  } = props;

  const disabled = isDisabled | isLoading;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    onKeyDown?.(e); // 외부에서 전달된 onKeyDown 콜백 실행
    if(e.key === 'Space' || e.code === "Space" || e.key === " ") {
      if(disabled) return;
      if(e.defaultPrevented) return;
      if(elementType === 'button') return;

      e.preventDefault(); // 기본 동작(예: 폼 제출) 방지
      (e.currentTarget as HTMLElement).click(); // 버튼 클릭 이벤트 발생
      return;
    }

    if (e.key === "Enter" || e.code === "Enter") { // Enter 키 또는 키코드 13인 경우
      if(disabled) return;
      if(e.defaultPrevented) return;
      if(elementType === 'input' &&  type !== 'button') return;

      e.preventDefault(); // 기본 동작(예: 폼 제출) 방지
      (e.currentTarget as HTMLElement).click(); // 버튼 클릭 이벤트 발생
      return;
    }

  };
  const baseProps = {
    ...props,
    "data-loading": isLoading,
    tabIndex: disabled ? -1 : tabIndex ?? 0,
    onKeyDown: handleKeyDown
  }

  let additionalProps = {};

  switch(elementType) {
    case "button" : {
      additionalProps = {
        type: type ?? "button",
        disabled,
      }
      break;
    }

    case "a": {
      const { href, target, rel } = props as BaseButtonProps<"a">;
      additionalProps = {
        role: "button",
        href: disabled ? undefined : href,
        target: disabled ? undefined :target,
        rel: disabled ? undefined : rel,
        "area-disabled": isDisabled,
      }
      break;
    }

    case "input": {
      additionalProps = {
        role: "button",
        type: type ?? "button",
        "area-disabled": isDisabled,
      }
      break;
    }

    default: {
      additionalProps = {
        role: "button",
        type: type ?? "button",
        "area-disabled": isDisabled
      }
    }
      break;
  }

  const buttonProps = {
    ...baseProps,
    ...additionalProps,
  }

  return {
    buttonProps,
  }
}