import "./RippleEffect.sass";

import React, { useState, useLayoutEffect } from "react";

import { RippleEffectProps } from "./RippleEffect.interface";

export const RippleEffect: React.FC<RippleEffectProps> = ({ onClick, color }) => {
  const [rippleArray, setRippleArray] = useState<Array<Object>>([]);

  useLayoutEffect(() => {
    const duration = 500;
    const rippleCount = rippleArray.length;

    let timer: ReturnType<typeof setTimeout>;

    if (rippleCount > 0) {
      timer = setTimeout(() => {
        setRippleArray([]);
        clearTimeout(timer);
      }, duration * 4);
    }

    return () => clearTimeout(timer);
  }, [rippleArray.length]);

  const addRipple = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rippleContainer = e.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = e.clientX - rippleContainer.x - size / 2;
    const y = e.clientY - rippleContainer.y - size / 2;

    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);

    onClick && onClick();
  };

  return (
    <div className="Ripple" onClick={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple: any, index: number) => {
          return (
            <span
              className="Ripple__effect"
              key={"ripple-effect-block" + index}
              style={{
                backgroundColor: color,
                top: ripple?.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </div>
  );
};
