import { useEffect, useState, useRef } from "react";
import { animate, useInView } from "framer-motion";

export function AnimatedNumber({ value }: { value: number }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && typeof value === "number" && !isNaN(value)) {
      const isFloat = value % 1 !== 0;
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setCurrent(isFloat ? parseFloat(v.toFixed(1)) : Math.round(v)),
      });
      return controls.stop;
    }
  }, [value, isInView]);

  return <span ref={ref}>{current || value}</span>;
}
