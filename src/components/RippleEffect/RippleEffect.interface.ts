import type { HTMLAttributes } from "react";

export interface RippleEffectProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  onClick?: () => void;
  color?: string;
}
