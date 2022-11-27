import { styled, CSS } from "@nextui-org/react";

export interface IconProps {
  fill?: string;
  filled?: boolean;
  size?: string | number;
  height?: string | number;
  width?: string | number;
  label?: string;
  onClick?: () => void;
  className?: string;
  css?: CSS;
}

export const Icon = styled("svg", {});

export { default as Moon } from "./Moon";
export { default as Sun } from "./Sun";
export { default as ShopBag } from "./ShopBag";
export { default as Heart } from "./Heart";
export { default as GitHub } from "./GitHub";
export { default as RightArrow } from "./RightArrow";
export { default as User } from "./User";
