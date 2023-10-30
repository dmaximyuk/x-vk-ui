import "./Panel.sass";

import { type FC } from "react";
import classNames from "classnames";

import { PanelProps } from "./Panel.interface";

export const Panel: FC<PanelProps> = ({ className = "", children, pageHeader }) => {
  return (
    <>
      {pageHeader}
      <div
        className={classNames({
          Panel: true,
          [className]: !!className,
        })}
      >
        {children}
      </div>
    </>
  );
};
