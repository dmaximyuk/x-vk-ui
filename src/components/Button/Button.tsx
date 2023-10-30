import "./Button.sass";

import { type FC } from "react";
import classNames from "classnames";

import { Spinner, Line } from "../";

import type { ButtonProps } from "./Button.interface";

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      disabled={props.isDisable || props.isLoading}
      className={classNames({
        Button: true,
        [`Button--${props.mode || "primary"}`]: true,
        [`Button_size--${props.size || "s"}`]: true,
        Button_disable: !!props.isDisable || !!props.isLoading,
      })}
    >
      <Line gap={6}>
        {props.isLoading && <Spinner size={"s"} />}
        {props.children}
      </Line>
    </button>
  );
};
