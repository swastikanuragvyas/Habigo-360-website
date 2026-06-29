import React, { useRef, useEffect, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number; // ms
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShown(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.2em] -mb-[0.2em] mr-[0.25em]">
          <span
            className="inline-block transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
            style={{
              transform: shown ? "translateY(0)" : "translateY(110%)",
              transitionDelay: `${i * 60}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
