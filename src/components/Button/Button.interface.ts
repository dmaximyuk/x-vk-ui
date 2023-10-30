import type { HTMLAttributes } from "react";

type ButtonMode = "primary" | "secondary";
type ButtonSize = "s" | "m" | "l";

export interface ButtonProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  mode?: ButtonMode;
  size?: ButtonSize;

  isLoading?: boolean;
  isDisable?: boolean;
}
