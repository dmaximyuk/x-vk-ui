import "./Line.sass";

import { type FC } from "react";

import type { LineProps } from "./Line.interface";
import classNames from "classnames";

export const Line: FC<LineProps> = (props) => {
  return (
    <div
      className={classNames({
        Line: true,
        [`${props.className}`]: !!props.className,
      })}
      style={{
        gap: props.gap,
      }}
    >
      {props.children}
    </div>
  );
};
