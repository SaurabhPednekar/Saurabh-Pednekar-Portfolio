"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function Counter({ value, prefix = "", suffix = "", duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    const controls = animate(motionVal, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, value, duration, motionVal]);

  // Safety net: if the in-view trigger never fires (e.g. very short
  // viewports), still show the real value rather than 0.
  useEffect(() => {
    const t = setTimeout(() => {
      if (!done.current) {
        done.current = true;
        setDisplay(value);
      }
    }, 1200);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
