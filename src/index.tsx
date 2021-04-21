import { useEffect, useState } from "react";
import * as React from "react";
import "./styles.scss";

// ------------------------
//         Helpers
// ------------------------

const buildAnimationStyle = (
  type: AnimationType,
  duration: number
): React.CSSProperties => {
  return {
    display: "inline-block",
    animation: `${type} ${duration}s`,
  };
};

// ------------------------
//         Types
// ------------------------

type AnimationType = "fade" | "slideDown" | "slideUp" | "squish" | "blur";

type TextSwapProps = {
  strings: string[];
  seconds?: number;
  animationType?: AnimationType;
  fixedWidthInPx?: number;
};

// ------------------------
//      Main Component
// ------------------------

const TextSwap = ({
  strings,
  seconds = 2,
  animationType = "fade",
  fixedWidthInPx,
}: TextSwapProps) => {
  const defaultStyle = buildAnimationStyle(animationType, seconds);
  const [currString, setCurrString] = useState(strings[0]);
  const [animationStyle, setAnimationStyle] = useState(defaultStyle);
  useEffect(() => {
    const timer = setInterval(() => {
      const currIndex: number = strings.indexOf(currString);
      const nextIndex: number =
        currIndex < strings.length - 1 ? currIndex + 1 : 0;
      setCurrString(strings[nextIndex]);
    }, seconds * 1000);
    return () => {
      setAnimationStyle({});
      clearInterval(timer);
      setAnimationStyle(animationStyle);
    };
  }, [currString, strings, animationStyle]);

  if (fixedWidthInPx) {
    return (
      <div
        style={{
          display: "inline-block",
          width: `${fixedWidthInPx}px`,
          textAlign: "center",
        }}
      >
        <div key={currString} style={animationStyle}>
          {currString}
        </div>
      </div>
    );
  } else {
    return (
      <div key={currString} style={animationStyle}>
        {currString}
      </div>
    );
  }
};

export default TextSwap;
