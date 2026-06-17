import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, a as Founders, F as Footer, S as StickyCTA } from "./router-DsNkOnnW.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./server-DUsf7i-P.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/zod.mjs";
function AboutPage() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [navOpen, setNavOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background text-foreground min-h-screen font-sans antialiased selection:bg-accent selection:text-emerald-deep", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { scrolled, navOpen, setNavOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VisionMission, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Founders, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyCTA, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-emerald-deep text-ivory pt-40 pb-28 lg:pt-52 lg:pb-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-ivory/50", children: "About Us" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-[clamp(2.5rem,6vw,6rem)] leading-[1.02] font-light", children: [
      "We build ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-accent", children: "enduring" }),
      " brands."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-ivory/70 max-w-2xl mx-auto text-lg leading-relaxed", children: "HabiGo 360 is a creative growth agency helping ambitious brands lead their markets through marketing, content, branding, technology, and business strategy." })
  ] }) });
}
function VisionMission() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-28 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
        " Our Vision"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl lg:text-5xl leading-tight text-balance", children: [
        "To be the benchmark for",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-emerald-deep", children: "creative excellence" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-foreground/70 leading-relaxed text-[15px]", children: "We see a future where brands don't just compete on price or utility, but on meaning. Our vision is to elevate the standard of brand communication, making every interaction an opportunity to build trust and inspire loyalty. We want to be the partner that the world's most ambitious companies turn to when they are ready to leave a legacy." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
        " Our Mission"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl lg:text-5xl leading-tight text-balance", children: [
        "To engineer ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-emerald-deep", children: "growth" }),
        " through craft."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-foreground/70 leading-relaxed text-[15px]", children: "Our mission is to bridge the gap between stunning creative and measurable business results. We exist to help our partners navigate the noise of modern markets with clarity, precision, and soul. By integrating strategy, design, and performance, we build growth engines that are as effective as they are beautiful." })
    ] })
  ] }) }) });
}
export {
  AboutPage as component
};
