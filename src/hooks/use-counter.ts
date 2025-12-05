"use client";

import { useState, useEffect, useRef } from "react";

interface UseCounterOptions {
  duration?: number;
  delay?: number;
  decimals?: number;
}

export function useCounter(
  end: number,
  inView: boolean,
  options: UseCounterOptions = {}
) {
  const { duration = 2000, delay = 0, decimals = 0 } = options;
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;

    hasAnimated.current = true;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();

      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(end);
        return;
      }

      const progress = (now - startTime) / duration;
      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;

      setCount(Number(current.toFixed(decimals)));
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration, delay, decimals]);

  return count;
}
