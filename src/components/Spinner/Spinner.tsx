import "./Spinner.sass";

import { type FC, useMemo } from "react";
import classNames from "classnames";

import type { SpinnerProps } from "./Spinner.interface";

export const Spinner: FC<SpinnerProps> = (props) => {
  const size = useMemo(() => {
    switch (props.size) {
      case "s":
      case "l":
      case "m":
        return `var(--spinner_size--${props.size})`;
      default:
        return props.size;
    }
  }, [props.size]);

  return (
    <div
      {...props}
      className={classNames({
        Spinner: true,
        [`${props.className}`]: !!props.className,
      })}
    >
      <svg
        color={props.color}
        stroke={props.color}
        style={{
          height: `${size}`,
          width: `${size}`,
        }}
        fill="red"
        viewBox="0 0 50 50"
      >
        <circle className="Spinner__path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </svg>
    </div>
  );
};
