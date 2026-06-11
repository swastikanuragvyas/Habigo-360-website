import { useEffect, useState, useRef } from "react";
import { animate, useInView } from "framer-motion";

export function AnimatedNumber({ value }: { value: number }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isFloat = value % 1 !== 0;

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setCurrent(isFloat ? parseFloat(v.toFixed(1)) : Math.round(v)),
      });
      return controls.stop;
    }
  }, [value, isInView, isFloat]);

  return <span ref={ref}>{current}</span>;
}
