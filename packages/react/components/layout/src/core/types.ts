// BOX props가 다양한 props 들에게(TEXT) 전역으로 사용되기 때문에 core에서 사용하게 만든다

import { StyleSprinkles } from "./style.css";
import { vars } from '@fastcampus/themes';

type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>
}

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;



type ColorProps = {
  color?: keyof typeof vars.colors.$scale;
  background?: keyof typeof vars.colors.$scale;
}

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;

// // 이 예시에서는 T가 name 속성을 가진 객체만 받도록 제약을 둡니다
// function identity<T extends { name: string }>(arg: T): T {
//   return arg;
// }

// // 이 예시에서는 T가 string 속성을 가진 값만 받도록 제약을 둡니다
// function identity<T extends string>(arg: T): T {
//   return arg;
// }

// // 이 예시에서는 T를 유연하게 줄 수 있다 어떤 타입이든 가능하다 다만 타입이 정해지면 그 타입으로 써야 한다
// function identity<T>(arg: T): T {
//   return arg;
// }

// // 요소를 표현할 때와 속성을 표현할 떄를 구분하자
// // 요소를 표현할 떄는 HTMLDivElement
// // 속성을 표현할때는 <React.HTMLAttributes<HTMLElement>> <속성<요소>>