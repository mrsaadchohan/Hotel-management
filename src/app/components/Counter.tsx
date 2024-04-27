"use client";

import { FC, useEffect, useState } from "react";
type Props = {
  endValue: number;
  duration: number;
};
const Counter: FC<Props> = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    const updateCount = (timeStamp: number) => {
      if (!startTime) startTime = timeStamp;
      const progres = timeStamp - startTime;
      if (progres < duration) {
        setCount(Math.min(endValue, (progres / duration) * endValue));
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };
    animationFrameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration]);
  return (
    <p className="md:font-bold font-medium text-lg xl:text-5xl">
      {Math.round(count)}
    </p>
  );
};

export default Counter;
