import { vars } from "@fastcampus/themes"

export type ButtonProps = {
  color?: keyof typeof vars.colors.$scale;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  variant?: "ghost" | "outline" | "solid"
} & React.ButtonHTMLAttributes<HTMLButtonElement>