import { vars } from "@fastcampus/themes";
import { AsElementProps, StyleProps } from "../core/types";
import { CSSProperties } from "@vanilla-extract/css";
import { TextProps } from "../typography";

// 이렇게 만들면 주어진 파라미터 외에도 스타일이나 다양한 속성들을 커스터마이징이 용이
export type BoxProps = AsElementProps & StyleProps;

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
  color?: keyof typeof vars.colors.$scale;
  size?: number;
  variant?: 'solid' | 'dashed';
} & React.HTMLAttributes<HTMLHRElement>;

export type FlexProps = BoxProps & {
  align?: CSSProperties['alignItems'];
  basis?: CSSProperties['flexBasis'];
  direction?: CSSProperties['flexDirection'];
  grow?: CSSProperties['flexGrow'];
  justify?: CSSProperties['justifyContent'];
  shrink?: CSSProperties['flexShrink'];
  wrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
}

export type GridProps = BoxProps & {
  autoColumns?: CSSProperties['gridAutoColumns'];
  autoFlow?: CSSProperties['gridAutoFlow'];
  autoRows?: CSSProperties['gridAutoRows'];
  column?: CSSProperties['gridColumn'];
  columnGap?: CSSProperties['columnGap'];
  gap?: CSSProperties['gap']
  row?: CSSProperties['gridRow'];
  rowGap?: CSSProperties['rowGap'];
  templateAreas?: CSSProperties['gridTemplateAreas'];
  templateColumns?: CSSProperties['gridTemplateColumns'];
  templateRows?: CSSProperties['gridTemplateRows'];
}

export type GridItemProps = BoxProps & {
  area?: CSSProperties['gridArea'];
  colEnd?: number | "auto";
  colSpan?: number | "auto";
  colStart?: number | "auto";
  rowEnd?: number | "auto";
  rowSpan?: number | "auto";
  rowStart?: number | "auto";
}

export type ListProps = {
  variant?: "ordered" | "unordered";
  spacing?: keyof typeof vars.box.spacing;
} & BoxProps;

export type OrderListProps = Omit<ListProps, "variant">;
export type ListItemProps = TextProps;

export type UnorderedListProps = Omit<ListProps, "variant"> & {
  listStyleType?: CSSProperties["listStyleType"];
};