import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export type AccordionProps = {
  defaultActiveItems?: string[];
  children: React.ReactNode | React.ReactNode[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">

export type AccordionItemProps = {
  children: React.ReactNode[];
  itemName: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">

export type AccordionButtonProps = {
  itemName?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>

export type AccordionPanelProps = {
  itemName?: string;
} & HTMLAttributes<HTMLDivElement>