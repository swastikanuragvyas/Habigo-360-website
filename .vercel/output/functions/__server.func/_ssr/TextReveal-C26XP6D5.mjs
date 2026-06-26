import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function TextReveal({ text, className = "", delay = 0 }) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, className: `inline-block ${className}`, children: words.map((word, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block overflow-hidden pb-1 mr-[0.25em]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-block transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)",
      style: {
        transform: shown ? "translateY(0)" : "translateY(110%)",
        transitionDelay: `${i * 60}ms`
      },
      children: word
    }
  ) }, i)) });
}
export {
  TextReveal as T
};
