import type { HTMLAttributes } from "react";

type SpinnerSize = "s" | "m" | "l" | string | number;
export interface SpinnerProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  size?: SpinnerSize;
  color?: string;
}
