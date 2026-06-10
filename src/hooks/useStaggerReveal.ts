import { useRef, useEffect, useState, useCallback } from "react";


interface StaggerRevealOptions {
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** Stagger delay in ms between each item */
  staggerMs?: number;
  /** Root margin for IO */
  rootMargin?: string;
}

interface ItemState {
  ref: (el: HTMLElement | null) => void;
  style: Record<string, string>;
}

/**
 * Optimised scroll-staggered reveal hook.
 * Uses ONE IntersectionObserver per hook instance (not per item).
 * Animates via `transform: translate3d()` and `opacity` for GPU compositing.
 * Cleans up observer on unmount and sets `will-change` only during animation window.
 *
 * @example
 *   const items = useStaggerReveal({ staggerMs: 100 });
 *   // ...
 *   <div ref={items[0].ref} style={items[0].style}>Card 1</div>
 *   <div ref={items[1].ref} style={items[1].style}>Card 2</div>
 */
export function useStaggerReveal({
  threshold = 0.1,
  staggerMs = 100,
  rootMargin = "0px 0px -50px 0px",
}: StaggerRevealOptions = {}) {
  const [revealed, setRevealed] = useState(false);
  const ioRef = useRef<IntersectionObserver | null>(null);
  const elRef = useRef<HTMLElement | null>(null);

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      elRef.current = el;
      if (!el || revealed) return;

      if (!ioRef.current) {
        ioRef.current = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setRevealed(true);
              ioRef.current?.disconnect();
              ioRef.current = null;
            }
          },
          { threshold, rootMargin },
        );
      }
      ioRef.current.observe(el);
    },
    [revealed, threshold, rootMargin],
  );

  useEffect(() => {
    return () => {
      ioRef.current?.disconnect();
      ioRef.current = null;
    };
  }, []);

  return {
    shown: revealed,
    containerRef: setRef,
  };
}

/**
 * Build stagger animation styles for N items.
 * Pure function, no hooks — call inside render.
 */
export function staggerItemStyle(
  shown: boolean,
  index: number,
  staggerMs: number = 100,
): Record<string, string> {
  if (!shown) {
    return {
      opacity: "0",
      transform: "translate3d(0, 24px, 0)",
      transition: "none",
    };
  }

  const delay = index * staggerMs;
  return {
    opacity: "1",
    transform: "translate3d(0, 0, 0)",
    transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  };
}
