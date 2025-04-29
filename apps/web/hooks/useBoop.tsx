import { Variants } from "motion/react";
import React from "react";

export const useBoop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  transitionConfig = {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
}): [boolean, Variants, () => void] => {
  const [isBooped, setIsBooped] = React.useState(false);
  const variants = {
    boop: {
      translateX: x,
      translateY: y,
      rotate: rotation,
      scale: scale,
      transition: transitionConfig,
    },
    rest: {
      rotate: 0,
      scale: 1,
    },
  };
  React.useEffect(() => {
    if (!isBooped) return;

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  return [isBooped, variants, trigger];
};
