import { useEffect, useState } from "react";
import * as React from "react";
import "./styles.scss";

// ------------------------
//         Helpers
// ------------------------

const buildAnimationStyle = (
  type: AnimationType,
  duration: string
): React.CSSProperties => {
  return {
    display: "inline-block",
    animation: `${type} ${duration}`,
  };
};

// ------------------------
//         Types
// ------------------------

type AnimationType = "fade" | "slideDown" | "slideUp" | "squish" | "blur";

type TextSwapProps = {
  strings: string[];
  interval?: number;
  animationType?: AnimationType;
  animationDuration?: string;
};

// ------------------------
//      Main Component
// ------------------------

const TextSwap = ({
  strings,
  interval = 2000,
  animationType = "fade",
  animationDuration = "2s",
}: TextSwapProps) => {
  const defaultStyle = buildAnimationStyle(animationType, animationDuration);
  const [currString, setCurrString] = useState(strings[0]);
  const [animationStyle, setAnimationStyle] = useState(defaultStyle);

  useEffect(() => {
    const timer = setInterval(() => {
      const currIndex: number = strings.indexOf(currString);
      const nextIndex: number =
        currIndex < strings.length - 1 ? currIndex + 1 : 0;
      setCurrString(strings[nextIndex]);
    }, interval);
    return () => {
      setAnimationStyle({});
      clearInterval(timer);
      setAnimationStyle(animationStyle);
    };
  }, [currString, strings, interval, animationStyle]);

  return (
    <div key={currString} style={animationStyle}>
      {currString}
    </div>
  );
};

export default TextSwap;
